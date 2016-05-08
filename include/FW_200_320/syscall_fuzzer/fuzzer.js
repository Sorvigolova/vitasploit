/*
	Syscall fuzzing utility
*/

var user_land_buffer = [];
var user_buffer_type = 2; // 0:Fixed 1:Random 2:Natural
var user_buffer_chr = 0x00;
var user_buffer_size = 128;
var all_module = true;
var infinite_fuzz = true;
var fuzz_number = 100;
var print_fuzz_buffer = false;
var print_fuzz_call = true;
var RND_ARG = 0xc0decaca;
var myThreadId = 0;

function d2h(d) 
{
    var s = (+d).toString(16);
    if(s.length < 2) {
        s = '0' + s;
    }
    return s;
}

function randmemset(ptr, size)
{
	for (var i = 0; i < size; i++)
	{
		aspace[ptr+i] = Math.floor((Math.random() * 256)); // TODO: fast pseudo rand
	}
}

function hex_dump(ptr, size)
{
	var last_line = "";
	var dot_printed = 0;
	var tmp = "";
	for(i = 0; i < size; i++)
	{
		tmp += d2h(aspace[ptr+i]);
		if (i%2 == 1) {
			tmp += " ";
		}
		if (i%16 == 15 || i == size-1) {
			if (tmp !== last_line) {
				logdbg(tmp);
				last_line = tmp;
				dot_printed = 0;
			} else { 
				if(dot_printed == 0) {
					logdbg("...")
					dot_printed++;
				}
			}
			tmp = "";
		}
	}
}

function getNaturalRandom()
{
	var state = Math.floor((Math.random() * 10));
	
	switch(state) {
		case 0:
			return 0;
		case 1:
			return Math.floor((Math.random() * 512));
		case 2:
			return Math.floor((Math.random() * 1024));
		case 3:
			return Math.floor((Math.random() * 1024*1024));
		case 4:
			return 0xFFFFFFFF;
		case 5:
		case 6:
		case 7:
			return myThreadId;
		case 8:
			return user_land_buffer[Math.floor((Math.random() * 9))];
		default:
			return Math.floor((Math.random() * 0x80000000));
	}

	return tmp;
 }
 
function cleanUserBuffer(i) {
	if (user_buffer_type == 0) { //Fixed
		mymemset(user_land_buffer[i], user_buffer_chr, user_buffer_size);
	} else if(user_buffer_type == 1) { //Randomized
		randmemset(user_land_buffer[i], user_buffer_size);
	} else { //Natural
		var m;
		for(m = 0; m < user_buffer_size; m += 4) {
			aspace32[(user_land_buffer[i] + m) / 4] = getNaturalRandom();
		}
	}
}

function getFuzzRandom(i)
{
	var state = Math.floor((Math.random() * 10));
	var sign = Math.floor((Math.random() * 2));
	if (sign == 0) {
		sign = -1;
	}
	
	switch(state){
		case 0:
			return 0;
		case 1:
			return sign * Math.floor((Math.random() * 512));
		case 2:
			return sign * Math.floor((Math.random() * 1024));
		case 3:
			return sign * Math.floor((Math.random() * 1024*1024));
		case 4:
			return 0xFFFFFFFF;
		case 5:
		case 6:
		case 7:
			return myThreadId;
		case 8:
			cleanUserBuffer(i);
			return user_land_buffer[i];
		default:
			return Math.floor((Math.random() * 0x80000000));
	}

	return tmp;
}

function getSyscallNumber(moduleName, offset)
{
	if (moduleBase[moduleName]) {
		var syscall_addr = moduleBase[moduleName] + offset;
		if (syscall_addr) {
			return extract_syscall_number(syscall_addr);
		}
	}
	return 0xC0DECACA;
}

function Syscall_N(syscallNumber, arg1, arg2, arg3, arg4)
{
	var scekernel = libraries.SceLibKernel.functions;
	return scekernel.sceGenSyscall(arg1, arg2, arg3, arg4, syscallNumber);
}

function Syscall_MO(moduleName, offset, arg1, arg2, arg3, arg4)
{
	var syscallNumber = getSyscallNumber(moduleName, offset);
	return Syscall_N(syscallNumber, arg1, arg2, arg3, arg4);
}

function Fuzz_Sycall_N(syscall_code, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)
{
	var scekernel = libraries.SceLibKernel.functions;	
	var extra_args = allocate_memory(0x14);
	
	var max = 0;
	var j;
	for(j = 0; j < fuzz_number; j++)
	{
		//TODO: loop!
		var rand_arg = [];
		var n_args_min = 0;
		if (typeof arg4 !== 'undefined') {
			n_args_min = 4;
		} else if (typeof arg3 !== 'undefined') {
			n_args_min = 3;
		} else if (typeof arg2 !== 'undefined') {
			n_args_min = 2;
		} else if (typeof arg1 !== 'undefined') {
			n_args_min = 1;
		}
		var n_args = Math.floor((Math.random() * 9)) + n_args_min;
		var call_string = "@" + j + " CALL " + syscall_code.toString(16) + " (";
		if (n_args >= 1)
		{
			if (typeof arg1 === 'undefined'
			|| arg1 == 0xc0decaca){ 
				rand_arg[0] = getFuzzRandom(0);
			} else {
				rand_arg[0] = arg1;
			}
			call_string += "0x" + rand_arg[0].toString(16);
		}
		if (n_args >= 2) {
			if (typeof arg2 === 'undefined'
			|| arg2 == 0xc0decaca){ 	
				rand_arg[1] = getFuzzRandom(1);
			} else {
				rand_arg[1] = arg2;
			}
			call_string += ", 0x" + rand_arg[1].toString(16);
		}
		if (n_args >= 3) {
			if (typeof arg3 === 'undefined'
			|| arg3 == 0xc0decaca){ 
				rand_arg[2] = getFuzzRandom(2);
			} else {
				rand_arg[2] = arg3;
			}
			call_string += ", 0x" + rand_arg[2].toString(16);
		}		
		if (n_args >= 4) {
			if (typeof arg4 === 'undefined'
			|| arg4 == 0xc0decaca ){
				rand_arg[3] = getFuzzRandom(3);
			} else {
				rand_arg[3] = arg4;
			}
			call_string += ", 0x" + rand_arg[3].toString(16);
		}		
		if (n_args >= 5) {
			aspace32[(extra_args) / 4] = rand_arg[3];
			rand_arg[3] = extra_args;
			rand_arg[4] = getFuzzRandom(4);
			aspace32[(extra_args + 4) / 4] = rand_arg[4];
			call_string += ", 0x" + rand_arg[4].toString(16);
		}		
		if (n_args >= 6) {
			rand_arg[5] = getFuzzRandom(5);
			aspace32[(extra_args + 8) / 4] = rand_arg[5];
			call_string += ", 0x" + rand_arg[5].toString(16);
		}		
		if (n_args >= 7) {
			rand_arg[6] = getFuzzRandom(6);
			aspace32[(extra_args + 12) / 4] = rand_arg[6];
			call_string += ", 0x" + rand_arg[6].toString(16);
		}
		if (n_args >= 8) {
			rand_arg[7] = getFuzzRandom(7);
			aspace32[(extra_args + 16) / 4] = rand_arg[7];
			call_string += ", 0x" + rand_arg[7].toString(16);
		}
		call_string += ")";

		//TODO: reproductible input !
		if (print_fuzz_call) {
			logdbg(call_string);
		}
		var res = scekernel.sceGenSyscall(rand_arg[0], rand_arg[1], rand_arg[2], rand_arg[3], syscall_code);
		if(print_fuzz_call){
			logdbg("res " + errToString(res));
		}
		
		if (print_fuzz_buffer){
			for (var k = 0; k < 8; k++){
				if (rand_arg[k] == user_land_buffer[k]
					&& (aspace[user_land_buffer[k]] != user_buffer_chr || aspace[user_land_buffer[k]+1] != user_buffer_chr) ){
						logdbg("user_buffer[" + k +"] : ");
						hex_dump(user_land_buffer[k], user_buffer_size);
						logdbg(" ");
				}
			}
		}
	}
}

function Fuzz_Sycall_MO(moduleName, offset, arg1, arg2, arg3, arg4)
{
	logdbg("Fuzz " + moduleName + "@0x" + offset.toString(16));
	Fuzz_Sycall_N(getSyscallNumber(moduleName, offset), arg1, arg2, arg3, arg4);
}

function Test_Fuzzer()
{
	var scekernel = libraries.SceLibKernel.functions;
	myThreadId = scekernel.sceKernelGetThreadId();
	
	// Allocate user land buffer.
	var k;
	for(k = 0; k < 8; k++) {
		user_land_buffer[k] = allocate_memory(user_buffer_size);
	}
	
	if (all_module) {
		load_sysmodules_args();
		load_sysmodules();
		list_modules("All", false);
	}
	
	logdbg("Start Fuzzing...");
	var movIP = syscallOffsets();
	var moduleNameKeys = Object.keys(moduleBase);
	do {
		moduleName = moduleNameKeys[Math.floor((Math.random()*moduleNameKeys.length))];
		if (moduleName in movIP) {
			for (var i=0; i<movIP[moduleName].length; i++) {
				logdbg("\n");
				Fuzz_Sycall_MO(moduleName, movIP[moduleName][i]);
			}
		}
	} while (infinite_fuzz);

	return 0;
}