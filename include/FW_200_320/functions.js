/*
   Functions for ROP
*/

/*
    Defines
*/
SCE_NET_AF_INET = 2
SCE_NET_SOCK_STREAM = 1
SIZEOF_SIN = 16
SCE_NET_SO_RCVTIMEO = 0x1006
SCE_NET_SOL_SOCKET = 0xffff

/*
    Native malloc
*/
function libc_malloc(size)
{
    return libraries.SceLibc.functions.malloc(size);
}

/*
    Native memcpy
*/
function libc_memcpy(dest, src, len)
{
    return libraries.SceLibc.functions.memcpy(dest, src, len);
}

/*
    Native memset
*/
function libc_memset(dest, val, len)
{
    return libraries.SceLibc.functions.memset(dest, val, len);
}

/*
    Native memcmp
*/
function libc_memcmp(addr1, addr2, len)
{
    return libraries.SceLibc.functions.memcmp(addr1, addr2, len);
}

/*
   Connect to ip on given port
*/
function socket_connect(ip, port)
{
    var scenet = libraries.SceNet.functions;
	
    var sockaddr = allocate_memory(32); 
    mymemset(sockaddr, 0, SIZEOF_SIN);

    aspace[sockaddr] = SIZEOF_SIN;
    aspace[sockaddr + 1] = SCE_NET_AF_INET;

    var PORT = port;
    logdbg("Calling nethtons()");
    var r = scenet.sceNetHtons(PORT); 
    logdbg("-> 0x" + r.toString(16) + "\n"); 
    aspace16[((sockaddr + 2) / 2)] = r;

    aspace32[(sockaddr + 4) / 4] = inet_addr(ip);

    var dbgname = "test_socket\x00";
    var dbgnameaddr = allocate_memory(dbgname.length);

    mymemcpy(dbgnameaddr, dbgname, dbgname.length);

    logdbg("Calling SceNetSocket()");
    var sockfd = scenet.sceNetSocket(dbgnameaddr, SCE_NET_AF_INET, SCE_NET_SOCK_STREAM, 0);
    logdbg("-> 0x" + sockfd.toString(16) + "\n"); 

    logdbg("Calling SceNetConnect()");
    var r = scenet.sceNetConnect(sockfd, sockaddr, SIZEOF_SIN); 
    logdbg("-> 0x" + r.toString(16) + "\n"); 
	
	return sockfd;    
}

/*
   Send message
*/
function socket_send(sockfd, msg)
{
	var scenet = libraries.SceNet.functions;
	
	var msgaddr = allocate_memory(msg.length);
    mymemcpy(msgaddr, msg, msg.length);

    logdbg("Calling SceNetSend()");
    var sent = scenet.sceNetSend(sockfd, msgaddr, msg.length, 0);
    logdbg("-> 0x" + sent.toString(16) + "\n"); 
}

/*
   Close socket
*/
function socket_close(sockfd)
{
	var scenet = libraries.SceNet.functions;
	
	logdbg("Calling SceNetClose()");
    var sent = scenet.sceNetSocketClose(sockfd, 0, 0, 0);
    logdbg("-> 0x" + sent.toString(16) + "\n"); 
}

/*
    List and dump all visible modules using SceLibKernel syscalls
*/
function list_modules(m_name, doDump)
{
	var scekernel = libraries.SceLibKernel.functions;
	
	var MAX_MODULES = 0x80;
	var MOD_INFO_SIZE = 0x1B8;
    var mod_list_addr = allocate_memory(MAX_MODULES * 4);
	var mod_info_addr = allocate_memory(MOD_INFO_SIZE * 4);
    var mod_num_addr = allocate_memory(0x4);
    aspace32[mod_num_addr / 4] = MAX_MODULES;
	
	var mod_segments = [];
    var mod_offsets = {};
    var mod_sizes = {};

    var list_result = scekernel.sceKernelGetModuleList(0xFF, mod_list_addr, mod_num_addr);
	
    if (list_result != 0x0)
	{
		logdbg("Error: 0x" + list_result.toString(16));
        return aspace
	}
	
	logdbg("Module UIDs: ");
	var mod_num = aspace32[mod_num_addr / 4];
    do_read(aspace, mod_list_addr, mod_num * 4);

    for (var i = 0; i < mod_num * 4; i += 4)
	{
		var info_result = scekernel.sceKernelGetModuleInfo(aspace32[(mod_list_addr + i) / 4], mod_info_addr);
        
		if (info_result != 0x0)
		{
			logdbg("Error: 0x" + info_result.toString(16));
			continue;
        }
		
        var mod_seg_info_addr = mod_info_addr + 0x154;
        var mod_name_addr = mod_info_addr + 0xC;
		var mod_name = read_string(mod_name_addr);
        
		if ((m_name == mod_name) || (m_name == "All"))
			logdbg("Found module: " +  mod_name);
        
		for (var j = 0; j <= 4; j++)
		{
			var mod_seg_addr = mod_seg_info_addr + j * 0x18;
			
			if (aspace32[(mod_seg_addr) / 4] != 0x18)
				continue;
                
            var mod_vaddr = aspace32[(mod_seg_addr + 8) / 4];
            var mod_memsz = aspace32[(mod_seg_addr + 12) / 4];
			
			if ((m_name == mod_name) || (m_name == "All"))
			{
				logdbg("Module segment info: #" + j);
				logdbg("Module segment vaddr: 0x" + mod_vaddr.toString(16));
				logdbg("Module segment memsz: 0x" + mod_memsz.toString(16));
			}
			
			if (j == 0)
				moduleBase[mod_name] = mod_vaddr;
			
			mod_segments.push([mod_vaddr, mod_memsz, mod_name]);
            mod_offsets[mod_name + ".seg"+ j.toString()] = mod_vaddr;
            mod_sizes[mod_name + ".seg"+ j.toString()] = mod_memsz;
			
			if (doDump && ((m_name == mod_name) || (m_name == "All")))
				do_dump(aspace, mod_vaddr, mod_memsz, mod_name + ".seg" + j.toString()+ ".bin");
        }
	}
	return [mod_segments, mod_offsets, mod_sizes];
}

/*
    Brute-force load all possible user modules using sceSysmoduleLoadModule
*/
function load_sysmodules()
{
	var scewkproc = libraries.SceWebKitProcess.functions;
	
	// sceSysmoduleLoadModule can load a few modules
	for (var i = 1; i < 0x65; i++)
	{
		var load_result = scewkproc.sceSysmoduleLoadModule(i);
		logdbg("sceSysmoduleLoadModule(#" + i.toString() + "): 0x" + load_result.toString(16));
	}
}

/*
    Brute-force load all possible user modules using sceSysmoduleLoadModuleWithArgs
*/
function load_sysmodules_args()
{
	var scecdiag = libraries.SceCommonDialog.functions;
	
	var mod_start_ptr = allocate_memory(0x100);
	
	// Unload SceCommonDialogMain first
	var unloadargs_result = scecdiag.sceSysmoduleUnloadModuleWithArgs(0x80000012, 0, 0, mod_start_ptr);
	logdbg("sceSysmoduleUnloadModuleWithArgs(0x80000012): 0x" + unloadargs_result.toString(16));
	
	// sceSysmoduleLoadModuleWithArgs can load modules by ID
	// WARNING: Loading modules with this function may crash the Vita's LiveArea
	for (var k = 0x80000001; k < 0x80000065; k++)
	{
		if (k != 0x80000008 && k != 0x8000000f && k != 0x80000012)
		{
			var loadargs_result = scecdiag.sceSysmoduleLoadModuleWithArgs(k, 0, 0, mod_start_ptr);
			logdbg("sceSysmoduleLoadModuleWithArgs(0x" + k.toString(16) + "): 0x" + loadargs_result.toString(16));
        }
    }
		
	/* 
	Missing modules:
		
	-> Error 0x8002d003 (no library):
		0x8000000d, 0x8000000e, 0x80000010, 0x80000011, 0x80000013, 0x80000014, 0x80000015,
		0x80000016, 0x80000017, 0x80000018, 0x8000001d, 0x80000021, 0x80000022, 0x80000026
	
	-> Error 0x80010002 (no entry):
		0x80000019, 0x8000001c
		   
	-> Error 0x800f0b34 (unknown):
		0x80000028, 0x80000029
	*/
}

/*
	Load ScePaf
*/
function load_scepaf()
{
	var scecdiag = libraries.SceCommonDialog.functions;
	
	var mod_start_ptr = allocate_memory(0x100);
	var scepaf_argc = 0x14;
	var scepaf_argp = allocate_memory(scepaf_argc);
	aspace32[(scepaf_argp) / 4] = 0x00180000;
	aspace32[(scepaf_argp + 4) / 4] = 0x00000000;
	aspace32[(scepaf_argp + 8) / 4] = 0x00000000;
	aspace32[(scepaf_argp + 12) / 4] = 0x00000001;
	aspace32[(scepaf_argp + 16) / 4] = 0x00000000;
			
	var scepaf_result = scecdiag.sceSysmoduleLoadModuleWithArgs(0x80000008, scepaf_argc, scepaf_argp, mod_start_ptr);
	logdbg("sceSysmoduleLoadModuleWithArgs(0x80000008): 0x" + scepaf_result.toString(16));
}

/*
	Load ScePhotoImportDialogPlugin
*/
function load_scephotoimpdlgplugin()
{
	var scecdiag = libraries.SceCommonDialog.functions;
	
	var mod_start_ptr = allocate_memory(0x100);
	
	var scephotoimpdlgplugin_result = scecdiag.sceSysmoduleLoadModuleWithArgs(0x8000000f, 0, 0, mod_start_ptr);
	logdbg("sceSysmoduleLoadModuleWithArgs(0x8000000f): 0x" + scephotoimpdlgplugin_result.toString(16));
}

/*
	Load SceCommonDialogMain
*/
function load_scecdiagmain(seg1addr)
{
	var scecdiag = libraries.SceCommonDialog.functions;
	
	var mod_start_ptr = allocate_memory(0x100);
	var scecdiagmain_argc = 0x4;
	var scecdiagmain_argp = allocate_memory(scecdiagmain_argc);
	aspace32[(scecdiagmain_argp) / 4] = seg1addr;
			
	var scecdiagmain_result = scecdiag.sceSysmoduleLoadModuleWithArgs(0x80000012, scecdiagmain_argc, scecdiagmain_argp, mod_start_ptr);
	logdbg("sceSysmoduleLoadModuleWithArgs(0x80000012): 0x" + scecdiagmain_result.toString(16));
}