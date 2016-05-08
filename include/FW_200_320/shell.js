/*
    Interactive shell
*/

/*
    Defines
*/
var MODINFO_SIZE = 0x5c;
var MOD_SIG = "Sce";
var MAXSTR_SIZE = 27;
var MODX_SIZE = 0x20;
var MODIM_SIZE = 0x34;

/*
    Get len bytes from addr
*/
function get_bytes(aspace, addr, len)
{
    var retbuf = "";
	var hex = 0x0;
    for (var i = 0; i < len; i++) {
        hex = aspace[addr + i].toString(16);
        if(hex.length == 1){
            hex = "0" + hex;
        }
        retbuf = retbuf + hex;
    }
    return retbuf;
}

/*
	Run a script from the shell
*/
function run_script(script)
{
	try
    {
        jQuery.globalEval(script); // With this, your variables can persist.
    }
    catch(e)
    {
        logdbg("RunScriptError: " + e);
    }
}

/*
    Output text to file
*/
function log_out(text)
{
    try
	{
        if (log_out_filepath)
        {
            sendcmsg("log", 0, text + "\n", log_out_filepath);
        }
    }
	catch(e)
	{
        logdbg("LogOutError: " + e);
    }
}

/*
    Read len bytes from addr (30000 bytes at a time)
*/
function do_read(aspace, addr, len)
{
    try {
        if (len <= 30000) {
            var bytes = get_bytes(aspace, addr, len);
            sendcmsg("read", addr, bytes);
        } else {
            var n = len;
            var xaddr = addr;
            while(n > 30000) {
                var bytes = get_bytes(aspace, xaddr, 30000);
                sendcmsg("read", xaddr, bytes);
                n -= 30000;
                xaddr += 30000;
            }
            var bytes = get_bytes(aspace, xaddr, n);
            sendcmsg("read", xaddr, bytes);
        }
    } catch(e) {
        logdbg("ReadError: " + e);
    }
}

/*
    Dump len bytes from addr to fname (30000 bytes at a time)
*/
function do_dump(aspace, addr, len, fname)
{
    try {
        if (len <= 30000) {
            var bytes = get_bytes(aspace, addr, len);
            sendcmsg("dump", addr, bytes, fname);
        } else {
            var n = len;
            var xaddr = addr;
            while (n > 30000) {
                var bytes = get_bytes(aspace, xaddr, 30000);
                sendcmsg("dump", xaddr, bytes, fname);
                n -= 30000;
                xaddr += 30000;
				
				// Print progress.
				logdbg("Dumping " + fname + ": %"+ (100 - (n/len * 100)).toString() + "\033[1A\r");
            }
            var bytes = get_bytes(aspace, xaddr, n);
            sendcmsg("dump", xaddr, bytes, fname);
        }
		logdbg("Dumped " + fname);
    } catch(e) {
        logdbg("DumpError: " + e);
    }
}

/*
    Disassemble len bytes from addr with mode
*/
function do_dis(aspace, addr, len, mode)
{
    try {
        var bytes = get_bytes(aspace, addr, len);
        sendcmsg("disasm", addr, bytes, mode);
    } catch(e) {
        logdbg("DisasmError: " + e);
    }
}

/*
    Search for pattern in [begaddr, endaddr]
*/
function do_search(aspace, begaddr, endaddr, pattern)
{
    try {
        var score = 0;
        var found = -1;
        var reverse = false;
        if (endaddr == begaddr) {
            logdbg("SearchError: ss begaddr must not equal endaddr");
            return;
        }
        if(endaddr <= begaddr){
            logdbg("Searching in reverse");
            reverse = true;
        }

        for(var i = begaddr; i != endaddr;){
           var cb = aspace[i];
           var index = reverse ? (pattern.length - score - 1) : score;
           var tb = pattern[index].charCodeAt(0);
           
           if ((i % 0x10000) == 0) {
               logdbg("0x" + i.toString(16) + " ...");
           }
           if (cb == tb) {
               score += 1;
               if(score == pattern.length){found = reverse ? i : (i - score + 1); break;}
           } else {
               score = 0;
           }
           i += reverse ? -1 : 1;
        }
        if (found == -1) {
            logdbg("Pattern not found");
        } else {
            logdbg("Pattern " + pattern + " found at: 0x" + found.toString(16));
            return found;
        }
    } catch(e) {
        logdbg("SearchError: " + e);
    }
}

/*
	Search for hex pattern in [begaddr, endaddr]
*/
function do_search_hex(aspace, begaddr, endaddr, pattern)
{
    try {
        var score = 0;
        var found = -1;
        var reverse = false;

        if (endaddr == begaddr) {
            logdbg("SearchError: ss begaddr must not equal endaddr");
            return;
        }

        if (pattern.length % 2){
            logdbg("SearchError: pattern must be a multiple of 2");
            return;
        }

        if(endaddr < begaddr){
            logdbg("Searching in reverse");
            reverse = true;
        }

        var hexpattern = []
        for(var i = 0; i < pattern.length; i += 2)
        {
            hexpattern.push(parseInt(pattern[i] + pattern[i + 1], 16));
        }

        for(var i = begaddr; i != endaddr;){
           var cb = aspace[i];
           var index = reverse ? (hexpattern.length - score - 1) : score;
           var tb = hexpattern[index];

           if((i % 0x10000) == 0) {
               logdbg("0x" + i.toString(16) + " ...");
           }
           if(cb == tb){
               score += 1;
               if(score == hexpattern.length){ found = reverse ? i : (i - score + 1); break; }
               }else{
                   score = 0;
               }

               i += reverse ? -1 : 1;
           }
           if(found == -1){
               logdbg("Pattern not found");
           } else {
               logdbg("Pattern " + pattern + " found at: 0x" + found.toString(16));
               return found;
           }
    }catch(e){
        logdbg("SearchError: " + e);
    }
}

/*
    Scan the memory backwards until it crashes
*/
function scan_back(aspace, begaddr, step)
{
    var curr = begaddr;
    while(true) {
        var bytes = get_bytes(aspace, curr, step);
        logdbg("Last accessed: 0x" + curr.toString(16));
        curr -= step;
    }
}

/*
    Scan for module information starting at given address
*/
function scan_mod_info(aspace, addr)
{
    try {
        var searchaddr = addr;
        while(true) {
            var found = do_search(aspace, searchaddr, 0xffffffff, MOD_SIG);

            if (found < 0) {
                logdb("Module scanning failed");
                return;
            }

            // Get mod_info struct
            var maddr = found - 4;
            var buf = get_bytes(aspace, maddr, MODINFO_SIZE);

            // Perform a few checks to make sure it is a mod_info struct
            var modver = buf.substring(4, 8);
            if (modver != "0101") {
                logdbg("Module scanner found false positive at: 0x" + maddr.toString(16));
                searchaddr = found + MOD_SIG.length;
                continue;
            }
            var gp_value = buf.substring(64, 72);
            if (gp_value != "00000000") {
                logdbg("Module scanner found false positive at: 0x" + maddr.toString(16));
                searchaddr = found + MOD_SIG.length;
                continue;
            }

            sendcmsg("mod_info", maddr, buf);
            break;
    }
    } catch(e) {
        logdbg("ModScanError: " + e);
    }
}

/*
    Display a mod_info starting from addr 
*/ 
function disp_minfo(aspace, addr)
{
    try {
        var buf = get_bytes(aspace, buf, MODINFO_SIZE);
        sendcmsg("mod_info", addr, buf);
    } catch(e) {
        logdbg("DisplayError: " + e);
    }
}

/*
    Display n imports starting from addr 
*/ 
function disp_imp(aspace, addr, n)
{
    try {
        var maddr = addr;
        for (var i = 0; i < n; i++) {
            var buf = get_bytes(aspace, maddr, MODIM_SIZE);
            var libptr = buf.substring(40, 48);
            libptr = parseInt(libptr, 16);
            libptr = swap32(libptr);
            var libname = "2222";
            if (libptr != 0) {
                libptr_e = do_search(aspace, libptr, 0xffffffff, "\x00");
                libname = get_bytes(aspace, libptr, libptr_e - libptr);
            }
            sendcmsg("mod_import", maddr, buf, libname); 
            maddr += MODIM_SIZE;
        }
    } catch(e) {
        logdbg("DisplayError: " + e);
    }
}

/*
    Display n exports starting from addr 
*/ 
function disp_ex(aspace, addr, n)
{
    try {
        var maddr = addr;
        for (var i = 0; i < n; i++) {
            var buf = get_bytes(aspace, maddr, MODX_SIZE);
            var libptr = buf.substring(40, 48);
            libptr = parseInt(libptr, 16);
            libptr = swap32(libptr);
            var libname = "2222";
            if(libptr != 0) {
                libptr_e = do_search(aspace, libptr, 0xffffffff, "\x00");
                libname = get_bytes(aspace, libptr, libptr_e - libptr);
            }
            sendcmsg("mod_export", maddr, buf, libname); 
            maddr += MODX_SIZE;
        }
    } catch(e) {
        logdbg("DisplayError: " + e);
    }
}

/*
    Command Handler
*/
function shell(aspace)
{
    try {
        while(true) {
            var cmd = getcmd();
            var cmd_s = cmd.split(" ");
            if(cmd_s[0] == "exit") {
                logdbg("Exiting...");
                return;
            }
            else if (cmd_s[0] == "read") {
                if (cmd_s.length < 3) {
                    logdbg("read <addr> <len>");
                    continue;
                }
                var addr = Number(cmd_s[1]);
                var len = Number(cmd_s[2]);
                do_read(aspace, addr, len); 
            }
            else if (cmd_s[0] == "disasm") {
                if (cmd_s.length < 3) {
                    logdbg("disasm <addr> <len> <mode>");
                    continue;
                }
                var mode = "arm";
                if (cmd_s.length > 3) {
                    mode = cmd_s[3];
                }
                var addr = Number(cmd_s[1]);
                var len = Number(cmd_s[2]);
                do_dis(aspace, addr, len, mode); 
            }
            else if(cmd_s[0] == "dump") {
                if (cmd_s.length < 3) {
                    logdbg("dump <addr> <len> <outfile>");
                    continue;
                }
                var addr = Number(cmd_s[1]);
                var len = Number(cmd_s[2]);
                var fname = cmd_s[3];
                do_dump(aspace, addr, len, fname);
            }
            else if (cmd_s[0] == 'ss') {
                if(cmd_s.length < 3) {
                    logdbg("ss <beginaddr> <endaddr> <pattern>");
                    continue;
                }
                var begaddr = Number(cmd_s[1]);
                var endaddr = Number(cmd_s[2]);
                var pattern = cmd_s[3];
                do_search(aspace, begaddr, endaddr, pattern);
            }
            else if(cmd_s[0] == 'sh'){
                if (cmd_s.length < 3) {
                    logdbg("sh <beginaddr> <endaddr> <hex pattern>");
                    continue;
                }
                var begaddr = Number(cmd_s[1]);
                var endaddr = Number(cmd_s[2]);
                var pattern = cmd_s[3];
                do_search_hex(aspace, begaddr, endaddr, pattern);
            }
            else if (cmd_s[0] == 'scanm') {
                if (cmd_s.length < 2) {
                    logdbg("scanm <beginaddr>");
                    continue;
                }
                var begaddr = Number(cmd_s[1]);
                scan_mod_info(aspace, begaddr);
            }
            else if (cmd_s[0] == 'dispx') {
                if (cmd_s.length < 2) {
                    logdbg("dispx <beginaddr> <n>");
                    continue;
                }
                var begaddr = Number(cmd_s[1]);
                var n = 1;
                if (cmd_s.length > 2) {
					n = Number(cmd_s[2])
				};
                disp_ex(aspace, begaddr, n);
            }
            else if (cmd_s[0] == 'dispim') {
                if (cmd_s.length < 2) {
                    logdbg("dispim <beginaddr> <n>");
                    continue;
                }
                var begaddr = Number(cmd_s[1]);
                var n = 1;
                if (cmd_s.length > 2) {
					n = Number(cmd_s[2])
				};
                disp_imp(aspace, begaddr, n);
            }
            else if (cmd_s[0] == 'dispminf') {
                if (cmd_s.length < 2) {
                    logdbg("dispminf <beginaddr>");
                    continue;
                }
                var begaddr = Number(cmd_s[1]);
                disp_minfo(aspace, begaddr);
            }
            else if(cmd_s[0] == 'scanback') {
                if (cmd_s.length < 3) {
                    logdbg("scanback <begaddr> <step>");
                    continue;
                }
                var begaddr = Number(cmd_s[1]);
                var step = Number(cmd_s[2]);
                scan_back(aspace, begaddr, step);
            }
            else if(cmd_s[0] == "reload") {
                logdbg("Reloading...");
                document.location.href='/index.html';
                return;
            }
			else if(cmd_s[0] == "run") {
				if (cmd_s.length < 2) {
                    logdbg("run <script>");
                    continue;
                }
				logdbg("Running...");
                run_script(cmd.substring(4, cmd.length));
            }
			else if(cmd_s[0] == "help") {
				logdbg("Commands: ");
				logdbg("run <script>");
				logdbg("read <addr> <len>");
				logdbg("disasm <addr> <len> <mode>");
				logdbg("dump <addr> <len> <outfile>");
				logdbg("ss <beginaddr> <endaddr> <pattern>");
				logdbg("sh <beginaddr> <endaddr> <hexpattern>");
				logdbg("scanm <beginaddr>");
				logdbg("dispx <beginaddr> <n>");
				logdbg("dispim <beginaddr> <n>");
				logdbg("dispminf <beginaddr>");
				logdbg("scanback <begaddr> <step>");
				logdbg("help");
				logdbg("reload");
				logdbg("exit\n");
			}
            else{
                logdbg("Unknown command: " + cmd_s[0]);
            }
        }
    } catch(e) {
        sendmsg("ShellError: " + e);
    }
}