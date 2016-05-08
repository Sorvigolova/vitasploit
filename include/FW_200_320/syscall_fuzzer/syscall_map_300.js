/*
	Syscall map for firmware 3.00
*/

function syscallOffsets()
{
	var tmp = { 
		SceAacenc:[ 
		],
		SceActivityDb:[ 
			0x2215c 
		],
		SceAppUtil:[ 
			0x7388 ,
			0x7398 ,
			0x73a8 ,
			0x7688 ,
			0x7698 ,
			0x76a8 ,
			0x76b8 ,
			0x7858 ,
			0x7868 ,
			0x7878 ,
			0x7888 ,
			0x7898 ,
			0x78a8 ,
			0x78b8 ,
			0x78c8 ,
			0x78d8 
		],
		SceAtrac:[ 
		],
		SceAudiocodec:[ 
		],
		SceAvcodecUser:[ 
			0x584 ,
			0x594 ,
			0x5a4 ,
			0x5b4 ,
			0x5c4 ,
			0x5d4 ,
			0x5e4 ,
			0x5f4 ,
			0x604 ,
			0x614 ,
			0x624 ,
			0x634 ,
			0x644 ,
			0x654 ,
			0x664 ,
			0x674 ,
			0x684 ,
			0x694 ,
			0x6a4 ,
			0x6b4 ,
			0x6c4 ,
			0x6d4 ,
			0x6e4 ,
			0x6f4 ,
			0x704 ,
			0x714 ,
			0x724 ,
			0x734 ,
			0x744 ,
			0x754 ,
			0x764 ,
			0x774 ,
			0x784 ,
			0x794 ,
			0x7a4 ,
			0x7b4 ,
			0x7c4 ,
			0x7d4 ,
			0x7e4 ,
			0x7f4 ,
			0x804 ,
			0x814 ,
			0x824 ,
			0x834 ,
			0x844 ,
			0x854 ,
			0x864 ,
			0x874 ,
			0x884 ,
			0x894 ,
			0x8a4 ,
			0x8b4 ,
			0x8c4 ,
			0x8d4 ,
			0x8e4 ,
			0x8f4 ,
			0x904 ,
			0x914 ,
			0x924 ,
			0x934 ,
			0x944 ,
			0x954 ,
			0x964 ,
			0x974 ,
			0x984 ,
			0x994 ,
			0x9a4 ,
			0x9b4 ,
			0x9c4 ,
			0x9d4 ,
			0x9e4 ,
			0x9f4 ,
			0xa04 ,
			0xa14 ,
			0xa24 ,
			0xa34 ,
			0xa44 ,
			0xa54 ,
			0xa64 ,
			0xa74 ,
			0xa84 ,
			0xa94 ,
			0xaa4 ,
			0xab4 ,
			0xac4 ,
			0xad4 ,
			0xae4 ,
			0xaf4 ,
			0xb04 ,
			0xb14 ,
			0xb24 ,
			0xb34 ,
			0xb44 ,
			0xb54 ,
			0xb64 ,
			0xb74 ,
			0xb84 ,
			0xb94 ,
			0xba4 ,
			0xbb4 ,
			0xbc4 ,
			0xbd4 ,
			0xbe4 ,
			0xbf4 ,
			0xc04 ,
			0xc14 ,
			0xc24 ,
			0xc34 ,
			0xc44 ,
			0xc54 ,
			0xc64 ,
			0xc74 ,
			0xc84 ,
			0xc94 ,
			0xca4 ,
			0xcb4 ,
			0xcc4 ,
			0xcd4 ,
			0xce4 ,
			0xcf4 ,
			0xd04 ,
			0xd14 ,
			0xd24 ,
			0xd34 ,
			0xd44 ,
			0xd54 ,
			0xd64 ,
			0xd74 ,
			0xd84 ,
			0xd94 ,
			0xda4 ,
			0xdb4 ,
			0xdc4 ,
			0xdd4 ,
			0xde4 
		],
		SceAvPlayer:[ 
			0xfb44 ,
			0xfb54 ,
			0xfb64 ,
			0xfe74 ,
			0xfe84 ,
			0xfe94 ,
			0xfea4 ,
			0xfeb4 ,
			0xfec4 ,
			0xfed4 ,
			0xfee4 
		],
		SceBeisobmf:[ 
		],
		SceBemp2sys:[ 
			//0xe0e4 //Already in other module.. 
			//0xe0f4 //Already in other module.. 
			0xe104 ,
			//0xe114 //Already in other module.. ,
			0xe124 
		],
		ScebXCe:[ 
			0x916c ,
			0x917c ,
			0x918c 
		],
		SceCheckoutDialogPlugin:[ 
		],
		SceClipboard:[ 
		],
		SceCommonDialog:[ 
			//0xe020 //Already in other module.. 
			0xe030 ,
			0xe040 ,
			0xe050 ,
			0xe060 ,
			0xe070 ,
			0xe080 ,
			0xe090 ,
			0xe0a0 ,
			0xe0b0 ,
			0xe170 ,
			0xe180 ,
			0xe190 ,
			0xe1a0 ,
			0xe1b0 ,
			//0xe1c0 //Already in other module.. ,
			//0xe1d0 //Already in other module.. ,
			//0xe1e0 //Already in other module.. ,
			//0xe1f0 //Already in other module.. ,
			0xe240 ,
			0xe250 ,
			0xe260 ,
			0xe270 ,
			0xe280 ,
			0xe290 ,
			0xe2b0 ,
			0xe2c0 ,
			0xe2d0 
		],
		SceCommonDialogMain:[ 
			0x24a0 ,
			0x24b0 ,
			0x26e0 ,
			0x26f0 ,
			0x2700 ,
			0x2730 ,
			0x2740 ,
			0x2750 
		],
		SceCommonGuiDialog:[ 
		],
		SceDbrecoveryUtility:[ 
		],
		SceDbutil:[ 
			0xf81c 
		],
		SceDriverUser:[ 
			//0xdf4 //Already in other module.. 
			0xe04 ,
			0xe14 ,
			0xe24 ,
			0xe34 ,
			0xe44 ,
			0xe54 ,
			0xe64 ,
			0xe74 ,
			0xe84 ,
			0xe94 ,
			0xea4 ,
			0xeb4 ,
			0xec4 ,
			0xed4 ,
			0xee4 ,
			0xef4 ,
			0xf04 ,
			0xf14 ,
			0xf24 ,
			0xf34 ,
			0xf44 ,
			0xf54 ,
			0xf64 ,
			0xf74 ,
			0xf84 ,
			0xf94 ,
			0xfa4 ,
			0xfb4 ,
			0xfc4 ,
			0xfd4 ,
			0xfe4 ,
			0xff4 ,
			0x1004 ,
			0x1014 ,
			0x1024 ,
			0x1034 ,
			0x1044 ,
			0x1054 ,
			0x1064 ,
			0x1074 ,
			0x1084 ,
			0x1094 ,
			0x10a4 ,
			0x10b4 ,
			0x10c4 ,
			0x10d4 ,
			0x10e4 ,
			0x10f4 ,
			0x1104 ,
			0x1114 ,
			0x1124 ,
			0x1134 ,
			0x1144 ,
			0x1154 ,
			0x1164 ,
			0x1174 ,
			0x1184 ,
			0x1194 ,
			0x11a4 ,
			0x11b4 ,
			0x11c4 ,
			0x11d4 ,
			0x11e4 ,
			0x11f4 ,
			0x1204 ,
			0x1214 ,
			0x1224 ,
			0x1234 ,
			0x1244 ,
			0x1254 ,
			0x1264 ,
			0x1274 ,
			0x1284 ,
			0x1294 ,
			0x12a4 ,
			0x12b4 ,
			0x12c4 ,
			0x12d4 ,
			0x12e4 ,
			0x12f4 ,
			0x1304 ,
			0x1314 ,
			0x1324 ,
			0x1334 ,
			0x1344 ,
			0x1354 ,
			0x1364 ,
			0x1374 ,
			0x1384 ,
			0x1394 ,
			0x13a4 ,
			0x13b4 ,
			0x13c4 ,
			0x13d4 ,
			0x13e4 ,
			0x13f4 ,
			0x1404 ,
			0x1414 ,
			0x1424 ,
			0x1434 ,
			0x1444 ,
			0x1454 ,
			0x1464 ,
			0x1474 ,
			0x1484 ,
			0x1494 ,
			0x14a4 ,
			0x14b4 ,
			0x14c4 ,
			0x14d4 ,
			0x14e4 ,
			0x14f4 ,
			0x1504 ,
			0x1514 ,
			0x1524 ,
			0x1534 ,
			0x1544 ,
			0x1554 ,
			0x1564 ,
			0x1574 ,
			0x1584 ,
			0x1594 ,
			0x15a4 ,
			0x15b4 ,
			0x15c4 ,
			0x15d4 ,
			0x15e4 ,
			0x15f4 ,
			0x1604 ,
			0x1614 ,
			0x1624 ,
			0x1634 ,
			0x1644 ,
			0x1654 ,
			0x1664 ,
			0x1674 ,
			0x1684 ,
			0x1694 ,
			0x16a4 ,
			0x16b4 ,
			0x16c4 ,
			0x16d4 ,
			0x16e4 ,
			0x16f4 ,
			0x1704 ,
			0x1714 ,
			0x1724 ,
			0x1734 ,
			0x1744 ,
			0x1754 ,
			0x1764 ,
			0x1774 ,
			0x1784 ,
			0x1794 ,
			0x17a4 ,
			0x17b4 ,
			0x17c4 ,
			0x17d4 ,
			0x17e4 ,
			0x17f4 ,
			0x1804 ,
			0x1814 ,
			0x1824 ,
			0x1834 ,
			0x1844 ,
			0x1854 ,
			0x1864 ,
			0x1874 ,
			0x1884 ,
			0x1894 ,
			0x18a4 ,
			0x18b4 ,
			0x18c4 ,
			0x18d4 ,
			0x18e4 ,
			0x18f4 ,
			0x1904 ,
			0x1914 
		],
		SceDrmPsmKdc:[ 
			0x4fec ,
			0x4ffc ,
			0x500c ,
			//0x501c //Already in other module.. ,
			0x502c ,
			//0x503c //Already in other module.. ,
			0x504c ,
			//0x505c //Already in other module.. ,
			0x50cc ,
			0x50dc ,
			0x50ec ,
			0x50fc ,
			0x510c ,
			0x511c ,
			0x512c 
		],
		SceFiber:[ 
			0x1300 ,
			0x1310 
		],
		SceFriendListDialogPlugin:[ 
		],
		SceGpuEs4User:[ 
			0x17c0 ,
			0x17d0 ,
			0x17e0 ,
			//0x1890 //Already in other module.. ,
			//0x18a0 //Already in other module.. ,
			//0x18b0 //Already in other module.. ,
			//0x18c0 //Already in other module.. 
		],
		SceGxm:[ 
			0x550 ,
			//0x560 //Already in other module.. ,
			//0x570 //Already in other module.. ,
			//0x580 //Already in other module.. ,
			0x590 ,
			0x5a0 ,
			0x5b0 ,
			//0x5c0 //Already in other module.. ,
			//0x5e0 //Already in other module.. ,
			0x5f0 ,
			0x600 
		],
		SceHafnium:[ 
			//0x41948 //Already in other module.. 
			//0x41958 //Already in other module.. 
			//0x41968 //Already in other module.. 
		],
		SceHandwriting:[ 
			//0xa564 //Already in other module.. 
			//0xa574 //Already in other module.. 
			//0xa584 //Already in other module.. 
		],
		SceIme:[ 
			0x2220 ,
			0x22d0 ,
			0x22e0 ,
			0x22f0 ,
			0x2300 
		],
		SceImeDialogPlugin:[ 
		],
		SceIniFileProcessor:[ 
			0x3874 ,
			//0x3884 //Already in other module.. ,
			//0x3894 //Already in other module.. ,
			//0x38a4 //Already in other module.. ,
			//0x38b4 //Already in other module.. ,
			//0x38c4 //Already in other module.. ,
			//0x38d4 //Already in other module.. 
		],
		SceJpegArm:[ 
		],
		SceJpegEncArm:[ 
		],
		SceLibc:[ 
			//0x38efc //Already in other module.. 
			//0x38f0c //Already in other module.. 
			0x38f1c ,
			0x38f2c ,
			0x38f3c ,
			0x38f4c ,
			0x38f5c ,
			0x38f6c ,
			0x38f7c ,
			0x38f8c ,
			0x38f9c ,
			0x38fac ,
			0x38fbc ,
			0x38fcc ,
			0x38fdc ,
			0x38fec ,
			0x38ffc ,
			0x3900c ,
			0x3901c ,
			//0x3902c //Already in other module.. ,
			0x3903c 
		],
		SceLibDbg:[ 
		],
		SceLibFios2:[ 
			//0x22448 //Already in other module.. 
			//0x22458 //Already in other module.. 
			//0x22468 //Already in other module.. 
			//0x22478 //Already in other module.. 
			//0x22488 //Already in other module.. 
			0x22498 ,
			//0x224a8 //Already in other module.. ,
			//0x224b8 //Already in other module.. ,
			//0x224c8 //Already in other module.. ,
			0x224d8 ,
			0x224e8 ,
			//0x224f8 //Already in other module.. ,
			0x22508 ,
			0x22518 
		],
		SceLibft2:[ 
			//0xaf8c //Already in other module.. 
			//0xaf9c //Already in other module.. 
		],
		SceLibG729:[ 
		],
		SceLibGameUpdate:[ 
			0x3f04 ,
			//0x3f14 //Already in other module.. ,
			//0x3f34 //Already in other module.. ,
			0x3f44 
		],
		SceLibHttp:[ 
			//0x16b70 //Already in other module.. 
			//0x16b80 //Already in other module.. 
			//0x16d80 //Already in other module.. 
			//0x16d90 //Already in other module.. 
			//0x16da0 //Already in other module.. 
			0x16db0 ,
			0x16dc0 ,
			//0x16dd0 //Already in other module.. ,
			//0x16df0 //Already in other module.. ,
			0x16e00 ,
			0x16e10 ,
			//0x16e20 //Already in other module.. 
		],
		SceLibKernel:[ 
			0x35b4 ,
			0x35c4 ,
			0x35d4 ,
			0x35e4 ,
			0x35f4 ,
			0x3604 ,
			0x3614 ,
			0x3624 ,
			0x3634 ,
			0x3644 ,
			0x3654 ,
			0x3664 ,
			//0x3674 //Already in other module.. ,
			0x3684 ,
			0x3694 ,
			0x36a4 ,
			0x36b4 ,
			0x36c4 ,
			0x36d4 ,
			0x36e4 ,
			0x36f4 ,
			0x3704 ,
			0x3714 ,
			0x3724 ,
			0x3734 ,
			0x3744 ,
			0x3754 ,
			0x3764 ,
			0x3774 ,
			0x3784 ,
			0x3794 ,
			0x37a4 ,
			0x37b4 ,
			//0x37c4 //Already in other module.. ,
			0x37d4 ,
			0x37e4 ,
			0x37f4 ,
			0x3804 ,
			0x3814 ,
			0x3824 ,
			0x3834 ,
			0x3844 ,
			0x3854 ,
			0x3864 ,
			0x3874 ,
			0x3884 ,
			0x3894 ,
			0x38a4 ,
			0x38b4 ,
			0x38c4 ,
			0x38d4 ,
			0x38e4 ,
			0x38f4 ,
			0x3904 ,
			0x3914 ,
			0x3924 ,
			0x3934 ,
			0x3944 ,
			0x3954 ,
			0x3964 ,
			0x3974 ,
			0x3984 ,
			0x3994 ,
			0x39a4 ,
			0x39b4 ,
			0x39c4 ,
			0x39d4 ,
			0x39e4 ,
			0x39f4 ,
			0x3a04 ,
			0x3a14 ,
			0x3a24 ,
			0x3a34 ,
			0x3a44 ,
			0x3a54 ,
			0x3a64 ,
			0x3a74 ,
			0x3a84 ,
			0x3a94 ,
			0x3aa4 ,
			0x3ab4 ,
			0x3ac4 ,
			0x3ad4 ,
			0x3ae4 ,
			0x3af4 ,
			0x3b04 ,
			0x3b14 ,
			//0x3b24 //Already in other module.. ,
			0x3b34 ,
			0x3b44 ,
			0x3b54 ,
			0x3b64 ,
			0x3b74 ,
			0x3b84 ,
			0x3b94 ,
			0x3ba4 ,
			0x3bb4 ,
			0x3bc4 ,
			0x3bd4 ,
			0x3be4 ,
			0x3bf4 ,
			0x3c04 ,
			//0x3c14 //Already in other module.. ,
			0x3c24 ,
			0x3c34 ,
			0x3c44 ,
			0x3c54 ,
			0x3c64 ,
			0x3c74 ,
			0x3c84 ,
			0x3c94 ,
			0x3ca4 ,
			0x3cb4 ,
			0x3cc4 ,
			0x3cd4 ,
			0x3ce4 ,
			0x3cf4 ,
			0x3d04 ,
			0x3d14 ,
			0x3d24 ,
			0x3d34 ,
			0x3d44 ,
			0x3d54 ,
			0x3d64 ,
			0x3d74 ,
			0x3d84 ,
			0x3d94 ,
			0x3da4 ,
			0x3db4 ,
			0x3dc4 ,
			0x3dd4 ,
			0x3de4 ,
			0x3df4 ,
			0x3e04 ,
			0x3e14 ,
			0x3e24 ,
			0x3e34 ,
			0x3e44 ,
			0x3e54 ,
			0x3e64 ,
			0x3e74 ,
			0x3e84 ,
			0x3e94 ,
			0x3ea4 ,
			0x3eb4 ,
			0x3ec4 ,
			0x3ed4 ,
			0x3ee4 ,
			0x3ef4 ,
			0x3f04 ,
			0x3f14 ,
			0x3f24 ,
			0x3f34 ,
			0x3f44 ,
			0x3f54 ,
			0x3f64 ,
			0x3f74 ,
			0x3f84 ,
			0x3f94 ,
			0x3fa4 ,
			0x3fb4 ,
			0x3fc4 ,
			0x3fd4 ,
			0x3fe4 ,
			0x3ff4 ,
			0x4004 ,
			0x4014 ,
			0x4024 ,
			0x4034 ,
			0x4044 ,
			0x4054 ,
			0x4064 ,
			0x4074 ,
			0x4084 ,
			0x4094 ,
			0x40a4 ,
			0x40b4 ,
			//0x40c4 //Already in other module.. ,
			0x40d4 ,
			0x40e4 ,
			0x40f4 ,
			0x4104 ,
			0x4114 ,
			0x4124 ,
			0x4134 ,
			0x4144 ,
			0x4154 ,
			0x4164 ,
			0x4174 ,
			0x4184 ,
			0x4194 ,
			0x41a4 ,
			0x41b4 ,
			0x41c4 ,
			0x41d4 
		],
		SceLibLocation:[ 
			//0x2800 //Already in other module.. 
			//0x2810 //Already in other module.. 
			//0x2820 //Already in other module.. 
			//0x2830 //Already in other module.. 
			//0x2840 //Already in other module.. 
		],
		SceLibLocationExtension:[ 
		],
		SceLibMp4Recorder:[ 
			//0x27558 //Already in other module.. 
			//0x27568 //Already in other module.. 
			//0x27578 //Already in other module.. 
			//0x27588 //Already in other module.. 
			0x27598 ,
			//0x275a8 //Already in other module.. ,
			0x275b8 ,
			//0x275c8 //Already in other module.. ,
			//0x27628 //Already in other module.. 
		],
		SceLibNetCtl:[ 
			//0x5e44 //Already in other module.. 
			//0x5e54 //Already in other module.. 
			//0x5e64 //Already in other module.. 
			//0x5e74 //Already in other module.. 
			//0x5e84 //Already in other module.. 
			//0x5e94 //Already in other module.. 
			//0x5ea4 //Already in other module.. 
			//0x5eb4 //Already in other module.. 
			0x5ec4 ,
			//0x5ed4 //Already in other module.. ,
			0x5ef4 ,
			0x5f04 ,
			//0x5f14 //Already in other module.. ,
			0x5f24 
		],
		SceLibPgf:[ 
			//0x631c //Already in other module.. 
			//0x632c //Already in other module.. 
		],
		SceLibPspnetAdhoc:[ 
			//0x7c94 //Already in other module.. 
			//0x7ca4 //Already in other module.. 
			//0x7cb4 //Already in other module.. 
			//0x7cc4 //Already in other module.. 
			//0x7cd4 //Already in other module.. 
			//0x7ce4 //Already in other module.. 
			//0x7cf4 //Already in other module.. 
			//0x7d04 //Already in other module.. 
			//0x7d14 //Already in other module.. 
			//0x7d24 //Already in other module.. 
			0x7ee4 ,
			//0x7f04 //Already in other module.. 
		],
		SceLibPvf:[ 
			//0x2298 //Already in other module.. 
			//0x22a8 //Already in other module.. 
			0x22b8 ,
			//0x22c8 //Already in other module.. ,
			//0x22d8 //Already in other module.. ,
			//0x22e8 //Already in other module.. 
		],
		SceLibRudp:[ 
			//0x11680 //Already in other module.. 
			//0x11690 //Already in other module.. 
			0x116a0 ,
			//0x116b0 //Already in other module.. ,
			//0x116c0 //Already in other module.. ,
			//0x116d0 //Already in other module.. ,
			//0x116e0 //Already in other module.. ,
			//0x116f0 //Already in other module.. ,
			//0x11700 //Already in other module.. 
		],
		SceLibSilk:[ 
		],
		SceLibSsl:[ 
			//0x4770c //Already in other module.. 
			//0x4771c //Already in other module.. 
			//0x4772c //Already in other module.. 
			//0x4773c //Already in other module.. 
			//0x4774c //Already in other module.. 
			//0x4775c //Already in other module.. 
		],
		SceLibVitaJSExtObj:[ 
		],
		SceLibWebCore:[ 
		],
		SceLibXml:[ 
			//0xc5d8 //Already in other module.. 
			//0xc5e8 //Already in other module.. 
			//0xc5f8 //Already in other module.. 
		],
		SceLiveAreaUtil:[ 
			//0xfac //Already in other module.. 
		],
		SceMp4:[ 
			0xe73c ,
			//0xe74c //Already in other module.. ,
			//0xe75c //Already in other module.. ,
			//0xe76c //Already in other module.. ,
			//0xe77c //Already in other module.. ,
			//0xe78c //Already in other module.. ,
			//0xe79c //Already in other module.. ,
			//0xe7ac //Already in other module.. 
		],
		SceMsgDialogPlugin:[ 
		],
		SceMusicExport:[ 
			//0x1474 //Already in other module.. 
			//0x1484 //Already in other module.. 
			//0x1494 //Already in other module.. 
			//0x14a4 //Already in other module.. 
			//0x14b4 //Already in other module.. 
			//0x14c4 //Already in other module.. 
			0x14d4 ,
			0x14e4 ,
			0x14f4 
		],
		SceNearDialogUtil:[ 
			0x4350 ,
			//0x4360 //Already in other module.. ,
			//0x4370 //Already in other module.. ,
			//0x44c0 //Already in other module.. ,
			//0x44d0 //Already in other module.. ,
			//0x44e0 //Already in other module.. 
		],
		SceNearProfile:[ 
			0xa5f0 ,
			0xa600 ,
			0xa610 ,
			0xa7f0 ,
			0xa800 ,
			//0xa810 //Already in other module.. ,
			0xa820 ,
			0xa880 ,
			//0xa9a0 //Already in other module.. ,
			//0xa9b0 //Already in other module.. ,
			//0xa9c0 //Already in other module.. ,
			//0xa9d0 //Already in other module.. ,
			//0xa9e0 //Already in other module.. ,
			//0xa9f0 //Already in other module.. ,
			//0xaa00 //Already in other module.. 
		],
		SceNearUtil:[ 
			//0x3b58 //Already in other module.. 
			//0x3b68 //Already in other module.. 
			//0x3b78 //Already in other module.. 
		],
		SceNet:[ 
			0x9a60 ,
			0x9a70 ,
			0x9a80 ,
			0x9a90 ,
			0x9aa0 ,
			0x9ab0 ,
			0x9ac0 ,
			0x9ad0 ,
			0x9ae0 ,
			0x9af0 ,
			0x9b00 ,
			0x9b10 ,
			0x9b20 ,
			0x9b30 ,
			0x9b40 ,
			0x9b50 ,
			0x9b60 ,
			0x9b70 ,
			0x9b80 ,
			0x9b90 ,
			0x9ba0 ,
			0x9bb0 ,
			0x9bc0 ,
			0x9bd0 ,
			0x9be0 ,
			0x9bf0 ,
			0x9c00 ,
			0x9c10 ,
			0x9c20 ,
			0x9c30 ,
			0x9c40 ,
			0x9c50 ,
			0x9c60 ,
			0x9c70 ,
			//0x9da0 //Already in other module.. ,
			//0x9db0 //Already in other module.. ,
			//0x9dc0 //Already in other module.. ,
			0x9dd0 ,
			//0x9de0 //Already in other module.. ,
			//0x9df0 //Already in other module.. ,
			//0x9e00 //Already in other module.. ,
			//0x9e10 //Already in other module.. 
		],
		SceNetAdhocMatching:[ 
			//0x31e0 //Already in other module.. 
			//0x31f0 //Already in other module.. 
			//0x3320 //Already in other module.. 
			//0x3330 //Already in other module.. 
			//0x3340 //Already in other module.. 
			//0x3350 //Already in other module.. 
			//0x3360 //Already in other module.. 
			//0x3370 //Already in other module.. 
		],
		SceNetCheckDialogPlugin:[ 
		],
		SceNgsUser:[ 
			//0x8014 //Already in other module.. 
			//0x8024 //Already in other module.. 
			0x80e4 ,
			0x80f4 ,
			0x8104 ,
			0x8114 ,
			0x8124 ,
			0x8134 ,
			0x8144 ,
			0x8154 ,
			0x8164 ,
			0x8174 ,
			0x8184 ,
			0x8194 ,
			0x81a4 ,
			0x81b4 ,
			0x81c4 ,
			0x81d4 ,
			0x81e4 ,
			0x81f4 ,
			0x8204 ,
			0x8214 ,
			0x8224 ,
			0x8234 ,
			0x8244 ,
			0x8254 ,
			0x8264 ,
			0x8274 ,
			0x8284 ,
			0x8294 ,
			0x82a4 ,
			0x82b4 ,
			0x82c4 ,
			0x82d4 ,
			0x82e4 ,
			0x82f4 ,
			0x8304 ,
			0x8314 ,
			0x8324 ,
			0x8334 ,
			0x8344 ,
			0x8354 ,
			0x8364 ,
			0x8374 ,
			0x8384 ,
			0x8394 ,
			0x83a4 ,
			0x83b4 ,
			0x83c4 ,
			0x83d4 ,
			0x83e4 ,
			0x83f4 ,
			0x8404 ,
			0x8414 ,
			0x8424 ,
			0x8434 ,
			0x8444 ,
			0x8454 ,
			0x8464 ,
			0x8474 ,
			0x8484 
		],
		SceNotificationUtil:[ 
		],
		SceNpActivity:[ 
		],
		SceNpActivityNet:[ 
		],
		SceNpBasic:[ 
			//0x4d70 //Already in other module.. 
			//0x4d80 //Already in other module.. 
			//0x4d90 //Already in other module.. 
			//0x4da0 //Already in other module.. 
			0x4db0 ,
			0x4dc0 ,
			//0x4dd0 //Already in other module.. 
		],
		SceNpCommerce2:[ 
			//0x20e68 //Already in other module.. 
			//0x20e78 //Already in other module.. 
			//0x20e88 //Already in other module.. 
			//0x20e98 //Already in other module.. 
			//0x20ea8 //Already in other module.. 
			//0x20eb8 //Already in other module.. 
		],
		SceNpCommon:[ 
			//0x53c4 //Already in other module.. 
			//0x53d4 //Already in other module.. 
			//0x53e4 //Already in other module.. 
			//0x53f4 //Already in other module.. 
			//0x5404 //Already in other module.. 
			//0x5414 //Already in other module.. 
			//0x5424 //Already in other module.. 
			//0x5434 //Already in other module.. 
			//0x5474 //Already in other module.. 
			//0x5484 //Already in other module.. 
			0x5494 ,
			0x54a4 ,
			0x54b4 
		],
		SceNpFriendPrivacyLevel:[ 
			//0x52e4 //Already in other module.. 
			//0x52f4 //Already in other module.. 
			//0x5304 //Already in other module.. 
		],
		SceNpKdc:[ 
			0x1bb4 ,
			0x1bc4 ,
			0x1bd4 ,
			0x1be4 ,
			0x1bf4 ,
			0x1c04 ,
			0x1c14 ,
			0x1c24 
		],
		SceNpManager:[ 
			//0x52f0 //Already in other module.. 
			//0x5300 //Already in other module.. 
			//0x5310 //Already in other module.. 
			//0x5320 //Already in other module.. 
			//0x54d0 //Already in other module.. 
		],
		SceNpMatching2:[ 
			//0x2d43c //Already in other module.. 
			//0x2d44c //Already in other module.. 
			//0x2d45c //Already in other module.. 
			//0x2d46c //Already in other module.. 
			//0x2d47c //Already in other module.. 
			//0x2d48c //Already in other module.. 
			//0x2d49c //Already in other module.. 
			//0x2d4ac //Already in other module.. 
			//0x2d4bc //Already in other module.. 
			//0x2dabc //Already in other module.. 
			//0x2dacc //Already in other module.. 
		],
		SceNpMessage:[ 
			0x5fb4c ,
			//0x5fccc //Already in other module.. ,
			//0x5fcdc //Already in other module.. ,
			//0x5fcec //Already in other module.. ,
			//0x5fcfc //Already in other module.. ,
			//0x5fd0c //Already in other module.. ,
			//0x5fd1c //Already in other module.. ,
			0x5fd2c ,
			//0x5fd3c //Already in other module.. ,
			//0x5fd4c //Already in other module.. ,
			0x5fd5c ,
			//0x5fd6c //Already in other module.. ,
			//0x5fd7c //Already in other module.. ,
			//0x5fe2c //Already in other module.. ,
			0x5fe3c ,
			0x5fe4c ,
			0x5fe5c ,
			0x5fe6c ,
			0x5fe7c ,
			0x5fe8c ,
			0x5fe9c ,
			0x5feac ,
			//0x5febc //Already in other module.. ,
			//0x5fecc //Already in other module.. ,
			//0x5fedc //Already in other module.. ,
			0x6002c ,
			//0x6006c //Already in other module.. ,
			//0x6007c //Already in other module.. ,
			//0x6008c //Already in other module.. ,
			//0x6009c //Already in other module.. ,
			0x600ac ,
			0x600bc ,
			//0x600cc //Already in other module.. ,
			0x601ac ,
			//0x601bc //Already in other module.. ,
			//0x601cc //Already in other module.. ,
			//0x601dc //Already in other module.. ,
			0x601ec ,
			//0x601fc //Already in other module.. 
		],
		SceNpMessageContactsPlugin:[ 
		],
		SceNpMessageDialogPlugin:[ 
		],
		SceNpMessageDlgImplPlugin:[ 
		],
		SceNpPartyGameUtil:[ 
			//0xc5c //Already in other module.. 
			//0xc6c //Already in other module.. 
			//0xc7c //Already in other module.. 
		],
		SceNpScore:[ 
			//0x3988 //Already in other module.. 
			//0x3998 //Already in other module.. 
			//0x39a8 //Already in other module.. 
			//0x39b8 //Already in other module.. 
			//0x39c8 //Already in other module.. 
			//0x39d8 //Already in other module.. 
			//0x39e8 //Already in other module.. 
			//0x39f8 //Already in other module.. 
			//0x3a08 //Already in other module.. 
			//0x3a18 //Already in other module.. 
		],
		SceNpSignaling:[ 
			//0x82a4 //Already in other module.. 
			//0x82b4 //Already in other module.. 
			//0x82c4 //Already in other module.. 
			//0x82d4 //Already in other module.. 
			//0x82e4 //Already in other module.. 
			//0x82f4 //Already in other module.. 
			//0x8514 //Already in other module.. 
			//0x8524 //Already in other module.. 
		],
		SceNpSnsFacebook:[ 
			//0x3a0c //Already in other module.. 
			//0x3a1c //Already in other module.. 
			//0x3a2c //Already in other module.. 
			//0x3a3c //Already in other module.. 
		],
		SceNpTrophy:[ 
			//0x10990 //Already in other module.. 
			//0x109a0 //Already in other module.. 
			//0x109b0 //Already in other module.. 
			//0x109c0 //Already in other module.. 
			//0x10a60 //Already in other module.. 
		],
		SceNpTus:[ 
			//0x4f60 //Already in other module.. 
			//0x4f70 //Already in other module.. 
			//0x4f80 //Already in other module.. 
			//0x4f90 //Already in other module.. 
			//0x4fa0 //Already in other module.. 
			//0x4fb0 //Already in other module.. 
			//0x4fc0 //Already in other module.. 
			//0x4fd0 //Already in other module.. 
			//0x4fe0 //Already in other module.. 
			//0x4ff0 //Already in other module.. 
		],
		SceNpUtility:[ 
			//0x9cf4 //Already in other module.. 
			//0x9d04 //Already in other module.. 
			//0x9d14 //Already in other module.. 
			//0x9d24 //Already in other module.. 
			//0x9d34 //Already in other module.. 
			//0x9d44 //Already in other module.. 
			//0x9d54 //Already in other module.. 
			//0x9d64 //Already in other module.. 
			//0x9d74 //Already in other module.. 
			//0x9d84 //Already in other module.. 
		],
		ScePaf:[ 
			//0x262848 //Already in other module.. 
			0x262858 ,
			0x262868 ,
			0x262878 ,
			//0x262888 //Already in other module.. ,
			0x262a38 ,
			0x262a48 ,
			//0x262a58 //Already in other module.. ,
			//0x262a68 //Already in other module.. ,
			//0x262a78 //Already in other module.. ,
			//0x262a88 //Already in other module.. ,
			//0x262a98 //Already in other module.. ,
			//0x262aa8 //Already in other module.. ,
			//0x262ab8 //Already in other module.. ,
			//0x262ac8 //Already in other module.. ,
			//0x262ad8 //Already in other module.. ,
			//0x262ae8 //Already in other module.. ,
			//0x262af8 //Already in other module.. ,
			0x262ba8 ,
			0x262bb8 ,
			0x262bc8 ,
			0x262dc8 ,
			//0x262dd8 //Already in other module.. ,
			0x262de8 ,
			0x262df8 ,
			0x262e08 ,
			0x262e18 ,
			0x262e28 ,
			//0x262e38 //Already in other module.. ,
			//0x262e48 //Already in other module.. ,
			//0x262e58 //Already in other module.. ,
			0x262e68 ,
			0x262e78 ,
			0x262e88 ,
			0x262e98 ,
			0x262ea8 ,
			0x262eb8 ,
			0x262ec8 ,
			//0x263518 //Already in other module.. ,
			//0x263528 //Already in other module.. ,
			//0x263538 //Already in other module.. ,
			//0x263548 //Already in other module.. ,
			//0x263558 //Already in other module.. ,
			//0x263568 //Already in other module.. ,
			0x263578 ,
			//0x2638d8 //Already in other module.. ,
			//0x2638e8 //Already in other module.. ,
			//0x2638f8 //Already in other module.. ,
			//0x263908 //Already in other module.. ,
			//0x263918 //Already in other module.. ,
			//0x263928 //Already in other module.. ,
			//0x263938 //Already in other module.. ,
			//0x263948 //Already in other module.. ,
			//0x263958 //Already in other module.. ,
			//0x263968 //Already in other module.. ,
			//0x263978 //Already in other module.. ,
			//0x263988 //Already in other module.. ,
			//0x263998 //Already in other module.. ,
			//0x2639a8 //Already in other module.. ,
			//0x2639b8 //Already in other module.. ,
			0x2639c8 ,
			0x2639d8 ,
			0x2639e8 ,
			0x2639f8 ,
			//0x263a08 //Already in other module.. ,
			0x263a18 ,
			//0x263a28 //Already in other module.. ,
			//0x263a38 //Already in other module.. ,
			//0x263a48 //Already in other module.. ,
			0x263a58 ,
			0x263a68 ,
			0x263a78 ,
			0x263a88 ,
			0x263a98 ,
			0x263aa8 ,
			//0x263ab8 //Already in other module.. ,
			0x263ac8 ,
			//0x263ad8 //Already in other module.. ,
			0x263ae8 ,
			0x263af8 ,
			0x263b08 ,
			0x263b18 ,
			0x263b28 ,
			0x263b68 ,
			0x263b78 
		],
		ScePartyMemberListPlugin:[ 
		],
		ScePhotoExport:[ 
			//0x300c //Already in other module.. 
			//0x301c //Already in other module.. 
			//0x302c //Already in other module.. 
			//0x303c //Already in other module.. 
			//0x304c //Already in other module.. 
			//0x305c //Already in other module.. 
			//0x306c //Already in other module.. 
			//0x307c //Already in other module.. 
			//0x308c //Already in other module.. 
			//0x309c //Already in other module.. 
		],
		ScePhotoImportDialogPlugin:[ 
		],
		ScePhotoReviewDialogPlugin:[ 
		],
		ScePromoterUtil:[ 
			//0x10d8 //Already in other module.. 
		],
		ScePsp2Compat:[ 
			0x28e9f8 ,
			0x28ea08 ,
			0x28ea18 ,
			//0x28ecd8 //Already in other module.. ,
			//0x28ece8 //Already in other module.. ,
			//0x28ecf8 //Already in other module.. ,
			//0x28ed08 //Already in other module.. ,
			0x28ed18 ,
			//0x28ed28 //Already in other module.. ,
			//0x28ed38 //Already in other module.. ,
			0x28ed48 ,
			//0x28ed58 //Already in other module.. ,
			//0x28ed68 //Already in other module.. ,
			0x28ed78 ,
			0x28ed88 ,
			//0x28ed98 //Already in other module.. ,
			0x28eda8 ,
			0x28edb8 ,
			0x28edc8 ,
			0x28edd8 ,
			//0x28ede8 //Already in other module.. ,
			//0x28edf8 //Already in other module.. ,
			0x28ee08 ,
			0x28ee18 ,
			//0x28ee28 //Already in other module.. ,
			0x28ee38 ,
			//0x28efd8 //Already in other module.. ,
			0x28f028 
		],
		SceSasUser:[ 
			0x16230 
		],
		SceSaveDataDialogPlugin:[ 
		],
		SceScreenShot:[ 
			//0x1dd4 //Already in other module.. 
			//0x1de4 //Already in other module.. 
			//0x1df4 //Already in other module.. 
			//0x1e04 //Already in other module.. 
			//0x1e14 //Already in other module.. 
			//0x1e24 //Already in other module.. 
		],
		SceShellSvc:[ 
			//0xf3cc //Already in other module.. 
			//0xf3dc //Already in other module.. 
			0xf3ec ,
			//0xf3fc //Already in other module.. ,
			0xf40c ,
			//0xf41c //Already in other module.. ,
			//0xf42c //Already in other module.. ,
			//0xf43c //Already in other module.. ,
			//0xf44c //Already in other module.. ,
			//0xf45c //Already in other module.. ,
			//0xf46c //Already in other module.. ,
			//0xf47c //Already in other module.. ,
			//0xf48c //Already in other module.. ,
			//0xf49c //Already in other module.. ,
			//0xf4ac //Already in other module.. ,
			//0xf4bc //Already in other module.. ,
			//0xf4cc //Already in other module.. ,
			0xf4dc ,
			//0xf4ec //Already in other module.. ,
			//0xf4fc //Already in other module.. ,
			//0xf50c //Already in other module.. ,
			//0xf51c //Already in other module.. ,
			//0xf52c //Already in other module.. ,
			//0xf53c //Already in other module.. ,
			//0xf54c //Already in other module.. ,
			//0xf55c //Already in other module.. ,
			//0xf56c //Already in other module.. ,
			//0xf57c //Already in other module.. ,
			//0xf58c //Already in other module.. ,
			//0xf59c //Already in other module.. ,
			//0xf5ac //Already in other module.. ,
			//0xf5bc //Already in other module.. ,
			//0xf5cc //Already in other module.. ,
			0xf5ec 
		],
		SceShutterSound:[ 
		],
		SceSqlite:[ 
			//0x52fc8 //Already in other module.. 
			//0x52fd8 //Already in other module.. 
			//0x52fe8 //Already in other module.. 
		],
		SceSqliteVsh:[ 
			//0x499cc //Already in other module.. 
			//0x499dc //Already in other module.. 
			//0x499ec //Already in other module.. 
			//0x499fc //Already in other module.. 
			//0x49a0c //Already in other module.. 
			//0x49a1c //Already in other module.. 
			//0x49a2c //Already in other module.. 
			//0x49a3c //Already in other module.. 
			//0x49a4c //Already in other module.. 
			//0x49a5c //Already in other module.. 
			//0x49a6c //Already in other module.. 
			//0x49a7c //Already in other module.. 
			//0x49a8c //Already in other module.. 
			//0x49a9c //Already in other module.. 
		],
		SceStoreCheckoutPlugin:[ 
		],
		SceSystemGesture:[ 
			0x2ad0 ,
			0x2ae0 
		],
		SceTeleportClient:[ 
			0xbca8 ,
			//0xbcb8 //Already in other module.. ,
			//0xbcc8 //Already in other module.. ,
			//0xbcd8 //Already in other module.. ,
			//0xbce8 //Already in other module.. ,
			0xbcf8 ,
			//0xbd08 //Already in other module.. ,
			0xbd18 ,
			0xbd28 ,
			0xbd38 ,
			//0xbec8 //Already in other module.. ,
			//0xbed8 //Already in other module.. ,
			//0xbee8 //Already in other module.. 
		],
		SceTeleportServer:[ 
			//0x1e4 //Already in other module.. 
		],
		SceTrophySetupDialogPlugin:[ 
		],
		SceUlt:[ 
			//0xf8d4 //Already in other module.. 
			0xf8e4 ,
			//0xf8f4 //Already in other module.. ,
			0xf904 
		],
		SceVideoExport:[ 
			//0x1ca0 //Already in other module.. 
			//0x1cb0 //Already in other module.. 
			//0x1cc0 //Already in other module.. 
			//0x1cd0 //Already in other module.. 
			//0x1ce0 //Already in other module.. 
			//0x1cf0 //Already in other module.. 
			//0x1d00 //Already in other module.. 
			//0x1d10 //Already in other module.. 
			//0x1d20 //Already in other module.. 
			//0x1d30 //Already in other module.. 
			//0x1d40 //Already in other module.. 
			//0x1d70 //Already in other module.. 
		],
		SceVoice:[ 
			0x3f5c ,
			0x3f6c ,
			0x3f7c ,
			0x3f8c ,
			//0x3f9c //Already in other module.. ,
			0x3fac ,
			0x3fbc ,
			//0x415c //Already in other module.. ,
			//0x416c //Already in other module.. ,
			//0x417c //Already in other module.. ,
			//0x418c //Already in other module.. ,
			//0x419c //Already in other module.. ,
			//0x41ac //Already in other module.. ,
			//0x41bc //Already in other module.. ,
			//0x41cc //Already in other module.. ,
			//0x41dc //Already in other module.. ,
			//0x41ec //Already in other module.. 
		],
		SceVoiceQoS:[ 
			//0x33a4 //Already in other module.. 
			//0x33b4 //Already in other module.. 
			//0x33c4 //Already in other module.. 
		],
		SceWebFiltering:[ 
			//0x40c4 //Already in other module.. 
			//0x40d4 //Already in other module.. 
			//0x40e4 //Already in other module.. 
			//0x40f4 //Already in other module.. 
		],
		SceWebKit:[ 
		],
		SceWebKitProcess:[ 
			0x11990 ,
			0x119a0 ,
			//0x119b0 //Already in other module.. ,
			//0x119c0 //Already in other module.. ,
			//0x119d0 //Already in other module.. ,
			//0x119e0 //Already in other module.. ,
			0x119f0 ,
			0x11a00 ,
			//0x11a10 //Already in other module.. ,
			0x11a20 ,
			0x11a30 ,
			//0x11a40 //Already in other module.. ,
			0x11a50 ,
			0x11a60 ,
			0x11a70 ,
			0x11ac0 ,
			0x11b10 ,
			0x11b20 ,
			0x11b30 ,
			//0x11b40 //Already in other module.. ,
			0x11ff0 ,
			0x12000 ,
			0x12010 ,
			0x12020 ,
			0x12030 ,
			0x12040 
		],
	};
	return tmp;
}