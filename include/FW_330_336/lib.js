/*
   Resolved library functions
*/

function defineLibraryFuncs()
{
	// FW 3.35 library functions' offsets.
	sceLibcFcns_v335 =
	{
		time: 0x000006e9,
		fopen: 0x451d,
		fread: 0x484d,
		memset: 0x00013d91
	}
	
	sceAppUtilFcns_v335 =
	{
		sceAppUtilInit : 0x000024af,
		sceAppUtilPhotoMount : 0x000029cf,
		sceCallSupportUri : 0x00007b28
	}
	
	sceKernelFcns_v335 =
	{
		sceKernelGetModuleList: 0x00005b3c,
		sceKernelGetModuleInfo: 0x00005b4c,
		sceIoDopen  : 0x000097bd,
		sceIoDread  : 0x000097cd
	}
	
	sceDriverUserFcns_v335 =
	{
		sceAppMgrConvertVs0UserDrivePath : 0x00001a04,
		sceMotionStartSampling : 0x000073d9,
		sceMotionMagnetometerOn : 0x0000738d, 
		sceMotionStopSampling : 0x00007445,
		sceMotionGetState : 0x00005ea9,
	}
	
	sceCommonDialogFcns_v335 =
	{
		sceSysmoduleLoadModuleWithArgs : 0x0000c470,
		sceSysmoduleUnloadModuleWithArgs : 0x0000c460
	}
	
	sceWebKitProcessFcns_v335 =
	{		
		sceSysmoduleLoadModule : 0x00012bf0
	}
	
	// FW 3.36 library functions' offsets.
	sceLibcFcns_v336 =
	{
		time: 0x000006e9,
	}
	
	version_deps =
	{
		v3_35:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1_1: 0x8c004,      // ldm	r1, {r0, r1, r3, r4, r9, fp, ip, pc} ok
					ldmr1_2: 0x649c64,     // ldm	r1, {r0, r1, r2, r4, ip, lr, pc} ok
					ldmr4_1: 0x2e33c8,     // ldm	r4, {r1, ip, lr, pc} ok
					ldmr1_3: 0x295dc,      // ldm	r1, {r1, r4, ip, lr, pc} ok
					strr0: 0xf2ec4 | 1,   // str	r0, [r1]; bx lr
					ldmr4_2: 0x42dd4       // ldm	r4, {r0, ip, lr, pc} ok
				},
				functions: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v335,
				gadgets : 
				{
					scesetjmp : 0x13df0 | 1,
					scelongjmp : 0x13e18 | 1
				}
			},
			"SceLibKernel":
			{ 
				functions : sceKernelFcns_v335, 
				gadgets : {}
			},
			"SceAppUtil":
			{
				functions : sceAppUtilFcns_v335, 
				gadgets : {}
			},
			"SceWebKitProcess":
			{
				functions : sceWebKitProcessFcns_v335, 
				gadgets : {}
			},
			"SceCommonDialog":
			{
				functions : sceCommonDialogFcns_v335,  
				gadgets : {}
			},
			"SceDriverUser":
			{
				functions : sceDriverUserFcns_v335,  
				gadgets : {}
			},
			"SceGxm":
			{
				functions : {}, 
				gadgets : {}
			}
		},
		v3_36:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1_1: 0x8c004,      // ldm	r1, {r0, r1, r3, r4, r9, fp, ip, pc}
					ldmr1_2: 0x649cc4,     // ldm	r1, {r0, r1, r2, r4, ip, lr, pc}
					ldmr4_1: 0x2e340c,     // ldm	r4, {r1, ip, lr, pc}
					ldmr1_3: 0x295dc,      // ldm	r1, {r1, r4, ip, lr, pc}
					strr0: 0x127e20 | 1,   // str	r0, [r1, #0]; bx lr
					ldmr4_2: 0x42dd4       // ldm	r4, {r0, ip, lr, pc}
				},
				functions: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v336,
				gadgets : 
				{
					scesetjmp : 0x13df0 | 1,
					scelongjmp : 0x13e18 | 1
				}
			}
		}
	};
}
