/*
    Extra functions and variables that can be loaded AFTER the exploit has been performed.
*/

/*
    Defines
*/
SCE_OK = 0x0
SCE_KERNEL_MEMBLOCK_TYPE_USER_RW = 0x0c20d060
SCE_KERNEL_MEMBLOCK_TYPE_USER_RW_UNCACHE = 0x0c208060
SCE_KERNEL_MEMBLOCK_TYPE_USER_MAIN_PHYCONT_RW = 0x0c80d060
SCE_KERNEL_MEMBLOCK_TYPE_USER_MAIN_PHYCONT_NC_RW = 0x0d808060
SCE_KERNEL_MEMBLOCK_TYPE_USER_CDRAM_RW = 0x09408060
SCE_GXM_MEMORY_ATTRIB_READ 	= 0x1
SCE_GXM_MEMORY_ATTRIB_WRITE = 0x2
SCE_CTRL_SELECT 		= 0x00001
SCE_CTRL_START      	= 0x00008
SCE_CTRL_UP         	= 0x00010
SCE_CTRL_RIGHT      	= 0x00020
SCE_CTRL_DOWN       	= 0x00040
SCE_CTRL_LEFT       	= 0x00080
SCE_CTRL_LTRIGGER   	= 0x00100
SCE_CTRL_RTRIGGER   	= 0x00200
SCE_CTRL_TRIANGLE   	= 0x01000
SCE_CTRL_CIRCLE     	= 0x02000
SCE_CTRL_CROSS      	= 0x04000
SCE_CTRL_SQUARE     	= 0x08000
SCE_CTRL_INTERCEPTED  	= 0x10000
SCE_CTRL_MODE_DIGITALONLY 			= 0x0
SCE_CTRL_MODE_DIGITALANALOG 		= 0x1
SCE_CTRL_MODE_DIGITALANALOG_WIDE 	= 0x2
SCE_TOUCH_PORT_FRONT 				= 0x0
SCE_TOUCH_PORT_BACK 				= 0x1

/*
    Types
*/
SceChar8 = function(name) { return Struct.uint8(name); };
SceInt8 = function(name) { return Struct.int8(name); };
SceInt16 = function(name) { return Struct.int16(name); };
SceInt32 = function(name) { return Struct.int32(name); };
SceUInt8 = function(name) { return Struct.uint8(name); };
SceUInt16 = function(name) { return Struct.uint16(name); };
SceUInt32 = function(name) { return Struct.uint32(name); };
SceUInt64 = function(name) { return Struct.array(name, Struct.uint32(), 2); };
SceSize = function(name) { return Struct.uint32(name); };
SceFVector3 = function(name) { return Struct.array(name, Struct.float32(), 3); };
SceFQuaternion = function(name) { return Struct.array(name, Struct.float32(), 4); };
SceUMatrix4 = function(name) { return Struct.array(name, Struct.int32(), 16); };
SceReserved = function(name, len) { return Struct.array(name, Struct.uint8(), len); };

/*
    List Directory
*/
function list_dir(dirname)
{
    var scekernel = libraries.SceLibKernel.functions;

    var dirname_a = allocate_memory(0x20);
    var dirlist = allocate_memory(0x1000);

    mymemcpy(dirname_a, dirname, dirname.length);

    var fd = scekernel.sceIoDopen(dirname_a);
    fd = Int(fd);
    if (fd < 0)
	{
        logdbg("sceIoDopen() failed");
        return;
    }

    logdbg("Listing: " + dirname);
    while (scekernel.sceIoDread(fd, dirlist) > 0)
	{
        myprintf(dirlist + 0x58);
    }
    logdbg("-\n");
}

/*
    Retrieve the file fname and save to dumps\loc_name
*/
function retrieve_file(fname, loc_name)
{
    var scelibc = libraries.SceLibc.functions;
    var BUFSIZE = 0x1000;

    var fname_a = allocate_memory(fname.length + 1);
    mymemcpy(fname_a, fname + "\x00", fname.length);

    var mode = "r";
    var mode_a = allocate_memory(mode.length + 1);
    mymemcpy(mode_a, mode + "\x00", mode.length);
	
    var fp = scelibc.fopen(fname_a, mode_a);
    fp = Int(fp);
    if (fp == 0)
	{
        logdbg("fopen() failed");
        return; 
    }
	
    var buf = allocate_memory(BUFSIZE);
    var n = 0;
    while ((n = scelibc.fread(buf, 1, BUFSIZE, fp)) > 0)
	{
		logdbg("Dumping " + fname + " -> 0x" + n.toString(16));
        var bytes = get_bytes(aspace, buf, n);
        sendcmsg("dump", buf, bytes, loc_name); 
    }
}

/*
    Retrieve all files from dname and save to dumps
*/
function retrieve_dir(dname)
{
	var scekernel = libraries.SceLibKernel.functions;
	var scelibc = libraries.SceLibc.functions;
    
	var dname_addr = allocate_memory(0x100);
	var fname_addr = allocate_memory(0x100);
	var dirlist = allocate_memory(0x1000);
	mymemcpy(dname_addr, dname, dname.length);
	
	var fd = scekernel.sceIoDopen(dname_addr);
    fd = Int(fd);
    if (fd < 0)
	{
        logdbg("sceIoDopen() failed");
        return;
    }
    
	logdbg("Dumping: " + dname);
	sendcmsg("mkdir", 0, dname.replace(":", "/"));
    while (scekernel.sceIoDread(fd, dirlist) > 0)
	{
		var fname = read_string(dirlist + 0x58);
		mymemcpy(fname_addr, dname, dname.length);
		mymemcpy(fname_addr + dname.length, fname, fname.length);
		
		// Check if it's a file or a directory.
		if (Int(scekernel.sceIoDopen(fname_addr)) < 0)
		{
			retrieve_file(read_string(fname_addr), dname.replace(":", "/") + fname);
		}
		else
		{
			mymemcpy(fname_addr + dname.length + fname.length, "/", 1);
			retrieve_dir(read_string(fname_addr));
		}
		
		mymemset(fname_addr, 0, dname.length + fname.length + 1)
    }
}

/*
	Wrapper to send devctl commands
*/
function sceIoDevctl(devname, cmd, arg_addr, arg_len, bufp_addr, bufp_len)
{ 
	var scekernel = libraries.SceLibKernel.functions;
	
	var devname_addr = allocate_memory(devname.length);
	mymemcpy(devname_addr, devname, devname.length);
	
	// Send the remaining arguments through the stack
	var stack_addr = allocate_memory(0x10);
	aspace32[(stack_addr) / 4] = arg_len;			// arg buffer length
	aspace32[(stack_addr + 4) / 4] = bufp_addr;		// return buffer
	aspace32[(stack_addr + 8) / 4] = bufp_len;		// return buffer length
	
	var result = scekernel.sceIoDevctl(devname_addr, cmd, arg_addr, stack_addr);
	logdbg("sceIoDevctl (devname='" + devname.toString() + "', cmd=" + cmd.toString(16) + ", arg_addr=0x" + arg_addr.toString(16)
		+ ", arg_len=0x" + arg_len.toString(16) + ", bufp_addr=0x" + bufp_addr.toString(16) + ", bufp_len=0x" + bufp_len.toString(16) 
		+ "): 0x" + result.toString(16));
	
	return result;
}

/*
	Call support URI
*/
function sceCallSupportUri(cmd)
{
	var sceapputil = libraries.SceAppUtil.functions;
	
	var uri_addr = allocate_memory(0x100);
	mymemcpy(uri_addr, cmd, cmd.length);

	var result = sceapputil.sceCallSupportUri(0xFFFFF, uri_addr);
	logdbg("sceCallSupportUri: 0x" + result.toString(16));
}

/*
	Convert a path using sceAppMgrConvertVs0UserDrivePath (only works for "vs0:data/external/webcore/")
*/
function sceAppMgrConvertVs0UserDrivePath(path)
{
	var scewkproc = libraries.SceWebKitProcess.functions;
	var scedrvusr = libraries.SceDriverUser.functions;
	
	var path_addr = allocate_memory(0x40);
	var cpath_addr = allocate_memory(0x40);
	var tmp_addr = allocate_memory(0x40);

	mymemcpy(path_addr, path, path.length);
	
	var path_result = scedrvusr.sceAppMgrConvertVs0UserDrivePath(path_addr, cpath_addr, 0x400, tmp_addr);
	logdbg("sceAppMgrConvertVs0UserDrivePath: 0x" + path_result.toString(16));
	
	var conv_path = "";
	if (path_result == 0x0)
	{
		conv_path = read_string(cpath_addr);
		logdbg("sceAppMgrConvertVs0UserDrivePath: " + conv_path);
	}
	
	return conv_path;
}

/*
	Retrieve the state of a specific application
*/
function _sceAppMgrGetAppState(result_addr, result_size, app)
{ 
	var scedrvusr = libraries.SceDriverUser.functions;
	
	var result = scedrvusr._sceAppMgrGetAppState(result_addr, result_size, app);
	logdbg("_sceAppMgrGetAppState: 0x" + result.toString(16));
	
	if (!result)
		do_read(aspace, result_addr, result_size);
	
	return result;
}

/*
	Initialize AppUtil
*/
function sceAppUtilInit()
{
    var sceapputil = libraries.SceAppUtil.functions;
    
    var init_params = Struct.create(
        SceSize("buf_size"),   
        SceReserved("unk", 60)          
    );
    
    var boot_params = Struct.create(
        SceUInt32("str"),
        SceUInt32("app_ver"),
        SceReserved("unk", 32)
    );
    
    var initParam = allocate_struct(init_params);
    libc_memset(initParam.ptr, 0x0, initParam.byteLength);
    
    var bootParam = allocate_struct(boot_params);
    libc_memset(bootParam.ptr, 0x0, bootParam.byteLength);
    
    var res = sceapputil.sceAppUtilInit(initParam.ptr, bootParam.ptr);
    
    logdbg("sceAppUtilInit: 0x" + res.toString(16));
    
    return res;
}

/*
	Get system parameter
*/
function sceAppUtilSystemParamGetInt(paramId, outPtr)
{
	var sceapputil = libraries.SceAppUtil.functions;

	var res = sceapputil.sceAppUtilSystemParamGetInt(paramId, outPtr); 
    logdbg("sceAppUtilSystemParamGetInt: 0x" + res.toString(16));
    
    return res;
}

/*
	Save data into safe memory
*/
function sceAppUtilSaveSafeMemory(data, size, offset)
{
	var sceapputil = libraries.SceAppUtil.functions;

	var res = sceapputil.sceAppUtilSaveSafeMemory(data, size, offset); 
    logdbg("sceAppUtilSaveSafeMemory: 0x" + res.toString(16));
    
    return res;
}

/*
	Load data from safe memory
*/
function sceAppUtilLoadSafeMemory(data, size, offset)
{
	var sceapputil = libraries.SceAppUtil.functions;

	var res = sceapputil.sceAppUtilLoadSafeMemory(data, size, offset); 
    logdbg("sceAppUtilLoadSafeMemory: 0x" + res.toString(16));
    
    return res;
}

/*
	Allocate memblock using SceLibKernel
*/
function sceKernelAllocMemBlock(mname, mtype, msize)
{
	var scekernel = libraries.SceLibKernel.functions;
	
	var mname_addr = allocate_memory(mname.length + 1);
	mymemcpy(mname_addr, mname + "\x00", mname.length);
	
	var muid = scekernel.sceKernelAllocMemBlock(mname_addr, mtype, msize, 0);
	logdbg("Allocated memory UID: 0x" + muid.toString(16));
    
    return muid;
}

/*
	Get memblock's base address using SceLibKernel
*/
function sceKernelGetMemBlockBase(muid)
{
	var scekernel = libraries.SceLibKernel.functions;
    
	var mbase_ptr_addr = allocate_memory(0x4);
	var base_result = scekernel.sceKernelGetMemBlockBase(muid, mbase_ptr_addr);
	if (base_result != 0x0)
	{
		logdbg("sceKernelGetMemBlockBase error: 0x" + base_result.toString(16));
        return 0;
	}

    var base_addr = aspace32[mbase_ptr_addr / 4];

	logdbg("Memory base pointer: 0x" + base_addr.toString(16));

    return base_addr;
}

/*
	Free memblock using SceLibKernel
*/
function sceKernelFreeMemBlock(muid)
{
	var scekernel = libraries.SceLibKernel.functions;
    
	var free_result = scekernel.sceKernelFreeMemBlock(muid);
	if (free_result != 0x0)
	{
		logdbg("sceKernelFreeMemBlock error: 0x" + free_result.toString(16));
        return;
	}

	logdbg("Freed memory UID: 0x" + muid.toString(16));
}

/*
	Get a memblock's info structure by address range
*/
function sceKernelGetMemBlockInfoByRange(addr, range, info_addr, disable_log)
{ 
	var scecdiag = libraries.SceCommonDialog.functions;
	
	aspace32[(info_addr) / 4] = 0x18;
	
	var result = scecdiag.sceKernelGetMemBlockInfoByRange(addr, range, info_addr);
	
	if (!disable_log)
		logdbg("sceKernelGetMemBlockInfoByRange: 0x" + result.toString(16));
	
	return result;
}

/*
	Load a module using SceLibKernel
*/
function sceKernelLoadModule(path)
{
	var scekernel = libraries.SceLibKernel.functions;

	var module_addr = allocate_memory(0x100);
	mymemcpy(module_addr, path, path.length);
	
	var module_result = scekernel.sceKernelLoadModule(module_addr, 0, 0, 0);
	logdbg("sceKernelLoadModule: 0x" + module_result.toString(16));
}

/*
	Initialize GXM
*/
function sceGxmInitialize()
{
	var scegxm = libraries.SceGxm.functions;

	var GXM_PARAMS_BUFFER_SIZE = (16 * 1024 * 1024);
	
    var init_params = Struct.create(
        Struct.uint32("flags"),
        Struct.uint32("displayQueueMaxPendingCount"),
        Struct.uint32("displayQueueCallback"),
        Struct.uint32("displayQueueCallbackDataSize"),
        Struct.int32("parameterBufferSize")
    );

    var iparam = allocate_struct(init_params);
    iparam.flags                        = 0x0;
    iparam.displayQueueMaxPendingCount  = 0x0; 
    iparam.displayQueueCallback         = 0x0;
    iparam.displayQueueCallbackDataSize = 0x0;
    iparam.parameterBufferSize	        = GXM_PARAMS_BUFFER_SIZE;
    iparam.write();
    
    var result = scegxm.sceGxmInitialize(iparam.ptr);
    logdbg("sceGxmInitialize: 0x" + result.toString(16));
    
    return result;
}

/*
	Map memory into GXM area
*/
function sceGxmMapMemory(type, size, attr, uid_addr)
{	
	var scegxm = libraries.SceGxm.functions;
	
	if (type == SCE_KERNEL_MEMBLOCK_TYPE_USER_CDRAM_RW) 
		size = align_mem(size, 256 * 1024);
	else 
		size = align_mem(size, 4 * 1024);

    var uid = sceKernelAllocMemBlock("gxm", type, size);
	if (uid == 0x0)
	{
		logdbg("sceGxmMapMemory: Failed to get uid!");
		return 0;
    }
	aspace32[(uid_addr) / 4] = uid;
	
    var mem_ptr = sceKernelGetMemBlockBase(uid);
    if (mem_ptr == 0x0)
    {
		logdbg("sceGxmMapMemory: Failed to get memory block!");
		return 0;
    }

	var result = scegxm.sceGxmMapMemory(mem_ptr, size, attr);
    logdbg("sceGxmMapMemory: 0x" + result.toString(16));
    
	if (result != SCE_OK)
		return 0;
    
	return mem_ptr;
}

/*
	Unmap memory from the GXM area
*/
function sceGxmUnmapMemory(mem_ptr)
{	
	var scegxm = libraries.SceGxm.functions;
	
	var result = scegxm.sceGxmUnmapMemory(mem_ptr);
	logdbg("sceGxmUnmapMemory: 0x" + result.toString(16));
	
	return result;
}

/*
	Map fragment USSE memory into GXM area
*/
function sceGxmMapFragmentUsseMemory(size, uid_addr, offset_addr)
{	
	var scegxm = libraries.SceGxm.functions;
	
	size = align_mem(size, 4 * 1024);
	
    var uid = sceKernelAllocMemBlock("gxm", SCE_KERNEL_MEMBLOCK_TYPE_USER_RW_UNCACHE, size);
	if (uid == 0x0)
	{
		logdbg("sceGxmMapMemory: Failed to get uid!");
		return 0;
    }
	aspace32[(uid_addr) / 4] = uid;
	
    var mem_ptr = sceKernelGetMemBlockBase(uid);
    if (mem_ptr == 0x0)
    {
		logdbg("sceGxmMapMemory: Failed to get memory block!");
		return 0;
    }

	var result = scegxm.sceGxmMapFragmentUsseMemory(mem_ptr, size, offset_addr);
    logdbg("sceGxmMapFragmentUsseMemory: 0x" + result.toString(16));
    
	if (result != SCE_OK)
		return 0;
    
	return mem_ptr;
}

/*
	Unmap USSE fragment memory from the GXM area
*/
function sceGxmUnmapFragmentUsseMemory(mem_ptr)
{
	var scegxm = libraries.SceGxm.functions;
	
	var result = scegxm.sceGxmUnmapFragmentUsseMemory(mem_ptr);
	logdbg("sceGxmUnmapFragmentUsseMemory: 0x" + result.toString(16));
	
	return result;
}

/*
	Map vertex USSE memory into GXM area
*/
function sceGxmMapVertexUsseMemory(size, uid_addr, offset_addr)
{	
	var scegxm = libraries.SceGxm.functions;
	
	size = align_mem(size, 4 * 1024);
	
    var uid = sceKernelAllocMemBlock("gxm", SCE_KERNEL_MEMBLOCK_TYPE_USER_RW_UNCACHE, size);
	if (uid == 0x0)
	{
		logdbg("sceGxmMapMemory: Failed to get uid!");
		return 0;
    }
	aspace32[(uid_addr) / 4] = uid;
	
    var mem_ptr = sceKernelGetMemBlockBase(uid);
    if (mem_ptr == 0x0)
    {
		logdbg("sceGxmMapMemory: Failed to get memory block!");
		return 0;
    }

	var result = scegxm.sceGxmMapVertexUsseMemory(mem_ptr, size, offset_addr);
    logdbg("sceGxmMapVertexUsseMemory: 0x" + result.toString(16));
    
	if (result != SCE_OK)
		return 0;
    
	return mem_ptr;
}

/*
	Unmap USSE vertex memory from the GXM area
*/
function sceGxmUnmapVertexUsseMemory(mem_ptr)
{
	var scegxm = libraries.SceGxm.functions;
	
	var result = scegxm.sceGxmUnmapVertexUsseMemory(mem_ptr);
	logdbg("sceGxmUnmapVertexUsseMemory: 0x" + result.toString(16));
	
	return result;
}

/*
	Create a GXM context
*/
function sceGxmCreateContext()
{
	var scegxm = libraries.SceGxm.functions;
	
	var GXM_MEM_SIZE = 2048;
	var GXM_VDM_BUFFER_SIZE = 128 * 1204;
	var GXM_VERTEX_BUFFER_SIZE = 2 * 1024 * 1204;
	var GXM_FRAG_BUFFER_SIZE = 512 * 1204;
	var GXM_USSE_BUFFER_SIZE = 16 * 1204;
	
	var ctx_params = Struct.create(
        Struct.uint32("mem"),
        Struct.uint32("memsize"),
        Struct.uint32("vdmrbmem"),
		Struct.uint32("vdmrbmemsize"),
		Struct.uint32("vertexrbmem"),
		Struct.uint32("vertexrbmemsize"),
		Struct.uint32("fragrbmem"),
		Struct.uint32("fragrbmemsize"),
		Struct.uint32("usserbmem"),
		Struct.uint32("usserbmemsize"),
		Struct.uint32("usserbmemoffset")
    );
	
	// Map VDM memory
	var vdmrb_uid = allocate_memory(0x4);
	var vdmrb = sceGxmMapMemory(SCE_KERNEL_MEMBLOCK_TYPE_USER_RW_UNCACHE, GXM_VDM_BUFFER_SIZE, SCE_GXM_MEMORY_ATTRIB_READ, vdmrb_uid);
	
	// Map vertex memory
	var vertexrb_uid = allocate_memory(0x4);
	var vertexrb = sceGxmMapMemory(SCE_KERNEL_MEMBLOCK_TYPE_USER_RW_UNCACHE, GXM_VERTEX_BUFFER_SIZE, SCE_GXM_MEMORY_ATTRIB_READ, vertexrb_uid);
	
	// Map fragment memory
	var fragrb_uid = allocate_memory(0x4);
	var fragrb = sceGxmMapMemory(SCE_KERNEL_MEMBLOCK_TYPE_USER_RW_UNCACHE, GXM_FRAG_BUFFER_SIZE, SCE_GXM_MEMORY_ATTRIB_READ, fragrb_uid);
	
	// Map USSE fragment memory
	var usserb_uid = allocate_memory(0x4);
	var usserb_offset_addr = allocate_memory(0x4);
	var usserb = sceGxmMapFragmentUsseMemory(GXM_USSE_BUFFER_SIZE, usserb_uid, usserb_offset_addr);
	var usserb_offset = aspace32[(usserb_offset_addr) / 4];
	
	// Setup the context parameters
	var cparam = allocate_struct(ctx_params);
    cparam.mem                     	= libc_malloc(GXM_MEM_SIZE);
    cparam.memsize                	= GXM_MEM_SIZE;
	cparam.vdmrbmem                 = vdmrb;
	cparam.vdmrbmemsize             = GXM_VDM_BUFFER_SIZE;
	cparam.vertexrbmem              = vertexrb;
	cparam.vertexrbmemsize          = GXM_VERTEX_BUFFER_SIZE;
	cparam.fragrbmem                = fragrb;
	cparam.fragrbmemsize            = GXM_FRAG_BUFFER_SIZE;
	cparam.usserbmem                = usserb;
	cparam.usserbmemsize            = GXM_USSE_BUFFER_SIZE;
	cparam.usserbmemoffset          = usserb_offset;
    cparam.write();
    
    var ctx_addr = allocate_memory(0x4);
	result = scegxm.sceGxmCreateContext(cparam.ptr, ctx_addr);
    logdbg("sceGxmCreateContext: 0x" + result.toString(16));
	
	return ctx_addr;
}

/*
	Create a GXM render target
*/
function sceGxmCreateRenderTarget()
{
	var scegxm = libraries.SceGxm.functions;

	var GXM_DISPLAY_WIDTH = 960;
	var GXM_DISPLAY_HEIGTH = 544;
	
	var target_params = Struct.create(
        Struct.uint32("flags"),
        Struct.uint16("width"),
        Struct.uint16("height"),
		Struct.uint16("scenes"),
		Struct.uint16("multismplmode"),
        Struct.uint32("multismplarea"),
        Struct.uint32("drvmemblock")
    );
	
	var tparam = allocate_struct(target_params);
    tparam.flags                        = 0;
    tparam.width 						= GXM_DISPLAY_WIDTH; 
    tparam.height         				= GXM_DISPLAY_HEIGTH;
    tparam.scenes						= 1;
	tparam.multismplmode				= 0;
	tparam.multismplarea				= 0;
    tparam.drvmemblock	        		= 0xFFFFFFFF;
    tparam.write();
	
	var render_target_addr = allocate_memory(0x4);
	result = scegxm.sceGxmCreateRenderTarget(tparam.ptr, render_target_addr);
    logdbg("sceGxmCreateRenderTarget: 0x" + result.toString(16));
	
	return render_target_addr;
}

/*
	Destroy a GXM render target
*/
function sceGxmDestroyRenderTarget(render_target_addr)
{
	var scegxm = libraries.SceGxm.functions;
	
	var render_target = aspace32[(render_target_addr) / 4];	
	var result = scegxm.sceGxmDestroyRenderTarget(render_target);
	logdbg("sceGxmDestroyRenderTarget: 0x" + result.toString(16));
	
	return result;
}

/*
	Destroy a GXM context
*/
function sceGxmDestroyContext(ctx_addr)
{
	var scegxm = libraries.SceGxm.functions;
	
	var ctx = aspace32[(ctx_addr) / 4];	
	var result = scegxm.sceGxmDestroyContext(ctx);
	logdbg("sceGxmDestroyContext: 0x" + result.toString(16));
	
	return result;
}

/*
	Terminate GXM
*/
function sceGxmTerminate()
{
	var scegxm = libraries.SceGxm.functions;
	
	var result = scegxm.sceGxmTerminate();
    logdbg("sceGxmTerminate: 0x" + result.toString(16));
	
	return result;
}

/* 
	Mount a readable/writable path using AppMgrUser
*/
function sceAppMgr_mount1(param, mount_addr)
{
	var scedrvusr = libraries.SceDriverUser.functions;
	
	var mount_result = scedrvusr.sceAppMgr_mount1(param, mount_addr);
	logdbg("sceAppMgr_mount1: 0x" + mount_result.toString(16));
	
	return mount_result;
}

/* 
	Mount a readable/writable path using AppMgrUser
*/
function sceAppMgr_mount2(param, mount_addr)
{
	var scedrvusr = libraries.SceDriverUser.functions;
	
	var mount_result = scedrvusr.sceAppMgr_mount2(param, mount_addr);
	logdbg("sceAppMgr_mount2: 0x" + mount_result.toString(16));
	
	return mount_result;
}

/* 
	Generate a pseudo-random number
*/
function sceLibRng_generate(addr, size, disable_log)
{
	var scekernel = libraries.SceLibKernel.functions;
	
	// Maximum block size is 0x40.
	var gen_result = scekernel.sceLibRng_generate(addr, size);
	
	if (!disable_log)
		logdbg("sceLibRng_generate: 0x" + gen_result.toString(16));
	
	return gen_result;
}

/* 
	Get system software version
*/
function sceKernelGetSystemSwVersion()
{
	var scewkproc = libraries.SceWebKitProcess.functions;
	
	var param_addr = allocate_memory(0x100);
	aspace32[(param_addr) / 4] = 0x28;
	
	var result = scewkproc.sceKernelGetSystemSwVersion(param_addr);
	var sw_version = read_string(param_addr + 0x4);
	logdbg("sceKernelGetSystemSwVersion: 0x" + result.toString(16));
	logdbg("System SW version: " + sw_version);
	
	return sw_version;
}

/* 
	Get touch data from screen
*/
function sceTouchPeek(port, count)
{    
	var scepaf = libraries.ScePaf.functions;
	
	var SceTouchReport = Struct.create(
		SceUInt8("id"),             
		SceUInt8("force"),          
		SceInt16("x"),              
		SceInt16("y"),              
		SceReserved("unk", 8),      
		SceUInt16("info")          
	);
    
	var maxcount = 8;
    if (count > maxcount) count = maxcount;
    
	var touchReport;
	var touchData;
    var touchReportOffset = 16;
    var touchDataSize = touchReportOffset + SceTouchReport.byteLength * maxcount;
    var totalTouchDataSize = touchDataSize * maxcount;
    
    if (!touchData)
    {
        touchData = libc_malloc(totalTouchDataSize + 4); // Extra 4 bytes to allow alignment adjustment.
        while(touchData % 4) ++touchData;
        
        touchReport = SceTouchReport.create();
    }
 
    libc_memset(touchData, 0x0, totalTouchDataSize);

    var res = scepaf.sceTouchPeekFunc(port, touchData, count);
    if (res <= 0)
    {
        logdbg("sceTouchPeekFunc error: 0x" + res.toString(16));
        return 0x0;
    }
    
    var result = [aspace32[touchData / 4]]; // 32-bit when timestamp is actually 64-bit, but it's easier this way.

    for (var i = 0; i < 6; ++i)
    {
        touchReport.ptr = touchData + touchReportOffset + SceTouchReport.byteLength * i;
        touchReport.read();
        result[i + 1] = {id:touchReport.id, x:touchReport.x, y:touchReport.y};
    }
    
    return result;
}