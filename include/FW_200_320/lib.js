/*
   Resolved library functions
*/

function defineLibraryFuncs()
{
	// FW 2.02 and 2.05 library functions' offsets.
	sceGxmFcns_v202 =
	{
		sceGxmInitialize 						:	0x0000b038,
		sceGxmInitialize_vsh		 			:	0x0000b0c8,
				
		sceGxmMapMemory  						:	0x0000ba30,
		sceGxmUnmapMemory						:   0x0000baf0,
		sceGxmMapVertexUsseMemory				:   0x0000bc38,
		sceGxmUnmapVertexUsseMemory				:   0x0000bd54,
		sceGxmMapFragmentUsseMemory 			:   0x0000bdf4,
		sceGxmUnmapFragmentUsseMemory			:   0x0000bf14,
		
		sceGxmCreateContext						:	0x000065c0,
		sceGxmDestroyContext					:	0x000068fc,
		
		sceGxmCreateRenderTarget				:	0x00012208,
		sceGxmRenderTargetGetDriverMemBlock		:	0x000122fc,
		sceGxmDestroyRenderTarget				:   0x00012390,
		sceGxmGetRenderTargetMemSize			:   0x00012468,
			
		sceGxmTerminate 						:	0x0000b158,
	}
	
	sceGxmFcns_v205 =
	{
		sceGxmInitialize 						:	0x0000b058,
		sceGxmInitialize_vsh		 			:	0x0000b0e8,
				
		sceGxmMapMemory  						:	0x0000ba50,
		sceGxmUnmapMemory						:   0x0000bb10,
		sceGxmMapVertexUsseMemory				:   0x0000bc58,
		sceGxmUnmapVertexUsseMemory				:   0x0000bd74,
		sceGxmMapFragmentUsseMemory 			:   0x0000be14,
		sceGxmUnmapFragmentUsseMemory			:   0x0000bf34,
		
		sceGxmCreateContext						:	0x000065e4,
		sceGxmDestroyContext					:	0x00006920,
		
		sceGxmCreateRenderTarget				:	0x00012228,
		sceGxmRenderTargetGetDriverMemBlock		:	0x0001231c,
		sceGxmDestroyRenderTarget				:   0x000123b0,
		sceGxmGetRenderTargetMemSize			:   0x00012488,
			
		sceGxmTerminate 						:	0x0000b178,
	}
	
	sceCommonDialogMainFcns_v202_v205 =
	{

	}

	scePafFcns_v202 =
	{
		sceAudioOutOutput						:	0x002ce7ec,
		sceAudioOutOpenPort						:	0x002ce7fc,
		sceAudio_new							:	0x002ce80c,
		sceAudioOutSetVolume					:	0x002ce81c,
		sceAudioOutReleasePort					:	0x002ce82c,
		
		sceTouchPeekFunc						:   0x002cdd6c,
		sceTouchGetPanelInfo 					: 	0x002cdd7c,
		sceTouchReadFunc 						:	0x002cddac,
		
		sceCtrlReadBufferPositive_1				:   0x002ce0fc,		
		sceCtrl_unk1							:   0x002ce0cc,
		sceCtrl_unk2							:   0x002ce0dc,
		sceCtrlReadBufferPositive_2				:   0x002ce10c,
		sceCtrlSetSamplingMode_1				:   0x002ce0ec,
		sceCtrlSetSamplingMode_2				:   0x002ce11c,
	}
	
	scePafFcns_v205 =
	{
		sceAudioOutOutput						:	0x002ce7e4,
		sceAudioOutOpenPort						:	0x002ce7f4,
		sceAudio_new							:	0x002ce804,
		sceAudioOutSetVolume					:	0x002ce814,
		sceAudioOutReleasePort					:	0x002ce824,
		
		sceTouchPeekFunc						:   0x002cdd64,
		sceTouchGetPanelInfo 					: 	0x002cdd74,
		sceTouchReadFunc 						:	0x002cdda4,
		
		sceCtrlReadBufferPositive_1				:   0x002ce0f4,		
		sceCtrl_unk1							:   0x002ce0c4,
		sceCtrl_unk2							:   0x002ce0d4,
		sceCtrlReadBufferPositive_2				:   0x002ce104,
		sceCtrlSetSamplingMode_1				:   0x002ce0e4,
		sceCtrlSetSamplingMode_2				:   0x002ce114,
	}

	sceDriverUserFcns_v202_v205 =
	{
		sceKernelDelayThread 					: 	0x000012c4,
		
		_sceAppMgrGetAppState					:	0x00001704,
		sceAppMgrReceiveSystemEvent				:	0x00001934,
		sceAppMgrLoadExec 						:	0x00001C44,
		
		sceAppMgr_mount1						:   0x00001684,
		sceAppMgr_mount2						:   0x00001d44,
		sceAppMgrConvertVs0UserDrivePath		:   0x000016f4,
		
		sceMotionStartSampling 					:   0x00006021,
		sceMotionMagnetometerOn					:	0x00005fd5,
		sceMotionStopSampling 					:	0x0000608d,
		sceMotionGetState 						:	0x00005331,
	}

	sceWebKitProcessFcns_v202 =
	{
		sceRegMgrForGame_read					:   0x000127cc,
		sceRegMgrForGame_write					:   0x000127dc,
		
		sceKernelGetSystemSwVersion				: 	0x0001267c,
		
		sceSysmoduleLoadModule					:	0x000127bc,
		sceSysmoduleUnloadModule				:	0x000127ac,
	}
	
	sceWebKitProcessFcns_v205 =
	{
		sceRegMgrForGame_read					:   0x000132a4,
		sceRegMgrForGame_write					:   0x000132b4,
		
		sceKernelGetSystemSwVersion				: 	0x00013154,
		
		sceSysmoduleLoadModule					:	0x00013294,
		sceSysmoduleUnloadModule				:	0x00013284,
	}

	sceCommonDialogFcns_v202_v205 =
	{
		sceKernelGetMemBlockInfoByRange			:	0x0000c200,
		
		sceSysmoduleLoadModuleWithArgs 			: 	0x0000c380,
		sceSysmoduleUnloadModuleWithArgs 		: 	0x0000c370,
	}

	sceAppUtilFcns_v202_v205 =
	{
		sceAppUtilSaveSafeMemory				:	0x00002ec9,
		sceAppUtilLoadSafeMemory				:	0x00002ee7,
		
		sceKernelCreateCallback					: 	0x00007a38,
		sceKernelDeleteCallback					: 	0x00007a48,
		
		sceAppUtilSystemParamGetInt 			: 	0x00002e6d,
		sceAppUtilInit							: 	0x00002843,
		sceAppUtilPhotoMount 					: 	0x00002cc9,
		
		sceCallSupportUri 						: 	0x00007588,
	}

	sceLibcFcns_v202_v205 =
	{
		sceKernelGetStdin	:	0x00036dc0,
		sceKernelGetStdout	:	0x00036dd0,
		sceKernelGetStderr	:	0x00036df0,
		
		fclose : 0x00000d65,
		fopen  : 0x000014a1,
		fread  : 0x000017d1,
		fwrite : 0x00001b25,
		ftell  : 0x00001a25,
		fseek  : 0x000019cd,
		malloc : 0x0000c97d,
		free   : 0x0000c98d,
		memcpy : 0x00002521,
		memset : 0x00002631,
		memcmp : 0x000024e9,
	}

	sceNetFcns_v202_v205 =
	{
		sceNetHtons  : 0x00002ad1,
		sceNetConnect  : 0x00002ee1,
		sceNetSend  : 0x00002f0d,
		sceNetSocket  : 0x00002ec1,
		sceNetSocketClose  : 0x00002f91,
	}

	sceKernelFcns_v202_v205 =
	{
		// Generic Syscall r12(ip) as syscall number
		sceGenSyscall	: 0x00009470, //SVC 0; BX LR
		
		// Syscalls
		sceKernelGetProcessId		: 0x000098ac,
		sceKernelGetProcessParam	: 0x00009b7c,
		sceKernelAllocMemBlock		: 0x0000949c,
		sceKernelGetMemBlockBase	: 0x0000948c,
		sceKernelFreeMemBlock		: 0x0000947c,
		sceKernelFindMemBlockByAddr	: 0x0000946c,
		sceKernelGetModuleList  	: 0x00009aec,
		sceKernelGetModuleInfo  	: 0x00009afc,
		sceIoRead					: 0x00009e0c,
		sceIoClose					: 0x00009d7c,
		sceIoWrite					: 0x00009c4c,
		sceIoDevctl					: 0x00009c7c,
	
		// Functions
		sceKernelGetThreadId  		: 0x000001b5,
		sceKernelCreateThread  		: 0x0000bce9,
		sceKernelStartThread  		: 0x0000b8c1,
		sceSblACMgrIsGameProgram 	: 0x0000bd3d,
		sceKernelGetOpenPsId 		: 0x0000bd45,
		sceLibRng_generate			: 0x0000bd4c,
		sceClibMemcpy  : 0x00000001,
		sceKernelCallModuleExit  : 0x0000134d,
		sceKernelGetModuleInfoByAddr  : 0x000013c5,
		sceKernelLoadModule  : 0x000011c5,
		sceKernelStartModule  : 0x00001201,
		sceKernelStopModule  : 0x00001255,
		sceKernelUnloadModule  : 0x000012a9,
		sceKernelLoadStartModule  : 0x00001131,
		sceKernelStopUnloadModule  : 0x000012d9,
		sceKernelOpenModule  : 0x000013dd,
		sceKernelCloseModule  : 0x00001401,
		sceIoOpen  : 0x0000b615,
		sceIoLseek  : 0x0000b625,
		sceIoDopen  : 0x0000b67d,
		sceIoRemove  : 0x0000b63d,
		sceIoDread  : 0x0000b68d,
		sceIoRename  : 0x0000b64d,
		sceIoMkdir  : 0x0000b65d,
		sceIoRmdir  : 0x0000b66d,
		sceIoGetstat  : 0x0000b695,
		sceIoChstat  : 0x0000b695,
		sceIoSync  : 0x0000b6b5,
		sceIoIoctl  : 0x0000b6dd,
		sceIoGetstatByFd  : 0x0000b6f5,
		sceIoChstatByFd  : 0x0000b6fd,
		sceIoPread  : 0x0000b7e1,
		sceIoPwrite  : 0x0000b7f9,
	}
	
	// FW 2.12 library functions' offsets.
	sceGxmFcns_v212 =
	{
		sceGxmInitialize 						:	0x0000af60,
		sceGxmInitialize_vsh		 			:	0x0000aff0,
				
		sceGxmMapMemory  						:	0x0000b8d0,
		sceGxmUnmapMemory						:   0x0000b990,
		sceGxmMapVertexUsseMemory				:   0x0000bad8,
		sceGxmUnmapVertexUsseMemory				:   0x0000bbf4,
		sceGxmMapFragmentUsseMemory 			:   0x0000bc94,
		sceGxmUnmapFragmentUsseMemory			:   0x0000bdb4,
		
		sceGxmCreateContext						:	0x0000676c,
		sceGxmDestroyContext					:	0x00006aa8,
		
		sceGxmCreateRenderTarget				:	0x0001202c,
		sceGxmRenderTargetGetDriverMemBlock		:	0x00012068,
		sceGxmDestroyRenderTarget				:   0x000120fc,
		sceGxmGetRenderTargetMemSize			:   0x000121d4,
			
		sceGxmTerminate 						:	0x0000b080,
	}
	
	sceCommonDialogMainFcns_v212 =
	{

	}

	scePafFcns_v212 =
	{
		sceAudioOutOutput						:	0x00265874,
		sceAudioOutOpenPort						:	0x00265884,
		sceAudio_new							:	0x00265894,
		sceAudioOutSetVolume					:	0x002658a4,
		sceAudioOutReleasePort					:	0x002658b4,
		
		sceTouchPeekFunc						:   0x00264dd4,
		sceTouchGetPanelInfo 					: 	0x00264de4,
		sceTouchReadFunc 						:	0x00264e14,
		
		sceCtrlReadBufferPositive_1				:   0x00265164,		
		sceCtrl_unk1							:   0x00265134,
		sceCtrl_unk2							:   0x00265144,
		sceCtrlReadBufferPositive_2				:   0x00265174,
		sceCtrlSetSamplingMode_1				:   0x00265154,
		sceCtrlSetSamplingMode_2				:   0x00265184,
	}

	sceDriverUserFcns_v212 =
	{
		sceKernelDelayThread 					: 	0x000012c4,
		
		_sceAppMgrGetAppState					:	0x00001724,
		sceAppMgrReceiveSystemEvent				:	0x00001934,
		sceAppMgrLoadExec 						:	0x00001C14,
		
		sceAppMgr_mount1						:   0x00001694,
		sceAppMgr_mount2						:	0x00001D14,
		sceAppMgrConvertVs0UserDrivePath		:   0x00001704,
		
		sceMotionStartSampling 					:   0x00005fc1,
		sceMotionMagnetometerOn					:	0x00005f75,
		sceMotionStopSampling 					:	0x0000602d,
		sceMotionGetState 						:	0x000052d1,
	}

	sceWebKitProcessFcns_v212 =
	{
		sceRegMgrForGame_read					:   0x00013540,
		sceRegMgrForGame_write					:   0x00013550,
		
		sceKernelGetSystemSwVersion				: 	0x000133b0,
		
		sceSysmoduleLoadModule					:	0x00013530,
		sceSysmoduleUnloadModule				:	0x00013520,
	}

	sceCommonDialogFcns_v212 =
	{
		sceKernelGetMemBlockInfoByRange			:	0x0000c85c,
		
		sceSysmoduleLoadModuleWithArgs 			: 	0x0000c98c,
		sceSysmoduleUnloadModuleWithArgs 		: 	0x0000c97c,
	}

	sceAppUtilFcns_v212 =
	{
		sceAppUtilSaveSafeMemory				:	0x00002d3b,
		sceAppUtilLoadSafeMemory				:	0x00002d59,
		
		sceKernelCreateCallback					: 	0x00007b4c,
		sceKernelDeleteCallback					: 	0x00007b5c,
		
		sceAppUtilSystemParamGetInt 			: 	0x00002cc1,
		sceAppUtilInit							: 	0x00002677,
		sceAppUtilPhotoMount 					: 	0x00002aff,
		
		sceCallSupportUri 						: 	0x0000768c,
	}

	sceLibcFcns_v212 =
	{
		sceKernelGetStdin	:	0x00039628,
		sceKernelGetStdout	:	0x00039638,
		sceKernelGetStderr	:	0x00039658,
		
		fclose : 0x00003e29,
		fopen  : 0x00004565,
		fread  : 0x00004899,
		fwrite : 0x00004bf5,
		ftell  : 0x00004af1,
		fseek  : 0x00004a99,
		malloc : 0x0000facd,
		free   : 0x0000fadd,
		memcpy : 0x00013d81,
		memset : 0x00013e91,
		memcmp : 0x000055c5,
	}

	sceNetFcns_v212 =
	{
		sceNetHtons  : 0x000024f9,
		sceNetConnect  : 0x00002909,
		sceNetSend  : 0x00002935,
		sceNetSocket  : 0x000028e9,
		sceNetSocketClose  : 0x000029b9,
	}

	sceKernelFcns_v212 =
	{
		// Generic Syscall r12(ip) as syscall number
		sceGenSyscall	: 0x00003d80, //SVC 0; BX LR
		
		// Syscalls
		sceKernelGetProcessId		: 0x000041bc,
		sceKernelGetProcessParam	: 0x000044bc,
		sceKernelAllocMemBlock		: 0x00003dac,
		sceKernelGetMemBlockBase	: 0x00003d9c,
		sceKernelFreeMemBlock		: 0x00003d8c,
		sceKernelFindMemBlockByAddr	: 0x00003d7c,
		sceKernelGetModuleList  	: 0x0000440c,
		sceKernelGetModuleInfo  	: 0x0000441c,
		sceIoRead					: 0x0000474c,
		sceIoClose					: 0x000046bc,
		sceIoWrite					: 0x0000458c,
		sceIoDevctl					: 0x000045bc,
	
		// Functions
		sceKernelGetThreadId  		: 0x000001b5,
		sceKernelCreateThread  		: 0x0000bec5,
		sceKernelStartThread  		: 0x0000b97d,
		sceSblACMgrIsGameProgram 	: 0x0000bf19,
		sceKernelGetOpenPsId 		: 0x0000bf21,
		sceLibRng_generate			: 0x0000bf29,
		sceClibMemcpy  : 0x00000001,
		sceKernelCallModuleExit  : 0x000011b9,
		sceKernelGetModuleInfoByAddr  : 0x00001231,
		sceKernelLoadModule  : 0x0000b8dd,
		sceKernelStartModule  : 0x0000b8e5,
		sceKernelStopModule  : 0x0000b8fd,
		sceKernelUnloadModule  : 0x0000b915,
		sceKernelLoadStartModule  : 0x0000b91d,
		sceKernelStopUnloadModule  : 0x0000b935,
		sceKernelOpenModule  : 0x0000b94d,
		sceKernelCloseModule  : 0x0000b964,
		sceIoOpen  : 0x0000b6a1,
		sceIoLseek  : 0x0000b6b1,
		sceIoDopen  : 0x0000b709,
		sceIoRemove  : 0x0000b6c9,
		sceIoDread  : 0x0000b719,
		sceIoRename  : 0x0000b6d9,
		sceIoMkdir  : 0x0000b6e9,
		sceIoRmdir  : 0x0000b6f9,
		sceIoGetstat  : 0x0000b721,
		sceIoChstat  : 0x0000b731,
		sceIoSync  : 0x0000b741,
		sceIoIoctl  : 0x0000b769,
		sceIoGetstatByFd  : 0x0000b781,
		sceIoChstatByFd  : 0x0000b789,
		sceIoPread  : 0x0000b86d,
		sceIoPwrite  : 0x0000b885,
	}
	
	// FW 3.00 and 3.01 library functions' offsets.
	sceGxmFcns_v300_v301 =
	{
		sceGxmInitialize 						:	0x0000af44,
		sceGxmInitialize_vsh		 			:	0x0000afcc,
				
		sceGxmMapMemory  						:	0x0000b89c,
		sceGxmUnmapMemory						:   0x0000b96c,
		sceGxmMapVertexUsseMemory				:   0x0000baa4,
		sceGxmUnmapVertexUsseMemory				:   0x0000bbc4,
		sceGxmMapFragmentUsseMemory 			:   0x0000bc68,
		sceGxmUnmapFragmentUsseMemory			:   0x0000bd94,
		
		sceGxmCreateContext						:	0x00006a20,
		sceGxmDestroyContext					:	0x00006f60,
		
		sceGxmCreateRenderTarget				:	0x0001242c,
		sceGxmRenderTargetGetDriverMemBlock		:	0x0001246c,
		sceGxmDestroyRenderTarget				:   0x00012504,
		sceGxmGetRenderTargetMemSize			:   0x000125e4,
			
		sceGxmTerminate 						:	0x0000b058,
	}
	
	sceCommonDialogMainFcns_v300_v301 =
	{

	}

	scePafFcns_v300_v301 =
	{
		sceAudioOutOutput						:	0x00263518,
		sceAudioOutOpenPort						:	0x00263528,
		sceAudio_new							:	0x00263538,
		sceAudioOutSetVolume					:	0x00263548,
		sceAudioOutReleasePort					:	0x00263558,
		
		sceTouchPeekFunc						:   0x00262a58,
		sceTouchGetPanelInfo 					: 	0x00262a68,
		sceTouchReadFunc 						:	0x00262a98,
		
		sceCtrl_install							:	0x00263b68,
		sceCtrl_uninstall						:	0x00263b78,
		sceCtrlReadBufferPositive_1				:   0x00262dc8,
		sceCtrl_unk1							:   0x00262dd8,
		sceCtrl_unk2							:   0x00262de8,
		sceCtrlReadBufferPositive_2				:   0x00262df8,
		sceCtrlSetSamplingMode_1				:   0x00262e08,
		sceCtrlSetSamplingMode_2				:   0x00262e18,
	}

	sceDriverUserFcns_v300_v301 =
	{
		sceKernelDelayThread 					: 	0x00000df4,
		
		_sceAppMgrGetAppState					:	0x00001274,
		sceAppMgrReceiveSystemEvent				:	0x00001474,
		sceAppMgrLoadExec 						:	0x00001784,
		
		sceAppMgr_mount1						:   0x000011e4,
		sceAppMgr_mount2						:	0x00001884,
		sceAppMgrConvertVs0UserDrivePath		:   0x00001254,
		
		sceMotionStartSampling 					:   0x00006d81,
		sceMotionMagnetometerOn					:	0x00006d35,
		sceMotionStopSampling 					:	0x00006ded,
		sceMotionGetState 						:	0x00005911,
	}

	sceWebKitProcessFcns_v300_v301 =
	{
		sceRegMgrForGame_read					:   0x00011b30,
		sceRegMgrForGame_write					:   0x00011b40,
		
		sceKernelGetSystemSwVersion				: 	0x00011990,
		
		sceSysmoduleLoadModule					:	0x00011b20,
		sceSysmoduleUnloadModule				:	0x00011b10,
	}

	sceCommonDialogFcns_v300 =
	{
		sceKernelGetMemBlockInfoByRange			:	0x0000e190,
		
		sceSysmoduleLoadModuleWithArgs 			: 	0x0000e2d0,
		sceSysmoduleUnloadModuleWithArgs 		: 	0x0000e2c0,
	}
	
	sceCommonDialogFcns_v301 =
	{
		sceKernelGetMemBlockInfoByRange			:	0x0000e268,
		
		sceSysmoduleLoadModuleWithArgs 			: 	0x0000e3a8,
		sceSysmoduleUnloadModuleWithArgs 		: 	0x0000e398,
	}

	sceAppUtilFcns_v300_v301 =
	{
		sceAppUtilSaveSafeMemory				:	0x00002a81,
		sceAppUtilLoadSafeMemory				:	0x00002a9f,
		
		sceKernelCreateCallback					: 	0x000078b8,
		sceKernelDeleteCallback					: 	0x000078c8,
		
		sceAppUtilSystemParamGetInt 			: 	0x00002a07,
		sceAppUtilInit							: 	0x00002343,
		sceAppUtilPhotoMount 					: 	0x00002845,
		
		sceCallSupportUri 						: 	0x000073b8,
	}

	sceLibcFcns_v300_v301 =
	{
		sceKernelGetStdin	:	0x00038f8c,
		sceKernelGetStdout	:	0x00038f9c,
		sceKernelGetStderr	:	0x00038fbc,
		
		fclose : 0x00003e29,
		fopen  : 0x00004565,
		fread  : 0x00004899,
		fwrite : 0x00004bf5,
		ftell  : 0x00004af1,
		fseek  : 0x00004a99,
		malloc : 0x0000facd,
		free   : 0x0000fadd,
		memcpy : 0x00013d71,
		memset : 0x00013e81,
		memcmp : 0x000055c5,
	}

	sceNetFcns_v300_v301 =
	{
		sceNetHtons  : 0x000022bd,
		sceNetConnect  : 0x000026bd,
		sceNetSend  : 0x000026e9,
		sceNetSocket  : 0x0000269d,
		sceNetSocketClose  : 0x0000276d,
	}

	sceKernelFcns_v300_v301 =
	{
		// Generic Syscall r12(ip) as syscall number
		sceGenSyscall	: 0x000035b8, //SVC 0; BX LR
		
		// Syscalls
		sceKernelGetProcessId		: 0x000039f4,
		sceKernelGetProcessParam	: 0x00003ce4,
		sceKernelAllocMemBlock		: 0x000035e4,
		sceKernelGetMemBlockBase	: 0x000035d4,
		sceKernelFreeMemBlock		: 0x000035c4,
		sceKernelFindMemBlockByAddr	: 0x000035b4,
		sceKernelGetModuleList  	: 0x00003c34,
		sceKernelGetModuleInfo  	: 0x00003c44,
		sceIoRead					: 0x00003f74,
		sceIoClose					: 0x00003ee4,
		sceIoWrite					: 0x00003db4,
		sceIoDevctl					: 0x00003de4,
	
		// Functions
		sceKernelGetThreadId  		: 0x000001b5,
		sceKernelCreateThread  		: 0x00009f2d,
		sceKernelStartThread  		: 0x000099ed,
		sceSblACMgrIsGameProgram 	: 0x00003f94,
		sceKernelGetOpenPsId 		: 0x00003fa4,
		sceLibRng_generate			: 0x00009f8d,
		sceClibMemcpy  : 0x00000001,
		sceKernelCallModuleExit  : 0x000011b5,
		sceKernelGetModuleInfoByAddr  : 0x0000122d,
		sceKernelLoadModule  : 0x0000994d,
		sceKernelStartModule  : 0x00009955,
		sceKernelStopModule  : 0x0000996d,
		sceKernelUnloadModule  : 0x00009985,
		sceKernelLoadStartModule  : 0x0000998d,
		sceKernelStopUnloadModule  : 0x000099a5,
		sceKernelOpenModule  : 0x000099bd,
		sceKernelCloseModule  : 0x000099d5,
		sceIoOpen  : 0x00009711,
		sceIoLseek  : 0x00009721,
		sceIoDopen  : 0x00009779,
		sceIoRemove  : 0x00009739,
		sceIoDread  : 0x00009789,
		sceIoRename  : 0x00009749,
		sceIoMkdir  : 0x00009759,
		sceIoRmdir  : 0x00009769,
		sceIoGetstat  : 0x00009791,
		sceIoChstat  : 0x000097a1,
		sceIoSync  : 0x000097b1,
		sceIoIoctl  : 0x000097d9,
		sceIoGetstatByFd  : 0x000097f1,
		sceIoChstatByFd  : 0x000097f9,
		sceIoPread  : 0x000098dd,
		sceIoPwrite  : 0x000098f5,
	}

	// FW 3.15, 3.18 and 3.20 library functions' offsets.
	sceGxmFcns_v315_v318_v320 =
	{
		sceGxmInitialize 						:	0x0000aee4,
		sceGxmInitialize_vsh		 			:	0x0000af6c,
		
		sceGxmMapMemory  						:	0x0000b848,
		sceGxmUnmapMemory						:   0x0000b918,
		
		sceGxmMapVertexUsseMemory				:   0x0000ba50,
		sceGxmUnmapVertexUsseMemory				:   0x0000bb98,
		
		sceGxmMapFragmentUsseMemory 			:   0x0000bc3c,
		sceGxmUnmapFragmentUsseMemory			:   0x0000bd90,
		
		sceGxmCreateContext						:	0x000069c0,
		sceGxmDestroyContext					:	0x00006ef8,
		
		sceGxmCreateRenderTarget				:	0x000123ac,
		sceGxmRenderTargetGetDriverMemBlock		:	0x000123ec,
		sceGxmDestroyRenderTarget				:   0x00012484,
		sceGxmGetRenderTargetMemSize			:   0x00012564,
		
		sceGxmTerminate 						:	0x0000aff8,
	}
	
	sceCommonDialogMainFcns_v315_v318_v320 =
	{

	}

	scePafFcns_v315_v318_v320 =
	{
		sceAudioOutOutput						:	0x002530a4,
		sceAudioOutOpenPort						:	0x002530b4,
		sceAudio_new							:	0x002530c4,
		sceAudioOutSetVolume					:	0x002530d4,
		sceAudioOutReleasePort					:	0x002530e4,
		
		sceTouchPeekFunc						:   0x002525e4,
		sceTouchGetPanelInfo 					: 	0x002525f4,
		sceTouchReadFunc 						:	0x00252624,
		
		sceCtrl_install							:	0x00253764,
		sceCtrl_uninstall						:	0x00253774,
		sceCtrlReadBufferPositive_1				:   0x00252944,
		sceCtrl_unk1							:   0x00252964,
		sceCtrl_unk2							:   0x00252974,
		sceCtrlReadBufferPositive_2				:   0x00252984,
		sceCtrlSetSamplingMode_1				:   0x00252994,
		sceCtrlSetSamplingMode_2				:   0x002529A4,
	}

	sceDriverUserFcns_v315_v318_v320 =
	{
		sceKernelDelayThread 					: 	0x00001504,
		
		_sceAppMgrGetAppState					:	0x00001a24,
		sceAppMgrReceiveSystemEvent				:	0x00001c34,
		sceAppMgrLoadExec 						:	0x00001f44,
		
		sceAppMgr_mount1						:   0x00001994,
		sceAppMgr_mount2						:	0x00002054,
		sceAppMgrConvertVs0UserDrivePath		:   0x00001a04,
		
		sceMotionStartSampling 					:   0x00007399,
		sceMotionMagnetometerOn					:	0x0000734d,
		sceMotionStopSampling 					:	0x00007405,
		sceMotionGetState 						:	0x00005e69,
	}

	sceWebKitProcessFcns_v315_v318_v320 =
	{
		sceRegMgrForGame_read					:   0x00012508,
		sceRegMgrForGame_write					:   0x00012518,
		
		sceKernelGetSystemSwVersion				: 	0x00012378,
		
		sceSysmoduleLoadModule					:	0x000124f8,
		sceSysmoduleUnloadModule				:	0x000124e8,
	}

	sceCommonDialogFcns_v315 =
	{
		sceKernelGetMemBlockInfoByRange			:	0x0000b7ec,
		
		sceSysmoduleLoadModuleWithArgs 			: 	0x0000b93c,
		sceSysmoduleUnloadModuleWithArgs 		: 	0x0000b92c,
	}

	sceCommonDialogFcns_v318 =
	{
		sceKernelGetMemBlockInfoByRange			:	0x0000b8dc,
		
		sceSysmoduleLoadModuleWithArgs   		: 	0x0000ba2c,
		sceSysmoduleUnloadModuleWithArgs 		: 	0x0000ba1c,
	}
	
	sceCommonDialogFcns_v320 =
	{
		sceKernelGetMemBlockInfoByRange			:	0x0000b800,
		
		sceSysmoduleLoadModuleWithArgs   		: 	0x0000b950,
		sceSysmoduleUnloadModuleWithArgs 		: 	0x0000b940,
	}

	sceAppUtilFcns_v315_v318_v320 =
	{
		sceAppUtilSaveSafeMemory				:	0x00002c0f,
		sceAppUtilLoadSafeMemory				:	0x00002c2d,
		
		sceKernelCreateCallback					: 	0x00007bd0,
		sceKernelDeleteCallback					: 	0x00007be0,
		
		sceAppUtilSystemParamGetInt 			: 	0x00002b95,
		sceAppUtilInit							: 	0x000024b3,
		sceAppUtilPhotoMount 					: 	0x000029d3,
		
		sceCallSupportUri 						: 	0x000076c0,
	}

	sceLibcFcns_v315_v318_v320 =
	{
		sceKernelGetStdin	:	0x0003b318,
		sceKernelGetStdout	:	0x0003b328,
		sceKernelGetStderr	:	0x0003b348,
		
		realloc  : 0x0000f989,
		strtok  : 0x000069cd,
		wcspbrk  : 0x0000758d,
		towlower  : 0x00006cc9,
		vwprintf  : 0x0000715d,
		strstr  : 0x00006965,
		_Stollx  : 0x0000b3f1,
		strcspn  : 0x00006781,
		vscanf  : 0x00006f21,
		imaxabs  : 0x00004e5d,
		toupper  : 0x00006cb1,
		iscntrl  : 0x00004efd,
		strcat  : 0x000065d1,
		strtol  : 0x00006a59,
		strcasecmp  : 0x0000657d,
		isspace  : 0x00004f7d,
		mbrlen  : 0x0000511d,
		wcsncat  : 0x00007505,
		swprintf  : 0x00006ba5,
		strcmp  : 0x00006619,
		_Btowc  : 0x00007d1d,
		strerror  : 0x000067d9,
		ctime  : 0x00000c31,
		_WStold  : 0x0000ed5f,
		abort  : 0x00000945,
		atoi  : 0x000009b1,
		getwc  : 0x00004e31,
		putwc  : 0x0000565d,
		wcscspn  : 0x000073f1,
		ungetc  : 0x00006ce1,
		iswspace  : 0x00005019,
		setvbuf  : 0x00006315,
		wcstold  : 0x00007885,
		longjmp  : 0x00013db9,
		_Wctob  : 0x0000c6dd,
		memchr  : 0x000054e9,
		mbstowcs  : 0x00005445,
		wcscat  : 0x0000725d,
		mspace_malloc_stats_fast  : 0x00012fb1,
		mspace_calloc  : 0x00011f1d,
		mspace_destroy  : 0x00011e5f,
		_SCE_Assert  : 0x00007ce1,
		_WStod  : 0x0000e5b3,
		difftime  : 0x00003ca1,
		__cxa_atexit  : 0x000139e9,
		_WStof  : 0x0000e81b,
		wcstod  : 0x00007779,
		vfwprintf  : 0x00006e21,
		vfwscanf  : 0x00006e7d,
		iswpunct  : 0x0000500d,
		ungetwc  : 0x00006d39,
		setbuf  : 0x00006301,
		strtoll  : 0x00006a71,
		srand  : 0x00006505,
		isxdigit  : 0x0000503d,
		fgetpos  : 0x00004151,
		mspace_free  : 0x0001007b,
		putwchar  : 0x00005669,
		mblen  : 0x000050e1,
		wcstoimax  : 0x00007791,
		lldiv  : 0x0000508d,
		remove  : 0x0000032b,
		iswlower  : 0x00004ff5,
		ftell  : 0x00004a35,
		strspn  : 0x0000692d,
		_Stoldx  : 0x0000b175,
		mspace_realloc  : 0x00012673,
		islower  : 0x00004f3d,
		perror  : 0x0000552d,
		strcoll  : 0x00006767,
		getchar  : 0x00004cb1,
		strtold  : 0x00006a65,
		getc  : 0x00004ca9,
		strxfrm  : 0x00006b1b,
		wmemset  : 0x00007b71,
		__cxa_guard_release  : 0x00013bcd,
		_Lockfilelock  : 0x0000c3cb,
		fscanf  : 0x0000495d,
		setjmp  : 0x00013d91,
		_Stolx  : 0x0000b0a5,
		mspace_memalign  : 0x0001297b,
		wmemmove  : 0x00007b35,
		malloc_usable_size  : 0x0000f9d9,
		getwchar  : 0x00004e39,
		vswprintf  : 0x00007081,
		imaxdiv  : 0x00004e75,
		malloc_stats  : 0x0000f9a9,
		puts  : 0x00005615,
		fflush  : 0x00003fb1,
		_Stold  : 0x0000b3e7,
		free  : 0x0000f969,
		wcsstr  : 0x00007739,
		_Mbtowc  : 0x00008ebd,
		wcsspn  : 0x00007701,
		reallocalign  : 0x0000f9c9,
		wcsncpy  : 0x00007565,
		wcstof  : 0x00007785,
		wctomb  : 0x00007a41,
		_Unlocksyslock  : 0x0000c423,
		fgetc  : 0x00004071,
		_Stoull  : 0x0000ba61,
		_Stodx  : 0x0000a8fd,
		strpbrk  : 0x000068d5,
		_Stoll  : 0x0000b4eb,
		rewind  : 0x00006255,
		strtod  : 0x000069ad,
		strtof  : 0x000069b9,
		memset  : 0x00013d31,
		wcstoll  : 0x00007891,
		rename  : 0x00000309,
		wctob  : 0x00007a39,
		iswgraph  : 0x00004fe9,
		freopen  : 0x000048f9,
		memcpy  : 0x00013c21,
		clearerr  : 0x00000c11,
		wcsftime  : 0x00007429,
		sprintf  : 0x000064a5,
		_Wctomb  : 0x0000c7a7,
		memcmp  : 0x00005501,
		malloc  : 0x0000f959,
		_Stof  : 0x0000add7,
		wmemchr  : 0x00007add,
		_Stoulx  : 0x0000b679,
		mspace_malloc_usable_size  : 0x000139c5,
		fwscanf  : 0x00004c29,
		isalnum  : 0x00004eb5,
		putchar  : 0x00005605,
		_Locksyslock  : 0x0000c3f7,
		fputc  : 0x00004569,
		iswalnum  : 0x00004fa5,
		vsprintf  : 0x00006fed,
		exit  : 0x00003db9,
		ispunct  : 0x00004f69,
		iswxdigit  : 0x00005031,
		tolower  : 0x00006ca1,
		strcpy  : 0x00006771,
		atoll  : 0x000009c9,
		_WStoul  : 0x0000ef7d,
		fgetwc  : 0x000042c9,
		wcscpy  : 0x000073e1,
		strlen  : 0x000067e9,
		fwrite  : 0x00004b35,
		mspace_malloc_stats  : 0x00012e43,
		abs  : 0x00000971,
		wcscoll  : 0x000073d7,
		mbrtowc  : 0x00005345,
		mspace_reallocalign  : 0x00013071,
		vswscanf  : 0x00007101,
		isalpha  : 0x00004ecd,
		mbsinit  : 0x00005379,
		rand_r  : 0x00006239,
		fgetws  : 0x00004449,
		wmemcmp  : 0x00007af5,
		iswupper  : 0x00005025,
		putc  : 0x000055fd,
		_Stofx  : 0x0000ab79,
		printf  : 0x00005575,
		wcstombs  : 0x00007899,
		mbsrtowcs  : 0x00005389,
		scanf  : 0x00006281,
		llabs  : 0x00005075,
		_Towctrans  : 0x0000c495,
		_sceLibcErrnoLoc  : 0x00003cd5,
		iswctype  : 0x00004fd5,
		strncpy  : 0x000068ad,
		wcstok  : 0x00007799,
		snprintf  : 0x00006419,
		atol  : 0x000009bd,
		_Fltrounds  : 0x00024621,
		fputwc  : 0x00004699,
		fwide  : 0x00004a51,
		wcslen  : 0x000074f1,
		qsort  : 0x000061db,
		memalign  : 0x0000f999,
		wctype  : 0x00007a91,
		vsscanf  : 0x00007021,
		wcsncmp  : 0x0000752d,
		wcstoul  : 0x0000797d,
		vwscanf  : 0x000071c1,
		wscanf  : 0x00007c11,
		strncasecmp  : 0x000067fd,
		memmove  : 0x00013c99,
		fdopen  : 0x00003eb5,
		strtoumax  : 0x00006a89,
		fread  : 0x000047e1,
		malloc_stats_fast  : 0x0000f9b9,
		strtoimax  : 0x000069c5,
		__cxa_finalize  : 0x00013aab,
		_Exit  : 0x00007d71,
		ferror  : 0x00003f91,
		fputws  : 0x000047a5,
		isprint  : 0x00004f51,
		strchr  : 0x000065f9,
		wcstoumax  : 0x0000798d,
		fgets  : 0x00004171,
		labs  : 0x00005051,
		wprintf  : 0x00007b81,
		_Stod  : 0x0000ab6f,
		feof  : 0x00003f79,
		clock  : 0x00000675,
		rand  : 0x000061f1,
		wcschr  : 0x00007281,
		iswcntrl  : 0x00004fc9,
		iswdigit  : 0x00004fdd,
		fseek  : 0x000049dd,
		iswalpha  : 0x00004fb1,
		iswblank  : 0x00004fbd,
		fputs  : 0x000045cd,
		asctime  : 0x00000979,
		towupper  : 0x00006cd5,
		wcstoull  : 0x00007985,
		mspace_create  : 0x00011e3b,
		strrchr  : 0x00006905,
		towctrans  : 0x00006cc1,
		_Stoullx  : 0x0000b831,
		__cxa_guard_acquire  : 0x00013b85,
		__cxa_guard_abort  : 0x00013bf1,
		mktime  : 0x000003ab,
		bsearch  : 0x000009d5,
		atof  : 0x00000999,
		ldiv  : 0x00005059,
		mbtowc  : 0x000054bd,
		wcsrtombs  : 0x000075dd,
		wmemcpy  : 0x00007b21,
		wcrtomb  : 0x00007215,
		time  : 0x0000067d,
		fsetpos  : 0x00004a09,
		wcsrchr  : 0x000075b9,
		isgraph  : 0x00004f25,
		mspace_malloc  : 0x000112cf,
		fprintf  : 0x000044e5,
		strtoull  : 0x00006a81,
		swscanf  : 0x00006c39,
		strncmp  : 0x00006875,
		_Assert  : 0x00007cfd,
		fwprintf  : 0x00004aa5,
		_Stoul  : 0x0000b825,
		vprintf  : 0x00006ec9,
		calloc  : 0x0000f979,
		wctrans  : 0x00007a59,
		_Iswctype  : 0x0000c821,
		div  : 0x00003d91,
		strtok_r  : 0x00006a15,
		isdigit  : 0x00004f11,
		sscanf  : 0x00006515,
		fclose  : 0x00003de9,
		__aeabi_atexit  : 0x00013a9d,
		strftime  : 0x000067e1,
		btowc  : 0x00000a1d,
		vfscanf  : 0x00006dd5,
		isupper  : 0x00004f91,
		gmtime  : 0x00004e49,
		strtoul  : 0x00006a79,
		mspace_is_heap_empty  : 0x000139bd,
		wcscmp  : 0x0000729d,
		localtime  : 0x000050cd,
		iswprint  : 0x00005001,
		wcsxfrm  : 0x00007a31,
		vfprintf  : 0x00006d85,
		isblank  : 0x00004ee5,
		gets  : 0x00004cc1,
		strncat  : 0x00006849,
		wcstol  : 0x000077e1,
		_Unlockfilelock  : 0x0000c3e1,
		vsnprintf  : 0x00006f75,
		fileno  : 0x0000449d,
		strdup  : 0x000067b5,
		fopen  : 0x000044b1,
		free : 0x0000f968,
	}

	sceNetFcns_v315_v318_v320 =
	{
		sceNetRecv  : 0x00002711,
		sceNetDumpRead  : 0x000027b5,
		sceNetResolverStartAton  : 0x000023f9,
		sceNetSetsockopt  : 0x0000272d,
		sceNetGetMacAddress  : 0x00002191,
		sceNetNtohs  : 0x000022d1,
		sceNetConnect  : 0x000026b5,
		sceNetBind  : 0x0000269d,
		sceNetHtonll  : 0x000022a9,
		sceNetGetSockIdInfo  : 0x00002609,
		sceNetAccept  : 0x000026ad,
		sceNetGetsockname  : 0x0000274d,
		sceNetResolverStartNtoa  : 0x00002365,
		sceNetGetpeername  : 0x00002755,
		sceNetSocketClose  : 0x00002765,
		sceNetShowNetstat  : 0x00001fbd,
		sceNetResolverDestroy  : 0x0000250d,
		sceNetResolverAbort  : 0x00002585,
		sceNetDumpAbort  : 0x000027c5,
		sceNetEpollWait  : 0x0000277d,
		sceNetHtonl  : 0x000022b1,
		sceNetEpollControl  : 0x00002775,
		sceNetSendto  : 0x000026cd,
		sceNetEmulationSet  : 0x00002031,
		sceNetShowIfconfig  : 0x00001ed5,
		sceNetShutdown  : 0x00002725,
		sceNetShowRoute  : 0x00001f49,
		sceNetResolverCreate  : 0x000022e1,
		sceNetEpollDestroy  : 0x0000279d,
		sceNetListen  : 0x000026a5,
		sceNetDumpDestroy  : 0x000027bd,
		sceNetEtherNtostr  : 0x00002161,
		sceNetResolverGetError  : 0x00002491,
		sceNetSocketAbort  : 0x0000268d,
		sceNetEpollWaitCB  : 0x0000278d,
		sceNetEpollAbort  : 0x000027a5,
		sceNetInetNtop  : 0x00002289,
		sceNetSendmsg  : 0x000026c5,
		sceNetHtons  : 0x000022b5,
		sceNetGetStatisticsInfo  : 0x00001101,
		sceNetEmulationGet  : 0x000020b1,
		sceNetDumpCreate  : 0x000027ad,
		sceNetGetSockInfo  : 0x00002601,
		sceNetRecvfrom  : 0x000026fd,
		sceNetGetsockopt  : 0x0000273d,
		sceNetNtohl  : 0x000022cd,
		sceNetInetPton  : 0x00002291,
		sceNetSetDnsInfo  : 0x00000d95,
		sceNetRecvmsg  : 0x000026f5,
		sceNetErrnoLoc  : 0x000027f9,
		sceNetSend  : 0x000026e1,
		sceNetTerm  : 0x00000a71,
		sceNetInit  : 0x00000a59,
		sceNetEtherStrton  : 0x00002131,
		sceNetSocket  : 0x00002695,
		sceNetEpollCreate  : 0x0000276d,
		sceNetNtohll  : 0x000022c5,
		sceNetClearDnsCache  : 0x00000e8d,
	}

	sceKernelFcns_v315_v318_v320 =
	{
		// Generic Syscall r12(ip) as syscall number
		sceGenSyscall	: 0x000054c0, //SVC 0; BX LR

		// Syscalls
		sceKernelGetProcessId		: 0x000058fc,
		sceKernelGetProcessParam	: 0x00005bec,
		sceKernelAllocMemBlock		: 0x000054ec,
		sceKernelGetMemBlockBase	: 0x000054dc,
		sceKernelFreeMemBlock		: 0x000054cc,
		sceKernelFindMemBlockByAddr	: 0x000054bc,
		sceKernelGetModuleList  	: 0x00005b3c,
		sceKernelGetModuleInfo  	: 0x00005b4c,
		sceIoRead					: 0x00005e7c,
		sceIoClose					: 0x00005dec,
		sceIoWrite					: 0x00005cbc,
		sceIoDevctl					: 0x00005cec,
		
		// Functions
		sceLibRng_generate			: 0x00009fd1,
		sceKernelAtomicSubAndGet32  : 0x00002238,
		sceKernelPuts  : 0x00001225,
		sceKernelGetRWLockInfo  : 0x00009e75,
		sceKernelAtomicGetAndAnd32  : 0x000022d8,
		sceKernelCreateMsgPipe  : 0x000015e1,
		sceKernelWaitSema  : 0x00009bf9,
		sceKernelSendMsgPipe  : 0x000015f5,
		sceClibStrcatChk  : 0x00008221,
		sceKernelGetThreadId  : 0x000001b5,
		sceClibMemcmpConstTime  : 0x00000991,
		sceKernelWaitMultipleEvents  : 0x00009ae1,
		sceKernelAtomicGetAndOr8  : 0x00002510,
		sceKernelAtomicCompareAndSet32  : 0x000027f8,
		sceKernelAtomicGetAndSub32  : 0x00002198,
		sceKernelUnlockLwMutex  : 0x000003d1,
		sceKernelWaitEvent  : 0x00009aa9,
		sceClibMemcpy  : 0x00000001,
		sceKernelCallModuleExit  : 0x00001235,
		sceKernelWaitSemaCB  : 0x00009c01,
		sceKernelCancelRWLock  : 0x00009e6d,
		sceKernelUnloadModule  : 0x000099c9,
		sceKernelAtomicAddUnless16  : 0x00002934,
		sceKernelLockMutex  : 0x00009c35,
		sceKernelAtomicCompareAndSet64  : 0x00002828,
		sceKernelGetTimerBase  : 0x00009df9,
		sceClibMemcpyChk  : 0x000081bd,
		sceKernelPollEventFlag  : 0x00009ba5,
		sceKernelPrintBacktrace  : 0x00001cb9,
		sceKernelCancelMutex  : 0x00009c45,
		sceKernelCreateTimer  : 0x00009df1,
		sceKernelStopUnloadModule  : 0x000099e9,
		sceKernelPollEvent  : 0x00009ad1,
		sceKernelWaitSignalCB  : 0x00009e99,
		sceKernelDeleteLwMutex  : 0x00009d6d,
		sceKernelAtomicGetAndAdd32  : 0x00002058,
		sceKernelGetOpenPsId  : 0x00009fc9,
		sceKernelAtomicGetAndAdd8  : 0x00002010,
		sceIoChstat  : 0x000097e5,
		sceKernelCreateSema  : 0x00009be5,
		sceKernelCancelEventFlag  : 0x00009bad,
		sceKernelLockMutexCB  : 0x00009c3d,
		sceClibStrlcpy  : 0x00007e49,
		sceKernelLockReadRWLockCB  : 0x00009e55,
		sceKernelLoadStartModule  : 0x000099d1,
		sceClibStrtoll  : 0x00007f75,
		sceKernelAtomicAddAndGet32  : 0x000020f8,
		sceClibAbort  : 0x0000177d,
		sceKernelLockLwMutexCB  : 0x00000289,
		sceKernelAtomicGetAndOr16  : 0x00002534,
		sceKernelAtomicDecIfPositive16  : 0x00002a3c,
		sceKernelAtomicCompareAndSet8  : 0x00002790,
		sceKernelReceiveMsgPipeCB  : 0x000016c1,
		sceKernelGetTimerTime  : 0x00009e01,
		sceKernelAtomicGetAndXor32  : 0x00002698,
		sceKernelSignalLwCond  : 0x00009db5,
		sceKernelStopModule  : 0x000099b1,
		sceClibMspaceCreate  : 0x00003649,
		sceClibMspaceMemalign  : 0x00004d71,
		sceKernelGetMsgPipeInfo  : 0x00009d3d,
		sceClibMemchr  : 0x0000540d,
		sceKernelWaitMultipleEventsCB  : 0x00009af5,
		__sce_aeabi_idiv0  : 0x000053bd,
		sceKernelAtomicSet16  : 0x00001f40,
		sceKernelAtomicXorAndGet32  : 0x00002738,
		sceClibMspaceMallocUsableSize  : 0x00005339,
		sceKernelLockLwMutex  : 0x0000028d,
		sceKernelAtomicGetAndAnd64  : 0x000022fc,
		sceKernelGetLwMutexInfoById  : 0x00009d75,
		sceClibStrncatChk  : 0x00008259,
		sceKernelCreateLwCond  : 0x00009d91,
		sceKernelAtomicAddAndGet16  : 0x000020d4,
		sceKernelAtomicGetAndSub64  : 0x000021bc,
		sceKernelAtomicAddUnless32  : 0x00002970,
		sceKernelGetProcessTime  : 0x000006ff,
		sceClibTolower  : 0x000053e1,
		sceKernelWaitCondCB  : 0x00009f61,
		sceKernelReceiveMsgPipe  : 0x0000168d,
		sceKernelOpenModule  : 0x00009a01,
		sceKernelCreateCond  : 0x00009c69,
		sceKernelAtomicOrAndGet8  : 0x000025b0,
		sceIoPread  : 0x00009921,
		sceKernelAtomicGetAndAnd8  : 0x00002290,
		sceIoIoctl  : 0x0000981d,
		sceKernelTryReceiveMsgPipe  : 0x000016f5,
		sceKernelAtomicGetAndAdd16  : 0x00002034,
		sceIoGetstatByFd  : 0x00009835,
		sceClibMspaceReallocalign  : 0x00005199,
		sceKernelGetSemaInfo  : 0x00009c11,
		sceClibVprintf  : 0x00007d01,
		sceKernelAtomicClearMask16  : 0x00002884,
		sceKernelSetEventWithNotifyCallback  : 0x00009b09,
		sceKernelCancelEvent  : 0x00009ad9,
		sceKernelTrySendMsgPipeVector  : 0x00009cdd,
		sceClibStrchr  : 0x00007ee5,
		sceKernelSetTimerEvent  : 0x00009e11,
		sceClibMemset  : 0x00000111,
		sceKernelAtomicXorAndGet8  : 0x000026f0,
		sceKernelAtomicGetAndAdd64  : 0x0000207c,
		sceKernelCloseModule  : 0x00009a19,
		sceClibStrncmp  : 0x000008f4,
		sceKernelCancelSema  : 0x00009c09,
		sceKernelAtomicAndAndGet32  : 0x00002378,
		sceClibMspaceCalloc  : 0x00004ccd,
		sceKernelLockWriteRWLock  : 0x00009e5d,
		sceKernelGetCondInfo  : 0x00009c79,
		sceKernelAtomicGetAndXor64  : 0x000026bc,
		sceIoOpen  : 0x00009755,
		sceKernelAtomicGetAndXor16  : 0x00002674,
		sceClibStrrchr  : 0x00007efd,
		sceIoChstatByFd  : 0x0000983d,
		sceKernelAtomicXorAndGet16  : 0x00002714,
		sceKernelStartModule  : 0x00009999,
		sceClibStrlcat  : 0x00007de5,
		sceKernelDeleteLwCond  : 0x00009da5,
		sceKernelAtomicGetAndXor8  : 0x00002650,
		sceClibMemmove  : 0x00000081,
		sceClibMspaceMallocStatsFast  : 0x0000510d,
		sceKernelExitProcess  : 0x00001585,
		sceKernelGetTimerEventRemainingTime  : 0x00009e3d,
		sceClibMspaceRealloc  : 0x00004d0d,
		sceKernelAtomicGetAndAnd16  : 0x000022b4,
		sceKernelGetTimerInfo  : 0x00009e21,
		sceKernelAtomicAddUnless8  : 0x000028f8,
		sceKernelAtomicOrAndGet64  : 0x0000261c,
		sceKernelWaitEventFlag  : 0x00009b7d,
		sceKernelCreateEventFlag  : 0x00009b75,
		sceKernelCreateRWLock  : 0x00009e45,
		sceKernelAtomicAndAndGet8  : 0x00002330,
		sceKernelTryReceiveMsgPipeVector  : 0x00009d21,
		sceClibMspaceMalloc  : 0x00003749,
		sceKernelGetCallbackInfo  : 0x00009a8d,
		sceKernelBacktrace  : 0x00009fad,
		sceKernelGetEventFlagInfo  : 0x00009bb5,
		sceKernelAtomicDecIfPositive64  : 0x00002a94,
		sceClibSnprintf  : 0x00007c25,
		sceClibMspaceMallocStats  : 0x00004d79,
		sceKernelGetThreadInfo  : 0x00009a39,
		sceKernelAtomicOrAndGet16  : 0x000025d4,
		sceKernelAtomicAddAndGet8  : 0x000020b0,
		sceKernelWaitLwCondCB  : 0x00009f69,
		sceIoPwrite  : 0x00009939,
		sceKernelPulseEventWithNotifyCallback  : 0x00009b21,
		sceKernelSendMsgPipeVector  : 0x00009cad,
		sceKernelAtomicClearMask64  : 0x000028c4,
		sceSblACMgrIsGameProgram  : 0x00009fc1,
		sceIoMkdir  : 0x0000979d,
		sceKernelGetLwCondInfoById  : 0x00009dd5,
		sceKernelAtomicGetAndOr32  : 0x00002558,
		sceIoSync  : 0x000097f5,
		sceKernelPMonThreadGetCounter  : 0x00009ee1,
		sceIoLseek  : 0x00009765,
		sceKernelAtomicSubAndGet8  : 0x000021f0,
		sceKernelGetMutexInfo  : 0x00009c4d,
		sceKernelAtomicSubAndGet64  : 0x0000225c,
		sceClibMspaceFree  : 0x000041b1,
		sceKernelSendMsgPipeVectorCB  : 0x00009cc5,
		sceIoDread  : 0x000097cd,
		sceClibStrncpyChk  : 0x00008211,
		sceClibMemcmp  : 0x00000814,
		sceKernelCancelTimer  : 0x00009e19,
		sceKernelAtomicDecIfPositive8  : 0x00002a10,
		sceKernelReceiveMsgPipeVector  : 0x00009cf1,
		sceKernelWaitEventCB  : 0x00009abd,
		sceClibMemmoveChk  : 0x000081cd,
		sceClibStrcmp  : 0x000008e5,
		sceKernelGetCurrentThreadVfpException  : 0x000001df,
		sceClibStrncat  : 0x00007e85,
		sceKernelLockWriteRWLockCB  : 0x00009e65,
		sceKernelSendMsgPipeCB  : 0x00001629,
		sceKernelTryLockLwMutex  : 0x000002bf,
		sceIoDopen  : 0x000097bd,
		sceKernelAtomicGetAndSub16  : 0x00002174,
		sceClibStrnlen  : 0x0000093d,
		sceKernelWaitSignal  : 0x00009e91,
		sceClibMspaceDestroy  : 0x000036b1,
		sceKernelAtomicAndAndGet64  : 0x0000239c,
		sceKernelCancelEventWithSetPattern  : 0x00009b39,
		sceClibToupper  : 0x000053c9,
		sceKernelGetProcessTimeWide  : 0x000006c9,
		sceKernelGetTLSAddr  : 0x00000171,
		sceClibStrncasecmp  : 0x00005359,
		sceKernelAtomicSet32  : 0x00001f54,
		sceKernelAtomicAddAndGet64  : 0x0000211c,
		_sceKernelCreateLwMutex  : 0x00009d59,
		sceClibStrcpyChk  : 0x000081ed,
		sceKernelLoadModule  : 0x00009991,
		sceIoGetstat  : 0x000097d5,
		sceKernelReceiveMsgPipeVectorCB  : 0x00009d09,
		sceKernelAtomicSubAndGet16  : 0x00002214,
		sceKernelAtomicGetAndOr64  : 0x0000257c,
		sceKernelAtomicOrAndGet32  : 0x000025f8,
		sceClibStrncpy  : 0x00007eb1,
		sceKernelWaitThreadEndCB  : 0x0000173d,
		sceKernelCreateThread  : 0x00009f71,
		sceKernelWaitCond  : 0x00009c71,
		sceKernelAtomicSet64  : 0x00001f68,
		sceKernelAtomicDecIfPositive32  : 0x00002a68,
		sceKernelAtomicGetAndSub8  : 0x00002150,
		sceKernelGetModuleInfoByAddr  : 0x000012ad,
		sceKernelBacktraceSelf  : 0x0000174d,
		sceClibMemsetChk  : 0x000081dd,
		sceClibMspaceIsHeapEmpty  : 0x000052b9,
		sceKernelGetThreadExitStatus  : 0x00001745,
		sceKernelGetThreadRunStatus  : 0x00009a55,
		sceKernelAtomicClearMask8  : 0x00002864,
		sceClibLookCtypeTable  : 0x000053f9,
		sceKernelCreateLwMutex  : 0x00001725,
		sceKernelWaitThreadEnd  : 0x00001735,
		sceKernelAtomicXorAndGet64  : 0x0000275c,
		sceKernelTrySendMsgPipe  : 0x0000165d,
		sceKernelGetSystemInfo  : 0x00009a71,
		sceKernelWaitLwCond  : 0x00009dad,
		sceIoRemove  : 0x0000977d,
		sceClibStrstr  : 0x00007f29,
		sceKernelAtomicClearMask32  : 0x000028a4,
		sceKernelGetLwCondInfo  : 0x00009dcd,
		sceKernelSignalLwCondAll  : 0x00009dbd,
		sceKernelGetEventPattern  : 0x00009b51,
		sceKernelCreateSimpleEvent  : 0x00009ea1,
		sceKernelWaitEventFlagCB  : 0x00009b91,
		sceKernelAtomicCompareAndSet16  : 0x000027c4,
		sceKernelAtomicSet8  : 0x00001f2c,
		sceIoRmdir  : 0x000097ad,
		sceKernelGetProcessTimeLow  : 0x000006a1,
		sceKernelCreateMutex  : 0x00009c2d,
		sceKernelCancelMsgPipe  : 0x00009d35,
		sceKernelStartThread  : 0x00009a31,
		sceIoRename  : 0x0000978d,
		sceKernelGetLwMutexInfo  : 0x000003c3,
		sceKernelAtomicAndAndGet16  : 0x00002354,
		sceClibPrintf  : 0x00007ca9,
		sceKernelLockReadRWLock  : 0x00009e4d,
		sceClibVsnprintf  : 0x00007c6d,
		__sce_aeabi_ldiv0  : 0x000053c1,
		sceKernelSignalLwCondTo  : 0x00009dc5,
		sceKernelSetTimerTime  : 0x00009e09,
		sceKernelAtomicAddUnless64  : 0x000029ac,
	}

	version_deps =
	{
		v2_02:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1 	: 0x3f6274,     	//  ldm     r1, {r0, ip, lr, pc}
					ldmr0 	: 0x358b84,			//	ldm		r0, {r2, r4, r5, r8, fp, ip, pc}
					ldmr2	: 0x36213c,			// 	ldm		r2, {r0, r1, r2, r3, ip, lr, pc}
					ldmr4_2 : 0x29804,			// 	ldm		r4, {r2, ip, lr, pc}
					ldmr2_4	: 0x3664b8,			//	ldm		r2, {r0, r1, r4, ip, lr, pc}
					ldmr4	: 0x29854,			//	ldm		r4, {r0, r1, ip, lr, pc}
					iloop 	: 0x1c4d80 | 1,     //  infinite loop
					bxlr 	: 0x2ca| 1,      	//  bx lr
					str3 	: 0xbef42 | 1, 		//  str     r3, [r0, #4]; bx  lr
					movr30 	: 0x4efc2c | 1      //  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v202, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v202_v205,  
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v202, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v202_v205,  
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v202, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v202_v205,  
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v202_v205, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v202_v205,
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v202_v205,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v202_v205,
				gadgets : 
				{
					scesetjmp : 0x34F8 | 1,
					scelongjmp : 0x3528 | 1
				}
			}
		},
		v2_05:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1 	: 0x237850,     	//  ldm     r1, {r0, ip, lr, pc}
					ldmr0 	: 0x358c24,			//	ldm		r0, {r2, r4, r5, r8, fp, ip, pc}					
					ldmr2	: 0x3621dc,			// 	ldm		r2, {r0, r1, r2, r3, ip, lr, pc}
					ldmr4_2 : 0x29804,			// 	ldm		r4, {r2, ip, lr, pc}
					ldmr2_4	: 0x366558,			//	ldm		r2, {r0, r1, r4, ip, lr, pc}
					ldmr4	: 0x29854,			//	ldm		r4, {r0, r1, ip, lr, pc}
					iloop 	: 0x1c4d80 | 1,     //  infinite loop
					bxlr 	: 0x2ca| 1,      	//  bx lr				
					str3 	: 0xbef42 | 1, 		//  str     r3, [r0, #4]; bx  lr
					movr30 	: 0x4efccc | 1      //  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v205, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v202_v205,  
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v205, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v202_v205,  
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v205, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v202_v205,  
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v202_v205, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v202_v205,
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v202_v205,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v202_v205,
				gadgets : 
				{
					scesetjmp : 0x34F8 | 1,
					scelongjmp : 0x3528 | 1
				}
			}
		},
		v2_12:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1 	: 	0x4a5acc,   	// 	ldm		r1, {r0, r1, r2, r4, ip, lr, pc}
					ldmr2	: 	0x3be650,		// 	ldm		r2, {r0, r1, r2, r3, ip, lr, pc}
					ldmr4_8	: 	0x4d3b48,   	// 	ldm		r4, {r0, r1, r8, ip, lr, pc}
					ldmr8 	: 	0x39af28,     	//  ldm     r8, {r0, r1, r2, r4, r5, ip, lr, pc}
					ldmr4_1	:	0x1e7618,		//	ldm		r4, {r1, ip, lr, pc}
					ldmr1_0 :	0x4a5acc,		//	ldm		r1, {r0, r1, r2, r4, ip, lr, pc}
					ldmr4 	:	0x120704,       //  ldm     r4, {r0, r1, r2, ip, lr, pc}
					iloop 	: 	0x98920 | 1,    //  infinite loop
					bxlr 	: 	0x2b5c| 1,      //  bx lr
					str3 	: 	0x7fa9c | 1,    //  str     r3, [r0, #4]; bx  lr
					movr30 	: 	0x528eb0 | 1    //  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v212, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v212,  
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v212, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v212,  
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v212, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v212,  
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v212, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v212,
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v212,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v212,
				gadgets : 
				{
					scesetjmp : 0x13EF0 | 1,
					scelongjmp : 0x13F20 | 1
				}
			}
		},
		v3_00:
		{
			"SceWebKit":        
			{
				gadgets:
				{			
					ldmr0 : 0x3bc534,			//  ldm	r0, {r0, r3, r4, r9, fp, ip, pc}
					ldmr1 : 0x453ff0,   		//  ldm r1, {r0, ip, lr, pc}
					ldmr9 : 0x3aa784,			//  ldm	r9, {r2, r5, r8, ip, lr, pc}
					ldmr8 : 0x3a5838,			//  ldm	r8, {r0, r1, r2, r4, r5, ip, lr, pc} 
					ldmr4 : 0x43c858,	        //  ldm	r4, {r1, r3, ip, lr, pc}
					ldmr1_0 : 0x1b5cac, 		//  ldm	r1, {r0, ip, lr, pc}
					ldmr5 : 0x3a506c,			//  ldm	r5, {r0, r2, r3, r4, r5, ip, lr, pc}
					iloop : 0x9851c | 1,        //  infinite loop
					bxlr : 0x2b3a | 1,          //  bx lr
					str3 : 0x7f4ac | 1,         //  str     r3, [r0, #4]; bx  lr
					movr30 : 0x535278 | 1       //  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v300_v301, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v300_v301, 
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v300_v301, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v300_v301, 
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v300_v301, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v300, 
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v300_v301, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v300_v301, 
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v300_v301,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v300_v301,
				gadgets : 
				{
					scesetjmp : 0x13EE0 | 1,
					scelongjmp : 0x13F10 | 1
				}
			}
		},
		v3_01:
		{
			"SceWebKit":        
			{
				gadgets:
				{			
					ldmr0 : 0x3bc534,			//  ldm	r0, {r0, r3, r4, r9, fp, ip, pc}
					ldmr1 : 0x453ff0,   		//  ldm r1, {r0, ip, lr, pc}
					ldmr9 : 0x3aa784,			//  ldm	r9, {r2, r5, r8, ip, lr, pc}
					ldmr8 : 0x3a5838,			//  ldm	r8, {r0, r1, r2, r4, r5, ip, lr, pc} 
					ldmr4 : 0x43c858,	        //  ldm	r4, {r1, r3, ip, lr, pc}
					ldmr1_0 : 0x1b5cac, 		//  ldm	r1, {r0, ip, lr, pc}
					ldmr5 : 0x3a506c,			//  ldm	r5, {r0, r2, r3, r4, r5, ip, lr, pc}
					iloop : 0x9851c | 1,        //  infinite loop
					bxlr : 0x2b3a | 1,          //  bx lr
					str3 : 0x7f4ac | 1,         //  str     r3, [r0, #4]; bx  lr
					movr30 : 0x535278 | 1       //  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v300_v301, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v300_v301, 
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v300_v301, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v300_v301, 
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v300_v301, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v301, 
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v300_v301, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v300_v301, 
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v300_v301,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v300_v301,
				gadgets : 
				{
					scesetjmp : 0x13EE0 | 1,
					scelongjmp : 0x13F10 | 1
				}
			}
		},
		v3_15:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1 : 0x4483e4,               //  ldm     r1, {r0, ip, lr, pc}
					iloop : 0x133a6 | 1,           	//  infinite loop
					bxlr : 0x6b061c | 1,           	//  bx lr
					ldmr4 : 0x188b50,               //  ldm     r4, {r0, r1, r2, ip, lr, pc}
					ldmr8 : 0x39b834,              	//  ldm     r8, {r0, r1, r2, r4, r5, ip, lr, pc}
					ldmr0 : 0x3a23cc,              	//  ldm     r0, {r1, r3, r4, r8, fp, ip, pc}
					str0 : 0x69f8be | 1,           	//  str     r1, [r0, #0]; bx  lr
					ldmr25 : 0x3ae638,             	//  ldm     r2, {r3, r5, r7, r8, fp, pc}
					ldmr4_0 : 0x3eee48,            	//  ldm     r4, {r0, ip, lr, pc}
					ldmr1_0 : 0x48643c,            	//  ldm     r1, {r0, r1, r2, r4, ip, lr, pc}
					ldmr5 : 0x431368,              	//  ldm     r5, {r1, r3, ip, lr, pc}
					movr10 : 0x5f3dfa | 1,         	//  movs    r1, r0 ; bx lr
					str3 : 0x6ab582 | 1,           	//  str     r3, [r0, #4]; bx  lr
					movr30 : 0x47a748 | 1          	//  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v315_v318_v320,  
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v315_v318_v320,  
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v315, 
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v315_v318_v320,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v315_v318_v320,
				gadgets : 
				{
					scesetjmp : 0x13D90 | 1,
					scelongjmp : 0x13DB8 | 1
				}
			}
		},
		v3_18:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1 : 0x4483e4,               //  ldm     r1, {r0, ip, lr, pc}
					iloop : 0x133a6 | 1,            //  infinite loop
					bxlr : 0x2b00| 1,               //  bx lr
					ldmr4 : 0x188b50,               //  ldm     r4, {r0, r1, r2, ip, lr, pc}
					ldmr8 : 0x39b834,              	//  ldm     r8, {r0, r1, r2, r4, r5, ip, lr, pc}
					ldmr0 : 0x3a23cc,              	//  ldm     r0, {r1, r3, r4, r8, fp, ip, pc}
					ldmr4_0 : 0x3eee48,            	//  ldm     r4, {r0, ip, lr, pc}
					ldmr1_0 : 0x48643c,            	//  ldm     r1, {r0, r1, r2, r4, ip, lr, pc}
					ldmr5 : 0x431368,              	//  ldm     r5, {r1, r3, ip, lr, pc}
					str3 : 0x6ab4ae | 1,           	//  str     r3, [r0, #4]; bx  lr
					movr30 : 0x47a748 | 1          	//  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v315_v318_v320,  
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v315_v318_v320,  
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v318,  
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v315_v318_v320,
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v315_v318_v320,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v315_v318_v320,
				gadgets : 
				{
					scesetjmp : 0x13D90 | 1,
					scelongjmp : 0x13DB8 | 1
				}
			}
		},
		v3_20:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1 : 0x4483f0,               //  ldm     r1, {r0, ip, lr, pc}
					iloop : 0x133a6 | 1,            //  infinite loop
					bxlr : 0x2af0| 1,               //  bx lr
					ldmr4 : 0x188b50,               //  ldm     r4, {r0, r1, r2, ip, lr, pc}
					ldmr8 : 0x39b840,              	//  ldm     r8, {r0, r1, r2, r4, r5, ip, lr, pc}
					ldmr0 : 0x3a23d8,              	//  ldm     r0, {r1, r3, r4, r8, fp, ip, pc}
					ldmr4_0 : 0x3eee54,            	//  ldm     r4, {r0, ip, lr, pc}
					ldmr1_0 : 0x486448,            	//  ldm     r1, {r0, r1, r2, r4, ip, lr, pc}
					ldmr5 : 0x431374,              	//  ldm     r5, {r1, r3, ip, lr, pc}
					str3 : 0x6ab53e | 1,           	//  str     r3, [r0, #4]; bx  lr
					movr30 : 0x47a754 | 1          	//  movs    r3, r0 ; bx lr 
				},
				functions: {}
			},
			"SceGxm":
			{
				functions : sceGxmFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceCommonDialogMain":
			{
				functions : sceCommonDialogMainFcns_v315_v318_v320,  
				gadgets : {}
			},
			"ScePaf":
			{
				functions : scePafFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v315_v318_v320,  
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v320,  
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v315_v318_v320, 
				gadgets : {}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v315_v318_v320,
				gadgets : {}
			},
			"SceNet":
			{
				functions: sceNetFcns_v315_v318_v320,
				gadgets: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v315_v318_v320,
				gadgets : 
				{
					scesetjmp : 0x13D90 | 1,
					scelongjmp : 0x13DB8 | 1
				}
			}
		}		
	};
}