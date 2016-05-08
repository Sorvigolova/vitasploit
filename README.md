vitasploit
==========

This project is yet another Vita exploitation solution for the recent WebKit vulnerability that allows exploring the native part of the Vita's software.

The vitasploit project is merely a continuation of Amat Cama, johntheropper and freebot's amazing work who presented a complete solution for memory reading/writing and code execution using ROP for the Vita.

Dependencies
============

Python2: https://www.python.org/downloads/

Capstone: http://www.capstone-engine.org/download.html

Instructions
============

Start up the server by running the `server.py` script. Using your Vita browse to the address printed by the script (`http://<ipaddr>:8888`).

**Memory reading/writing mode:**
- In the main html file (`index.html`) set `var doROP = false`;
- With this setting the script will launch an interactive shell for memory reading/writing;
- Commands:
  - `read <addr> <len>` -> Read "len" bytes from "addr" (the output is printed to the shell)
  - `run <script>` -> Run a "script" function from the shell (e.g.: "run load_sysmodules()")
  - `disasm <addr> <len> <mode>` -> Disassemble "len" bytes at "addr" with "mode" (mode can be "arm" or "thumb)
  - `dump <addr> <len> <outfile>` -> Dump "len" bytes from "addr" to "outfile" (dumped files are saved under "dumps" folder)
  - `ss <beginaddr> <endaddr> <pattern>` -> Search for string "pattern" from "beginaddr" to "endaddr"
  - `sh <beginaddr> <endaddr> <hexpattern>` -> Search for an hexadecimal "hexpattern" from "beginaddr" to "endaddr"
  - `scanm <beginaddr>` -> Scan for modules starting at "beginaddr"
  - `dispx <beginaddr> <n>` -> Display <n> module exports starting at "beginaddr"
  - `dispim <beginaddr> <n>` -> Display <n> module imports starting at "beginaddr"
  - `dispminf <beginaddr>` -> Display module info starting at "beginaddr"
  - `scanback <begaddr> <step>` -> Scan back memory until it crashes starting at "beginaddr" using "step"
  - `reload` -> Reload the interactive shell
  - `help` -> Print the available commands and their syntax
  - `exit` -> Terminate the interactive shell

**ROP mode:**
- In the main html file (`index.html`) set `var doROP = true`;
- With this setting the script will launch a pre-programmed, firmware dependent, ROP chain;
- You can use the functions availabe at `include/functions.js` and `include/functions_ex.js` to interact in a SDK-like fashion with the Vita;
- Several batch tests are available at `include/tests.js`. Simply uncomment them under Run_Tests() and the tests will run after the exploit is ready;
- The following tests are currently implemented for firmwares 2.02, 2.05, 2.12, 3.00, 3.01, 3.15, 3.18 and 3.20:
  - `testStructs()` -> MrNetrix's test for custom structure allocation
  - `Test_Modules()` -> Based on CodeLion/BrianBTB/BBalling1's module dumping code and complemented by nas's sysmodule loading code. Forces all user modules to be loaded into memory and dumps them to "dumps" folder
  - `Test_Memblock()` -> A simple memory alloc/free test using the SceLibKernel syscalls
  - `Test_Malloc()` -> An exhaustive malloc test that tries to allocate as much memory as possible
  - `Test_Motion()` -> A simple test to track and print the gyroscope's coordinates
  - `Test_SupportURI()` -> A small test that allows sending URI commands (e.g.: "psgm:", "settings_dlg:") to the Vita
  - `Test_Socket()` -> Original (akai) socket test to send messages to/from the Vita
  - `Test_ListDir()` -> Original (akai) test to list directories inside the Vita
  - `Test_GetFile()` -> Original (akai) test to find and dump user files from the Vita
  - `Test_GetDir()` -> Dump entire directories from the Vita
  - `Test_WriteFile()` -> Test file creation by mounting a temporary path and writing a dummy file to it
  - `Test_Photos()` ->  Mount and list the contents of photo0
  - `Test_Control()` -> Track and print the left and right analog buttons' coordinates
  - `Test_Touch()` -> Print the coordinates of the last screen area that was touched
  - `Test_Gxm()` -> Test the GXM memory by mapping some if it's components
  - `Test_Mount()` -> Mount and list the contents of several temporary folders
  - `Test_Devctl()` -> Test sending specific IoDevctl commands
  - `Test_KernelObjs()` -> Retrieve the IDs of certain kernel objects
  - `Test_Audio()` -> Test outputting static noise
  - `Test_AddrRange()` -> Bruteforce and validate the entire user mode address space
  - `Test_FrameBuffer()` -> MrNetrix's test for drawing in WebKit's frame buffer
  
**Syscall fuzzer mode:**
  - Make sure `ROP mode` is enabled first;
  - In the main html file (`index.html`) set `var doSyscallFuzz = true` and `var syscallFuzzVersion` to the version you wish to test (e.g.: `var syscallFuzzVersion = "318"`);
  - After reaching the shell, type `run Test_Fuzzer()`;
  - This mode will attempt fuzzing the syscalls of every module possible;
  - WARNING: Test this mode at your own risk!
    
Credits
=======

- **Amat Cama**, **johntheropper** and **freebot**: Original Vita exploit toolkit/SDK code (https://github.com/acama/webkitties);
- **xyz**: New exploit for firmwares 3.30, 3.35 and 3.36;
- **CodeLion/BrianBTB/BBalling1**: Original PoC, module dumping code and other utilities (https://github.com/BrianBTB/memtools_vita and https://github.com/BrianBTB/JSoS-Module-Dump-Release);
- **nas**: sceSysmoduleLoadModule finding (http://pastie.org/private/ugchhaqctvmw5rrg5w37ka);
- **Davee**, **Josh_Axey** and **Archaemic**: Individual PoC code to showcase this vulnerability;
- **Yifan Lu**: UVLoader source code and extensive documentation on the Vita (http://yifan.lu/);
- **mr.gas**, **tomtomdu80** and **YANOX**: Several findings and reverse-engineer works on the Vita;
- **MichelMichel/JumpCallPop**: Syscall fuzzer;
- **BlackDaemon**, **blue78**, **Sparky**, **heleius**, **Proxima** and **Sethpaien**: Testing and porting.
