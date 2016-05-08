/*
	Sample batch tests
*/

function Run_Test()
{
	//testStructs();
	//Test_Modules();
	//Test_Memblock();
    //Test_Malloc();
	//Test_Motion();
    //Test_SupportURI();
	//Test_Socket();
	//Test_ListDir();
	//Test_GetFile();
	//Test_GetDir();
	//Test_WriteFile();
	//Test_Photos();
	//Test_Mount();
	//Test_Control();
	//Test_Touch();
	//Test_Gxm();
	//Test_Devctl();
	//Test_KernelObjs();
	//Test_Audio();
	//Test_AddrRange();
	//Test_FrameBuffer();
}

/*
	Module dumping test
*/
function Test_Modules()
{
	load_sysmodules_args();
	load_sysmodules();
	list_modules("All", true);
}

/*
	SceLibKernel memblock test
*/
function Test_Memblock()
{
	var uid = sceKernelAllocMemBlock("mem", SCE_KERNEL_MEMBLOCK_TYPE_USER_RW, 0x1000);
	sceKernelGetMemBlockBase(uid);
	sceKernelFreeMemBlock(uid);
}

/*
	Support URI test
*/
function Test_SupportURI()
{
	sceCallSupportUri("settings_dlg:");
}

/*
	Socket connection test
*/
function Test_Socket()
{
	var fd = socket_connect("127.0.0.1", 9999);
	socket_send(fd, "Hello World From the Vita!\n");
	socket_close(fd);
}						

/*
	Directory listing test
*/
function Test_ListDir()
{
	list_dir("app0:");
	list_dir("app0:sce_sys/");
	list_dir(sceAppMgrConvertVs0UserDrivePath("vs0:data/external/webcore/"));
}

/*
	File retrieval test
*/
function Test_GetFile()
{
	retrieve_file("app0:eboot.bin", "eboot.bin");
}

/*
	Directory retrieval test
*/
function Test_GetDir()
{
	retrieve_dir("app0:");
	retrieve_dir(sceAppMgrConvertVs0UserDrivePath("vs0:data/external/webcore/"));
}

/*
	Exhaustive malloc test
*/
function Test_Malloc()
{
    var malloc_size = 0x1000;
    
    log_out("Malloc test: 0x" + malloc_size.toString(16));
    log_out("Base address: 0x" + scewkbase.toString(16));

    while(true)
    {
        var res = libc_malloc(malloc_size);
		
        if (res == 0x0)
            return;
        
        log_out("0x" + res.toString(16));
    }
}

/*
	SceMotion test
*/
function Test_Motion()
{
	var scedrvusr = libraries.SceDriverUser.functions;

    var res = scedrvusr.sceMotionStartSampling();
    logdbg("sceMotionStartSampling = 0x" + res.toString(16));
    
	res = scedrvusr.sceMotionMagnetometerOn();
    logdbg("sceMotionMagnetometerOn = 0x" + res.toString(16));
	
    if (res == SCE_OK)
    {
        var motion_state = Struct.create(
            SceUInt32("timestamp"),                             
            SceFVector3("acceleration"),                        
            SceFVector3("ang_velocity"),                     
            Struct.array("unk1", Struct.uint8(), 12),       

            SceFQuaternion("quat"),                       
            SceUMatrix4("rot"),                      
            SceUMatrix4("ned"),                           

            Struct.array("unk2", Struct.uint8(), 4),        

            SceFVector3("orientation"),                    
            SceUInt64("host_tmstp"),                         

            Struct.array("unk3", Struct.uint8(), 36),       

            SceChar8("magn_field_stability"),                     
            SceChar8("data"),                               
                                                                
            Struct.array("unk4", Struct.uint8(), 2)         
        );

        var motionstate = allocate_struct(motion_state);
        
        logdbg("Created motionstate, size: 0x" + motionstate.byteLength);
        
        libc_memset(motionstate.ptr, 0x0, motionstate.byteLength);
   
        while(true)
        {
            res = scedrvusr.sceMotionGetState(motionstate.ptr);
            if (res != SCE_OK)
            {
                logdbg("sceMotionGetState: 0x" + res);
                break;
            }
            
            motionstate.read();
            
            var x = motionstate.acceleration[0].toFixed(3);
            var y = motionstate.acceleration[1].toFixed(3);
            var z = motionstate.acceleration[2].toFixed(3);
            logdbg("x: " + x + " y: " + y + " z: " + z);
        }
    }
    
    res = scedrvusr.sceMotionStopSampling();
    logdbg("sceMotionStopSampling: 0x" + res);
    
    return res;
}

/*
	Mount and list photo0 path
*/
function Test_Photos()
{
	var sceapputil = libraries.SceAppUtil.functions;
	
	sceAppUtilInit();	
	
	var photo_result = sceapputil.sceAppUtilPhotoMount();
	logdbg("sceAppUtilPhotoMount: 0x" + photo_result.toString(16));
	
	list_dir("photo0:");
}

/*
	Test mounting several temporary paths
*/
function Test_Mount()
{
	var tmp_path_addr = allocate_memory(0x40);
	
	// Valid path numbers for mount1: 0xC9, 0xCB, 0xCC
	var mount_result = sceAppMgr_mount1(0xC9, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	mount_result = sceAppMgr_mount1(0xCB, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	mount_result = sceAppMgr_mount1(0xCC, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	// Valid path numbers for mount2: 0x64, 0x65, 0x66, 0x67, 0x69, 0x6C
	mount_result = sceAppMgr_mount2(0x64, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	mount_result = sceAppMgr_mount2(0x65, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	mount_result = sceAppMgr_mount2(0x66, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	mount_result = sceAppMgr_mount2(0x67, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	mount_result = sceAppMgr_mount2(0x69, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
	
	mount_result = sceAppMgr_mount2(0x6C, tmp_path_addr);
	if (!mount_result)
	{
		var mount_path = read_string(tmp_path_addr);
		list_dir(mount_path);
	}
}

/*
	Mount a temporary path and create a sample file
*/
function Test_WriteFile()
{	
	var scelibc = libraries.SceLibc.functions;

	var tmp_path_addr = allocate_memory(0x40);
	var mount_result = sceAppMgr_mount1(0xCC, tmp_path_addr);
	var mount_path = read_string(tmp_path_addr);
	
	var fname = mount_path + "test.bin";
	var fname_addr = allocate_memory(fname.length + 1);
    mymemcpy(fname_addr, fname + "\x00", fname.length);
	
	var mode = "wb";
    var mode_addr = allocate_memory(mode.length + 1);
    mymemcpy(mode_addr, mode + "\x00", mode.length);
	
    var fp = scelibc.fopen(fname_addr, mode_addr);	
	
	logdbg("File pointer: 0x" + fp.toString(16));
	
	var buf = allocate_memory(0x1000);
	
	scelibc.fwrite(buf, 1, 0x1000, fp);
	logdbg("Writing...");
	
	list_dir(mount_path);
	
	scelibc.fclose(fp);
}

/*
	SceCtrl test
*/
function Test_Control()
{
	var scepaf = libraries.ScePaf.functions;
	var scedrvusr = libraries.SceDriverUser.functions;
	
    var SceCtrlData = Struct.create(
        SceUInt64("timestamp"),
        SceUInt32("buttons"),
        SceChar8("lx"),
        SceChar8("ly"),
        SceChar8("rx"),
        SceChar8("ry"),
		Struct.array("unk", Struct.uint8(), 16)
    );
	
	var ctrl_data = allocate_struct(SceCtrlData);
	libc_memset(ctrl_data.ptr, 0x0, ctrl_data.byteLength);
	
	var result = scepaf.sceCtrlSetSamplingMode_1(1);
	logdbg("sceCtrlSetSamplingMode_1: 0x" + result.toString(16));
	
	// Delay the current thread.
	scedrvusr.sceKernelDelayThread(333333);
	
	while (true)
	{		
		// Read ctrl data.
		result = scepaf.sceCtrlReadBufferPositive_1(0, ctrl_data.ptr, 1);
		ctrl_data.read();
		if (result <= SCE_OK)
		{
			logdbg("sceCtrlReadBufferPositive_1: 0x" + result.toString(16));
			break;
		}

		// Print the analog data.
		logdbg("Left analog: X = " + ctrl_data.lx.toString(16) + " Y = " + ctrl_data.ly.toString(16));
		logdbg("Right analog: X = " + ctrl_data.rx.toString(16) + " Y = " + ctrl_data.ry.toString(16));
		
		scedrvusr.sceKernelDelayThread(333333);
	}
}

/*
	SceTouch test
*/
function Test_Touch()
{   
	var scepaf = libraries.ScePaf.functions;
	
	var touchReport = sceTouchPeek(SCE_TOUCH_PORT_FRONT, 1);
    if (!touchReport)
    {
        logdbg("sceTouchPeek failed");
        return;
    }
    
    logdbg("Touch Report Timestamp: 0x" + touchReport[0].toString(16));
	logdbg("ID: " + touchReport[1].id.toString() + " X: " + touchReport[1].x.toString() + " Y: " + touchReport[1].y.toString());

	var SceTouchPanelInfo = Struct.create(
		SceInt16("minX"),
		SceInt16("minY"),
		SceInt16("maxX"),
		SceInt16("maxY"),
		SceInt16("minDX"),
		SceInt16("minDY"),
		SceInt16("maxDX"),
		SceInt16("maxDY"),
		SceInt8("minF"),
		SceInt8("maxF"),
		SceReserved("unk", 30)
	);

	var panelInfo = allocate_struct(SceTouchPanelInfo);
    var result = scepaf.sceTouchGetPanelInfo(SCE_TOUCH_PORT_FRONT, panelInfo.ptr);
    if (result != 0x0)
    {
        logdbg("sceTouchGetPanelInfo: 0x" + result.toString(16));
    }
    
    panelInfo.read();
    
	logdbg(" ");
    logdbg("Front Panel Active");
	logdbg("Panel X(" + panelInfo.minX + "-" + panelInfo.maxX + ")");
	logdbg("Panel Y(" + panelInfo.minY + "-" + panelInfo.maxY + ")");
	logdbg("Display X("+ panelInfo.minDX + "-" + panelInfo.maxDX + ")"); 
	logdbg("Display Y(" + panelInfo.minDY + "-" + panelInfo.maxDY + ")");
	logdbg("Force(" + panelInfo.minF + "-" + panelInfo.maxF + ")");
	
	var result = scepaf.sceTouchGetPanelInfo(SCE_TOUCH_PORT_BACK, panelInfo.ptr);
    if (result != 0x0)
    {
        logdbg("sceTouchGetPanelInfo: 0x" + result.toString(16));
    }
    
    panelInfo.read();
    
	logdbg(" ");
    logdbg("Back Panel Active");
	logdbg("Panel X(" + panelInfo.minX + " - " + panelInfo.maxX + ")");
	logdbg("Panel Y(" + panelInfo.minY + " - " + panelInfo.maxY + ")");
	logdbg("Display X("+ panelInfo.minDX + " - " + panelInfo.maxDX + ")"); 
	logdbg("Display Y(" + panelInfo.minDY + " - " + panelInfo.maxDY + ")");
	logdbg("Force(" + panelInfo.minF + " - " + panelInfo.maxF + ")");
}

/*
	SceGxm memory test
*/
function Test_Gxm()
{ 
	var scegxm = libraries.SceGxm.functions;
	
	// Initialize GXM
    sceGxmInitialize();
	
	// Create context
	var ctx_addr = sceGxmCreateContext();
	
	// Create render target
	var render_target_addr = sceGxmCreateRenderTarget();

	// Destroy render target
	sceGxmDestroyRenderTarget(render_target_addr);
	
	// Destroy context
	sceGxmDestroyContext(ctx_addr);
	
	// Terminate GXM
	sceGxmTerminate();
}

/*
	sceIoDevctl test
*/
function Test_Devctl()
{
	var arg_addr = allocate_memory(0x100);
	var bufp_addr = allocate_memory(0x100);
	
	// _fs_util_get_device_info
	sceIoDevctl("sdstor0:", 1, arg_addr, 0x100, bufp_addr, 0x100);
	
	// _fs_util_device_format
	sceIoDevctl("sdstor0:", 2, arg_addr, 0x100, bufp_addr, 0x100);
}

/*
	Test and retrieve kernel objects
*/
function Test_KernelObjs()
{
	var scekernel = libraries.SceLibKernel.functions;
	var scelibc = libraries.SceLibc.functions;
	
	var in_fd = scelibc.sceKernelGetStdin();
	logdbg("sceKernelGetStdin: 0x" + in_fd.toString(16));
	
	var out_fd = scelibc.sceKernelGetStdout();
	logdbg("sceKernelGetStdout: 0x" + out_fd.toString(16));
	
	var err_fd = scelibc.sceKernelGetStderr();
	logdbg("sceKernelGetStderr: 0x" + err_fd.toString(16));
	
	var thid = scekernel.sceKernelGetThreadId();
	logdbg("sceKernelGetThreadId: 0x" + thid.toString(16));
	
	var prid = scekernel.sceKernelGetProcessId();
	logdbg("sceKernelGetProcessId: 0x" + prid.toString(16));
}

/*
	Test sceAudioOut
*/
function Test_Audio()
{
	var scepaf = libraries.ScePaf.functions;
	
	var audio_buf_addr = allocate_memory(0x400);
	libc_memset(audio_buf_addr, 0, 0x400);
	
	// Create a new audio port with sample size 0x400 and audio format 1.
	var new_port = scepaf.sceAudio_new(0x400, 1);
	logdbg("sceAudio_new: 0x" + new_port.toString(16));
	
	// Open the first available audio port (either new_port or an already existing one)
	// and set audio sample size, audio frequency and format.
	var port = scepaf.sceAudioOutOpenPort(0, 0x400, 0xBB80, 1);
	logdbg("sceAudioOutOpenPort: 0x" + port.toString(16));
	
	// Change port's volume (if needed).
	result = scepaf.sceAudioOutSetVolume(port, 3);
	logdbg("sceAudioOutSetVolume: 0x" + result.toString(16));
	
	// Output raw PCM audio.
	for (var i = 0; i < 0x100; i++)
	{
		// Generate random static noise.
		for (var j = 0; j < 0x400; j += 0x40)
			sceLibRng_generate(audio_buf_addr + j, 0x40, 1);
		
		// Output audio.
		result = scepaf.sceAudioOutOutput(port, audio_buf_addr);
	}
	logdbg("sceAudioOutOutput: 0x" + result.toString(16));
	
	// Release current audio port (if needed).
	result = scepaf.sceAudioOutReleasePort(port);
	logdbg("sceAudioOutReleasePort: 0x" + result.toString(16));
	
	// Release the new audio port (if needed).
	result = scepaf.sceAudioOutReleasePort(new_port);
	logdbg("sceAudioOutReleasePort: 0x" + result.toString(16));
}

/*
	Test all user-space address range
*/
function Test_AddrRange()
{
	var memblock_info_addr = allocate_memory(0x100);
	
	for (var i = 0; i < 0xFFFFFFFF; i += 0x1000)
	{
		// Disable logging of this function and redirect results to a log file.
		var result = sceKernelGetMemBlockInfoByRange(i, 0x1000, memblock_info_addr, 1);
		
		if (!result)
			log_out("sceKernelGetMemBlockInfoByRange found valid range: 0x" + i.toString(16));
	}
}

/*
	Test drawing in WebKit's frame buffer
*/
function Test_FrameBuffer()
{
	var color = 0x000000;
	var count = 0;

	var black = 0xFF000000;
	var red = 0xFFFF0000;
	var green = 0xFF00FF00;
	var blue = 0xFF0000FF;
	var white = 0xFFFFFFFF;

	var setScreenCount = 0;

	while (true) {
		if (color < 0xFF)
		{
			color += 0x8;
		}
		else if (color < 0xFF00)
		{
			color &= 0xFFFF00;
			color += 0x800;
		}
		else if (color < 0xFF0000)
		{
			color &= 0xFF0000;
			color += 0x80000;
		}
		else
		{
			color = 0x8;
		}
    
		if (color)
		{
			color |= 0xFF000000;
		}
		else
		{
			switch(setScreenCount)
			{
				case 1: color = black; break;
				case 2: color = white; break;
				case 3: color = red; break;
				case 4: color = blue; break;
				case 5: color = green; break;
			}

			if (++setScreenCount > 5) { setScreenCount = 1; }
		}

		var framebuffer = 0x70000000;
		var tempbuffer = framebuffer;
		var iter = 20; // 20 for full screen, 16 for one block
		var len = 4;
 
		aspace32[tempbuffer / 4] = color;
    
		for (var i = 0; i < iter; ++i)
		{
			libc_memcpy(tempbuffer + len, tempbuffer, len);
			len += len;
		}
	}
}