/*
	Syscall map for firmware 3.18
*/

function syscallOffsets()
{
	var tmp = { 
		SceNpWebApi:[ 
			0x14c64 ,
			0x14c74 ,
			0x14c84 ,
			0x14c94 ,
			0x14dc4 ,
			0x14e04 ,
			0x14e14 ,
			0x15204 , 
			0x15214 ,
			//0x15224 , //Network down untill restart
			0x15234 , 
			0x15244 ,
			0x15254 ,
			0x15264 ,
			//0x15274 , //Network down, can't restart... 
			0x15284 ,
			0x15294 ,
			0x152a4 ,
			0x152b4 ,
			0x152c4 ,
			0x152d4 ,
			0x152e4 ,
			0x152f4 ,
			0x15304 ,
			0x15314 ,
			0x15324 ,
			0x15334 ,
			0x15344 ,
			0x15354 
		],
		SceTeleportClient:[ 
			0xc8a0 ,
			0xc8b0 ,
			//0xc8c0 //Already in other module.. ,
			//0xc8d0 //Already in other module.. ,
			0xc8e0 ,
			//0xc8f0 //Already in other module.. ,
			0xc900 ,
			0xc910 ,
			0xc920 ,
			0xc930 ,
			0xc940 ,
			//0xca90 //Already in other module.. ,
			//0xcaa0 //Already in other module.. ,
			//0xcab0 //Already in other module.. 
		],
		SceHandwriting:[ 
			0xa548 ,
			0xa558 ,
			0xa568 
		],
		SceFriendListDialogPlugin:[ 
		],
		SceNpMessageDialogPlugin:[ 
		],
		SceAtrac:[ 
		],
		SceLibSsl:[ 
			//0x47778 //Already in other module.. 
			//0x47788 //Already in other module.. 
			//0x47798 //Already in other module.. 
			//0x477a8 //Already in other module.. 
			//0x477b8 //Already in other module.. 
			//0x477c8 //Already in other module.. 
		],
		SceLibMp4Recorder:[ 
			0x276c8 ,
			//0x276d8 //Already in other module.. ,
			//0x276e8 //Already in other module.. ,
			//0x276f8 //Already in other module.. ,
			//0x27708 //Already in other module.. ,
			//0x27718 //Already in other module.. ,
			//0x27728 //Already in other module.. ,
			//0x27738 , //Infinite loop ?
			//0x27798 //Already in other module.. 
		],
		SceGpuEs4User:[ 
			0x17bc ,
			0x17cc ,
			0x17dc , //Backlight ?
			//0x188c //Already in other module.. ,
			//0x189c //Already in other module.. ,
			//0x18ac //Already in other module.. ,
			//0x18bc //Already in other module.. 
		],
		SceHafnium:[ 
			//0x4190c //Already in other module.. 
			//0x4191c //Already in other module.. 
			//0x4192c //Already in other module.. 
		],
		SceNotificationUtil:[ 
		],
		SceLibLocation:[ 
			//0x2818 //Already in other module.. 
			//0x2828 //Already in other module.. 
			//0x2838 //Already in other module.. 
			//0x2848 //Already in other module.. 
			//0x2858 //Already in other module.. 
		],
		SceStoreCheckoutPlugin:[ 
		],
		SceNetCheckDialogPlugin:[ 
		],
		SceUlt:[ 
			//0xf7e8 //Already in other module.. 
			0xf7f8 ,
			//0xf808 //Already in other module.. ,
			0xf818 
		],
		SceNpManager:[ 
			//0x5b20 //Already in other module.. 
			//0x5b30 //Already in other module.. 
			//0x5b40 //Already in other module.. 
			//0x5b50 //Already in other module.. 
			//0x5cf0 //Already in other module.. 
		],
		SceVoiceQoS:[ 
			//0x33a4 //Already in other module.. 
			//0x33b4 //Already in other module.. 
			//0x33c4 //Already in other module.. 
		],
		SceLiveAreaUtil:[ 
			//0xfac //Already in other module.. 
		],
		SceIniFileProcessor:[ 
			0x34e8 ,
			//0x34f8 //Already in other module.. ,
			//0x3508 //Already in other module.. ,
			//0x3518 //Already in other module.. ,
			//0x3528 //Already in other module.. ,
			//0x3538 //Already in other module.. ,
			//0x3548 //Already in other module.. 
		],
		SceNpBasic:[ 
			//0x4d20 //Already in other module.. 
			//0x4d30 //Already in other module.. 
			//0x4d40 //Already in other module.. 
			//0x4d50 //Already in other module.. 
			0x4d60 ,
			0x4d70 ,
			//0x4d80 //Already in other module.. 
		],
		SceNpMessageContactsPlugin:[ 
		],
		SceTeleportServer:[ 
			//0x1e4 //Already in other module.. 
		],
		ScePhotoReviewDialogPlugin:[ 
		],
		SceNpMessageDlgImplPlugin:[ 
		],
		SceLibXml:[ 
			//0xc5a0 //Already in other module.. 
			//0xc5b0 //Already in other module.. 
			//0xc5c0 //Already in other module.. 
		],
		SceClipboard:[ 
		],
		SceSqliteVsh:[ 
			//0x47d10 //Already in other module.. 
			0x47d20 ,
			//0x47d30 //Already in other module.. ,
			//0x47d40 //Already in other module.. ,
			//0x47d50 //Already in other module.. ,
			0x47d60 ,
			//0x47d70 //Already in other module.. ,
			//0x47d80 //Already in other module.. ,
			0x47d90 ,
			0x47da0 ,
			//0x47db0 //Already in other module.. ,
			//0x47dc0 //Already in other module.. ,
			//0x47dd0 //Already in other module.. ,
			//0x47de0 //Already in other module.. ,
			//0x47df0 //Already in other module.. ,
			//0x47e00 //Already in other module.. 
		],
		SceDriverUser:[ 
			//0x14d4 //Already in other module.. 
			//0x14e4 //Already in other module.. 
			//0x14f4 //Already in other module.. 
			//0x1504 //Already in other module.. 
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
			//0x1704 , (*, *, *, *, >=140)
			0x1714 ,
			0x1724 ,
			0x1734 ,
			0x1744 ,
			0x1754 ,
			0x1764 ,
			0x1774 ,
			0x1784 ,
			0x1794 ,
			0x17a4 , //Get date !
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
			0x1914 ,
			0x1924 ,
			0x1934 ,
			0x1944 ,
			0x1954 ,
			0x1964 ,
			0x1974 ,
			0x1984 ,
			//0x1994 , ( 0xcb, 0x0, 0x7b9c1b7, 0x0 ) //rand 
			0x19a4 ,
			0x19b4 ,
			0x19c4 ,
			0x19d4 ,
			0x19e4 ,
			0x19f4 ,
			0x1a04 ,
			0x1a14 ,
			0x1a24 ,
			0x1a34 ,
			0x1a44 ,
			0x1a54 ,
			0x1a64 ,
			0x1a74 ,
			//0x1a84 , //Error Popup
			//0x1a94 , //Error Popup
			//0x1aa4 , //Error Popup
			0x1ab4 ,
			//0x1ac4 , //Crash ( 0x0, 0x0, <user_land>, 0x0 )x100 //Error Popup number overflow ?
			0x1ad4 ,
			0x1ae4 ,
			0x1af4 ,
			0x1b04 ,
			0x1b14 ,
			0x1b24 ,
			0x1b34 ,
			0x1b44 ,
			0x1b54 ,
			0x1b64 ,
			0x1b74 ,
			0x1b84 ,
			0x1b94 ,
			0x1ba4 ,
			0x1bb4 ,
			0x1bc4 ,
			0x1bd4 ,
			0x1be4 ,
			0x1bf4 ,
			0x1c04 ,
			0x1c14 ,
			0x1c24 ,
			0x1c34 ,
			0x1c44 ,
			//0x1c54, //Crash ( 0x0, *, *, *) Panic() on NULL
			0x1c64 ,
			0x1c74 ,
			0x1c84 ,
			0x1c94 ,
			0x1ca4 ,
			0x1cb4 ,
			0x1cc4 ,
			0x1cd4 ,
			0x1ce4 ,
			0x1cf4 ,
			0x1d04 ,
			0x1d14 ,
			0x1d24 ,
			0x1d34 ,
			0x1d44 ,
			0x1d54 ,
			0x1d64 ,
			0x1d74 ,
			0x1d84 ,
			0x1d94 ,
			0x1da4 ,
			0x1db4 ,
			0x1dc4 ,
			0x1dd4 ,
			0x1de4 ,
			0x1df4 ,
			0x1e04 ,
			0x1e14 ,
			0x1e24 ,
			0x1e34 ,
			0x1e44 ,
			0x1e54 ,
			0x1e64 ,
			0x1e74 ,
			0x1e84 ,
			0x1e94 ,
			0x1ea4 ,
			0x1eb4 ,
			0x1ec4 ,
			0x1ed4 ,
			0x1ee4 ,
			0x1ef4 ,
			0x1f04 ,
			0x1f14 ,
			0x1f24 ,
			0x1f34 ,
			0x1f44 ,
			0x1f54 ,
			0x1f64 ,
			0x1f74 ,
			0x1f84 ,
			0x1f94 ,
			0x1fa4 ,
			//0x1fb4 //Crash ( 0x0, *, *, *) Panic() on NULL
			0x1fc4 ,
			0x1fd4 ,
			0x1fe4 ,
			0x1ff4 ,
			0x2004 ,
			0x2014 ,
			0x2024 ,
			0x2034 ,
			//0x2044, //Crash ( 0x0, *, *, *) Panic() on NULL
			0x2054 , //Crash ( 0x6d, 0x0, 0x0, 0x82953d30 ) //TODO
			0x2064 ,
			0x2074 ,
			0x2084 ,
			0x2094 ,
			0x20a4 ,
			0x20b4 ,
			0x20c4 ,
			0x20d4 ,
			0x20e4 ,
			//0x20f4 //Crash ( 0x0, *, *, *) Panic() on NULL
		],

		SceMusicExport:[ 
			//0x1578 //Already in other module.. 
			//0x1588 //Already in other module.. 
			//0x1598 //Already in other module.. 
			//0x15a8 //Already in other module.. 
			//0x15b8 //Already in other module.. 
			//0x15c8 //Already in other module.. 
			0x15d8 ,
			0x15e8 ,
			0x15f8 ,
			//0x1628 //Already in other module.. 
		],
		SceActivityDb:[ 
			//0x1d280 //Already in other module.. 
			//0x1d290 //Already in other module.. 
			0x1dba0 
		],
		SceNpCommonPs4:[ 
			//0x538c //Already in other module.. 
			//0x539c //Already in other module.. 
			//0x53ac //Already in other module.. 
			//0x53bc //Already in other module.. 
			//0x53cc //Already in other module.. 
			0x53dc ,
			//0x53ec //Already in other module.. ,
			//0x53fc //Already in other module.. ,
			0x540c ,
			//0x541c //Already in other module.. ,
			//0x542c //Already in other module.. ,
			0x543c ,
			//0x544c //Already in other module.. ,
			//0x545c //Already in other module.. ,
			//0x546c //Already in other module.. ,
			//0x547c //Already in other module.. ,
			0x548c ,
			//0x549c //Already in other module.. ,
			//0x54ac //Already in other module.. ,
			//0x54bc //Already in other module.. ,
			//0x54cc //Already in other module.. ,
			//0x54dc //Already in other module.. ,
			//0x54ec //Already in other module.. 
		],
		SceShellSvc:[ 
			//0xf494 //Already in other module.. 
			//0xf4a4 //Already in other module.. 
			0xf4b4 ,
			//0xf4c4 //Already in other module.. ,
			0xf4d4 ,
			//0xf4e4 //Already in other module.. ,
			0xf4f4 ,
			0xf504 ,
			//0xf514 //Already in other module.. ,
			//0xf524 //Already in other module.. ,
			//0xf534 //Already in other module.. ,
			//0xf544 //Already in other module.. ,
			//0xf554 //Already in other module.. ,
			//0xf564 //Already in other module.. ,
			//0xf574 , //Infinite loop
			//0xf584 //Already in other module.. ,
			//0xf594 //Already in other module.. ,
			//0xf5a4 //Already in other module.. ,
			//0xf5b4 //Already in other module.. ,
			//0xf5c4 //Already in other module.. ,
			//0xf5d4 //Already in other module.. ,
			//0xf5e4 //Already in other module.. ,
			//0xf5f4 //Already in other module.. ,
			//0xf604 //Already in other module.. ,
			//0xf614 //Already in other module.. ,
			//0xf624 //Already in other module.. ,
			//0xf634 //Already in other module.. ,
			//0xf644 //Already in other module.. ,
			//0xf654 //Already in other module.. ,
			//0xf664 //Already in other module.. ,
			//0xf674 //Already in other module.. ,
			//0xf684 //Already in other module.. ,
			//0xf694 //Already in other module.. ,
			//0xf6b4 //Already in other module.. 
		],
		SceLibft2:[ 
			//0xb2d4 //Already in other module.. 
			//0xb2e4 //Already in other module.. 
		],
		SceSasUser:[ 
			//0x1477c //Already in other module.. 
		],
		ScePaf:[ 
			0x2523b4 ,
			0x2523c4 ,
			0x2523d4 ,
			0x2523e4 ,
			0x2523f4 ,
			0x252404 ,
			0x252414 ,
			0x2525d4 ,
			0x2525e4 ,
			0x2525f4 ,
			0x252604 ,
			0x252614 ,
			0x252624 ,
			0x252634 ,
			0x252644 ,
			0x252654 ,
			0x252664 ,
			0x252674 ,
			0x252684 ,
			0x252704 ,
			0x252714 ,
			0x252724 ,
			0x252944 ,
			0x252954 ,
			0x252964 ,
			0x252974 ,
			0x252984 ,
			0x252994 ,
			0x2529a4 ,
			0x2529b4 ,
			0x2529c4 ,
			0x2529d4 ,
			0x2529e4 ,
			0x2529f4 ,
			0x252a04 ,
			0x252a14 ,
			0x252a24 ,
			0x252a34 ,
			0x252a44 ,
			0x252a54 ,
			0x2530a4 ,
			0x2530b4 ,
			0x2530c4 ,
			0x2530d4 ,
			0x2530e4 ,
			0x2530f4 ,
			//0x253104 //Already in other module.. ,
			//0x253474 //Already in other module.. ,
			0x253484 ,
			//0x253494 //Already in other module.. ,
			0x2534a4 ,
			0x2534b4 ,
			0x2534c4 ,
			0x2534d4 ,
			0x2534e4 ,
			//0x2534f4 //Already in other module.. ,
			0x253504 ,
			0x253514 ,
			0x253524 ,
			//0x253534 //Already in other module.. ,
			0x253544 ,
			0x253554 ,
			0x253564 ,
			0x253574 ,
			//0x253584 //Already in other module.. ,
			0x253594 ,
			//0x2535a4 //Already in other module.. ,
			//0x2535b4 //Already in other module.. ,
			//0x2535c4 //Already in other module.. ,
			//0x2535d4 //Already in other module.. ,
			//0x2535e4 //Already in other module.. ,
			//0x2535f4 //Already in other module.. ,
			//0x253604 //Already in other module.. ,
			//0x253614 //Already in other module.. ,
			//0x253624 //Already in other module.. ,
			0x253634 ,
			//0x253644 //Already in other module.. ,
			//0x253654 //Already in other module.. ,
			//0x253664 //Already in other module.. ,
			//0x253674 //Already in other module.. ,
			//0x253684 //Already in other module.. ,
			0x253694 ,
			0x2536a4 ,
			0x2536b4 ,
			0x2536c4 ,
			0x2536d4 ,
			0x2536e4 ,
			0x2536f4 ,
			0x253704 ,
			0x253714 ,
			0x253724 ,
			0x253764 ,
			0x253774 
		],
		SceNpKdc:[ 
			0x1c04 ,
			0x1c14 ,
			0x1c24 ,
			0x1c34 ,
			0x1c44 ,
			0x1c54 ,
			0x1c64 ,
			0x1c74 
		],
		SceNpSnsFacebook:[ 
			//0x3980 //Already in other module.. 
			//0x3990 //Already in other module.. 
			//0x39a0 //Already in other module.. 
			//0x39b0 //Already in other module.. 
		],
		SceWebKitProcess:[ 
			//0x12378 //Already in other module.. 
			//0x12388 //Already in other module.. 
			0x12398 ,
			//0x123a8 //Already in other module.. ,
			//0x123b8 //Already in other module.. ,
			//0x123c8 //Already in other module.. ,
			//0x123d8 //Already in other module.. ,
			//0x123e8 //Already in other module.. ,
			//0x123f8 //Already in other module.. ,
			//0x12408 //Already in other module.. ,
			0x12418 ,
			0x12428 ,
			//0x12438 //Already in other module.. ,
			//0x12448 //Already in other module.. ,
			//0x12458 //Already in other module.. ,
			0x12498 ,
			0x124e8 ,
			0x124f8 ,
			//0x12508 //Already in other module.. ,
			//0x12518 //Already in other module.. ,
			//0x12a28 //Already in other module.. ,
			//0x12a38 //Already in other module.. ,
			//0x12a48 //Already in other module.. ,
			//0x12a58 //Already in other module.. ,
			0x12a68 ,
			//0x12a78 //Already in other module.. ,
			//0x12a88 //Already in other module.. ,
			0x12a98 
		],
		SceImeDialogPlugin:[ 
		],
		SceNpActivity:[ 
		],
		SceCheckoutDialogPlugin:[ 
		],
		SceTrophySetupDialogPlugin:[ 
		],
		SceSystemGesture:[ 
			//0x2b84 //Already in other module.. 
			0x2b94 
		],
		SceSaveDataDialogPlugin:[ 
		],
		SceLibDbg:[ 
		],
		SceNetAdhocMatching:[ 
			//0x3278 //Already in other module.. 
			//0x3288 //Already in other module.. 
			//0x33b8 //Already in other module.. 
			//0x33c8 //Already in other module.. 
			//0x33d8 //Already in other module.. 
			//0x33e8 //Already in other module.. 
			//0x33f8 //Already in other module.. 
			//0x3408 //Already in other module.. 
		],
		SceNearDialogUtil:[ 
			0x4330 ,
			//0x4340 //Already in other module.. ,
			//0x4350 //Already in other module.. ,
			//0x44a0 //Already in other module.. ,
			//0x44b0 //Already in other module.. ,
			//0x44c0 //Already in other module.. 
		],
		SceAacenc:[ 
		],

		SceLibKernel:[ 
			//0x54bc //Already in other module.. 
			//0x54cc //Already in other module.. 
			//0x54dc //Already in other module.. 
			//0x54ec //Already in other module.. 
			0x54fc ,
			0x550c ,
			0x551c ,
			0x552c ,
			0x553c ,
			0x554c ,
			0x555c ,
			0x556c ,
			0x557c ,
			0x558c ,
			0x559c ,
			0x55ac ,
			//0x55bc //Already in other module.. ,
			0x55cc ,
			//0x55dc //Already in other module.. ,
			0x55ec ,
			0x55fc ,
			0x560c ,
			0x561c ,
			0x562c ,
			//0x563c , //Webkit Exception
			0x564c ,
			0x565c ,
			0x566c ,
			0x567c ,
			0x568c ,
			0x569c ,
			0x56ac ,
			0x56bc ,
			0x56cc ,
			0x56dc ,
			0x56ec ,
			0x56fc ,
			0x570c ,
			//0x571c , Infinite loop
			0x572c ,
			0x573c ,
			0x574c ,
			0x575c ,
			0x576c ,
			0x577c ,
			0x578c ,
			0x579c ,
			0x57ac ,
			0x57bc ,
			0x57cc ,
			0x57dc ,
			0x57ec ,
			0x57fc ,
			0x580c ,
			0x581c ,
			0x582c ,
			0x583c ,
			0x584c ,
			0x585c ,
			0x586c ,
			0x587c ,
			0x588c ,
			0x589c ,
			0x58ac ,
			0x58bc ,
			0x58cc ,
			0x58dc ,
			0x58ec ,
			//0x58fc //Already in other module.. ,
			0x590c ,
			0x591c ,
			0x592c ,
			0x593c ,
			0x594c ,
			0x595c ,
			0x596c ,
			0x597c ,
			0x598c ,
			0x599c ,
			0x59ac ,
			0x59bc ,
			0x59cc ,
			0x59dc ,
			0x59ec ,
			//0x59fc , Infinite loop ?
			0x5a0c ,
			0x5a1c ,
			0x5a2c ,
			0x5a3c ,
			0x5a4c ,
			0x5a5c ,
			0x5a6c ,
			0x5a7c ,
			0x5a8c ,
			0x5a9c ,
			0x5aac ,
			0x5abc ,
			0x5acc ,
			0x5adc ,
			0x5aec ,
			0x5afc ,
			0x5b0c ,
			//0x5b1c //Already in other module.. ,
			0x5b2c ,
			0x5b3c ,
			0x5b4c ,
			0x5b5c ,
			0x5b6c ,
			0x5b7c ,
			0x5b8c ,
			0x5b9c ,
			0x5bac ,
			0x5bbc ,
			0x5bcc ,
			0x5bdc ,
			0x5bec ,
			0x5bfc ,
			0x5c0c ,
			0x5c1c ,
			//0x5c2c , //Webkit Exception
			0x5c3c ,
			//0x5c4c //Already in other module.. ,
			0x5c5c ,
			0x5c6c , //sceKernelBacktrace SCE_KERNEL_ERROR_ILLEGAL_PERMISSION
			0x5c7c ,
			0x5c8c ,
			0x5c9c ,
			0x5cac ,
			//0x5cbc //Already in other module.. ,
			0x5ccc ,
			0x5cdc ,
			0x5cec ,
			0x5cfc ,
			0x5d0c ,
			0x5d1c ,
			0x5d2c ,
			0x5d3c ,
			//0x5d4c , Crash ( 0x0, *, *, * ) Panic() on NULL
			0x5d5c ,
			0x5d6c ,
			0x5d7c ,
			//0x5d8c , Crash ( *, 0x0, *, * ) Panic() on NULL
			0x5d9c ,
			0x5dac ,
			0x5dbc ,
			0x5dcc ,
			0x5ddc ,
			//0x5dec //Already in other module.. ,
			0x5dfc ,
			0x5e0c ,
			0x5e1c ,
			0x5e2c ,
			0x5e3c ,
			0x5e4c ,
			0x5e5c ,
			0x5e6c ,
			//0x5e7c //Already in other module.. ,
			0x5e8c ,
			0x5e9c ,
			0x5eac ,
			0x5ebc ,
			0x5ecc ,
			0x5edc ,
			0x5eec ,
			0x5efc ,
			0x5f0c ,
			0x5f1c ,
			0x5f2c ,
			0x5f3c ,
			0x5f4c ,
			0x5f5c ,
			0x5f6c ,
			0x5f7c ,
			0x5f8c ,
			0x5f9c ,
			0x5fac ,
			0x5fbc ,
			0x5fcc ,
			0x5fdc ,
			//0x5fec , //Infinite Loop
			0x5ffc ,
			0x600c ,
			0x601c ,
			0x602c ,
			0x603c ,
			0x604c ,
			0x605c ,
			0x606c ,
			0x607c ,
			0x608c ,
			0x609c ,
			0x60ac ,
			0x60bc ,
			//0x60cc , //What the fuck ?? Can start a process again... fork bomb ??!!? //TODO: look at this sycall !
			0x60dc 
		],
		SceNpFriendPrivacyLevel:[ 
			//0x525c //Already in other module.. 
			//0x526c //Already in other module.. 
			//0x527c //Already in other module.. 
		],
		SceGxm:[ 
			0x550 ,
			//0x560 //Already in other module.. ,
			//0x570 //Already in other module.. ,
			//0x580 //Already in other module.. ,
			//0x590 //Already in other module.. ,
			//0x5a0 //Already in other module.. ,
			//0x5b0 //Already in other module.. ,
			//0x5c0 //Already in other module.. ,
			0x5e0 ,
			//0x5f0 //Already in other module.. ,
			0x600 
		],
		SceCommonGuiDialog:[ 
		],
		SceNpTrophy:[ 
			//0x108d4 //Already in other module.. 
			//0x108e4 //Already in other module.. 
			//0x108f4 //Already in other module.. 
			//0x10904 //Already in other module.. 
			0x109a4 
		],
		SceShutterSound:[ 
		],
		SceNpCommerce2:[ 
			//0x1e948 //Already in other module.. 
			//0x1e958 //Already in other module.. 
			//0x1e968 //Already in other module.. 
			//0x1e978 //Already in other module.. 
			//0x1e988 //Already in other module.. 
			//0x1e998 //Already in other module.. 
		],
		SceJpegEncArm:[ 
		],
		ScePromoterUtil:[ 
			//0x145c //Already in other module.. 
		],
		SceDrmPsmKdc:[ 
			//0x4efc //Already in other module.. 
			//0x4f0c //Already in other module.. 
			//0x4f1c //Already in other module.. 
			//0x4f2c //Already in other module.. 
			//0x4f3c //Already in other module.. 
			//0x4f4c //Already in other module.. 
			//0x4f5c //Already in other module.. 
			//0x4f6c //Already in other module.. 
			0x4fdc ,
			0x4fec ,
			0x4ffc ,
			0x500c ,
			0x501c ,
			0x502c ,
			0x503c 
		],
		SceNpMessage:[ 
			//0x5d3d4 //Already in other module.. 
			//0x5d554 //Already in other module.. 
			//0x5d564 //Already in other module.. 
			//0x5d574 //Already in other module.. 
			//0x5d584 //Already in other module.. 
			//0x5d594 //Already in other module.. 
			//0x5d5a4 //Already in other module.. 
			//0x5d5b4 //Already in other module.. 
			//0x5d5c4 //Already in other module.. 
			//0x5d5d4 //Already in other module.. 
			//0x5d5e4 //Already in other module.. 
			//0x5d5f4 //Already in other module.. 
			//0x5d604 //Already in other module.. 
			//0x5d6d4 //Already in other module.. 
			//0x5d6e4 //Already in other module.. 
			//0x5d6f4 //Already in other module.. 
			//0x5d704 //Already in other module.. 
			//0x5d714 //Already in other module.. 
			//0x5d724 //Already in other module.. 
			//0x5d734 //Already in other module.. 
			//0x5d744 //Already in other module.. 
			//0x5d754 //Already in other module.. 
			//0x5d764 //Already in other module.. 
			//0x5d774 //Already in other module.. 
			//0x5d784 //Already in other module.. 
			//0x5d8d4 //Already in other module.. 
			//0x5d914 //Already in other module.. 
			//0x5d924 //Already in other module.. 
			//0x5d934 //Already in other module.. 
			//0x5d944 //Already in other module.. 
			//0x5d954 //Already in other module.. 
			//0x5d964 //Already in other module.. 
			//0x5d974 //Already in other module.. 
			//0x5da54 //Already in other module.. 
			//0x5da64 //Already in other module.. 
			//0x5da74 //Already in other module.. 
			//0x5da84 //Already in other module.. 
			//0x5da94 //Already in other module.. 
			//0x5daa4 //Already in other module.. 
		],
		SceNpCommon:[ 
			//0x5390 //Already in other module.. 
			//0x53a0 //Already in other module.. 
			//0x53b0 //Already in other module.. 
			//0x53c0 //Already in other module.. 
			//0x53d0 //Already in other module.. 
			//0x53e0 //Already in other module.. 
			//0x53f0 //Already in other module.. 
			//0x5400 //Already in other module.. 
			//0x5440 //Already in other module.. 
			0x5450 ,
			0x5460 ,
			0x5470 ,
			0x5480 
		],
		SceSqlite:[ 
			//0x51518 //Already in other module.. 
			//0x51528 //Already in other module.. 
			//0x51538 //Already in other module.. 
		],
		SceLibLocationExtension:[ 
		],
		SceNgsUser:[ 
			//0x658c //Already in other module.. 
			//0x659c //Already in other module.. 
			0x665c ,
			0x666c ,
			0x667c ,
			0x668c ,
			0x669c ,
			0x66ac ,
			0x66bc ,
			0x66cc ,
			0x66dc ,
			0x66ec ,
			0x66fc ,
			0x670c ,
			0x671c ,
			0x672c ,
			0x673c ,
			0x674c ,
			0x675c ,
			0x676c ,
			0x677c ,
			0x678c ,
			0x679c ,
			0x67ac ,
			0x67bc ,
			0x67cc ,
			0x67dc ,
			0x67ec ,
			0x67fc ,
			0x680c ,
			0x681c ,
			0x682c ,
			0x683c ,
			0x684c ,
			0x685c ,
			0x686c ,
			0x687c ,
			0x688c ,
			0x689c ,
			0x68ac ,
			0x68bc ,
			0x68cc ,
			0x68dc ,
			0x68ec ,
			0x68fc ,
			0x690c ,
			0x691c ,
			0x692c ,
			0x693c ,
			0x694c ,
			0x695c ,
			0x696c ,
			0x697c ,
			0x698c ,
			0x699c ,
			0x69ac ,
			0x69bc ,
			0x69cc ,
			0x69dc ,
			0x69ec ,
			0x69fc 
		],
		SceWebFiltering:[ 
			//0x3b84 //Already in other module.. 
			//0x3b94 //Already in other module.. 
			//0x3ba4 //Already in other module.. 
			//0x3bb4 //Already in other module.. 
		],
		SceBeisobmf:[ 
		],
		SceLibNetCtl:[ 
			//0x9550 //Already in other module.. 
			//0x9560 //Already in other module.. 
			//0x9570 //Already in other module.. 
			//0x9580 //Already in other module.. 
			//0x9590 //Already in other module.. 
			//0x95a0 //Already in other module.. 
			//0x95b0 //Already in other module.. 
			//0x95c0 //Already in other module.. 
			//0x95d0 //Already in other module.. 
			//0x95e0 //Already in other module.. 
			0x9600 ,
			0x9610 ,
			//0x9620 //Already in other module.. ,
			//0x9630 //Already in other module.. ,
			//0x97f0 //Already in other module.. 
		],
		SceLibPspnetAdhoc:[ 
			//0x7adc //Already in other module.. 
			//0x7aec //Already in other module.. 
			//0x7afc //Already in other module.. 
			//0x7b0c //Already in other module.. 
			//0x7b1c //Already in other module.. 
			//0x7b2c //Already in other module.. 
			//0x7b3c //Already in other module.. 
			//0x7b4c //Already in other module.. 
			//0x7b5c //Already in other module.. 
			//0x7b6c //Already in other module.. 
			0x7d2c ,
			//0x7d4c //Already in other module.. 
		],
		SceLibJson:[ 
			//0x47cc //Already in other module.. 
			//0x47dc //Already in other module.. 
		],
		SceLibHttp:[ 
			//0x16d7c //Already in other module.. 
			//0x16d8c //Already in other module.. 
			//0x16d9c //Already in other module.. 
			//0x16fac //Already in other module.. 
			//0x16fbc //Already in other module.. 
			//0x16fcc //Already in other module.. 
			//0x16fdc //Already in other module.. 
			//0x16fec //Already in other module.. 
			//0x16ffc //Already in other module.. 
			//0x1701c //Already in other module.. 
			0x1702c ,
			//0x1703c //Already in other module.. ,
			//0x1704c //Already in other module.. 
		],
		SceCommonDialog:[ 
			//0xb77c //Already in other module.. 
			0xb78c ,
			0xb79c ,
			0xb7ac ,
			//0xb7bc //Already in other module.. ,
			//0xb7cc //Already in other module.. ,
			//0xb7dc //Already in other module.. ,
			//0xb7ec //Already in other module.. ,
			//0xb7fc //Already in other module.. ,
			//0xb80c //Already in other module.. ,
			//0xb8bc //Already in other module.. ,
			//0xb8cc //Already in other module.. ,
			0xb8dc ,
			//0xb8ec //Already in other module.. ,
			//0xb8fc //Already in other module.. ,
			//0xb90c //Already in other module.. ,
			//0xb91c //Already in other module.. ,
			//0xb92c //Already in other module.. ,
			//0xb93c //Already in other module.. ,
			//0xb98c //Already in other module.. ,
			0xb99c ,
			//0xb9ac //Already in other module.. ,
			//0xb9bc //Already in other module.. ,
			0xb9cc ,
			0xb9dc ,
			//0xba0c //Already in other module.. ,
			0xba1c ,
			0xba2c 
		],
		SceDbutil:[ 
			//0xecb0 //Already in other module.. 
		],
		SceVoice:[ 
			//0x3d2c //Already in other module.. 
			//0x3d3c //Already in other module.. 
			//0x3d4c //Already in other module.. 
			0x3d5c ,
			0x3d6c ,
			0x3d7c ,
			0x3d8c ,
			//0x3f2c //Already in other module.. ,
			//0x3f3c //Already in other module.. ,
			//0x3f4c //Already in other module.. ,
			//0x3f5c //Already in other module.. ,
			//0x3f6c //Already in other module.. ,
			//0x3f7c //Already in other module.. ,
			//0x3f8c //Already in other module.. ,
			//0x3f9c //Already in other module.. ,
			//0x3fac //Already in other module.. ,
			//0x3fbc //Already in other module.. 
		],
		SceNpUtility:[ 
			//0x9c50 //Already in other module.. 
			//0x9c60 //Already in other module.. 
			//0x9c70 //Already in other module.. 
			//0x9c80 //Already in other module.. 
			//0x9c90 //Already in other module.. 
			//0x9ca0 //Already in other module.. 
			//0x9cb0 //Already in other module.. 
			//0x9cc0 //Already in other module.. 
			//0x9cd0 //Already in other module.. 
			//0x9ce0 //Already in other module.. 
		],
		SceLibGameUpdate:[ 
			//0x3f14 //Already in other module.. 
			//0x3f24 //Already in other module.. 
			//0x3f44 //Already in other module.. 
			//0x3f54 //Already in other module.. 
		],
		SceNearProfile:[ 
			0xa2f4 ,
			//0xa304 //Already in other module.. ,
			//0xa314 //Already in other module.. ,
			//0xa4f4 //Already in other module.. ,
			0xa504 ,
			0xa514 ,
			0xa524 ,
			//0xa584 //Already in other module.. ,
			//0xa6a4 //Already in other module.. ,
			//0xa6b4 //Already in other module.. ,
			//0xa6c4 //Already in other module.. ,
			//0xa6d4 //Already in other module.. ,
			//0xa6e4 //Already in other module.. ,
			//0xa6f4 //Already in other module.. ,
			//0xa704 //Already in other module.. 
		],
		SceLibPvf:[ 
			//0x2224 //Already in other module.. 
			//0x2234 //Already in other module.. 
			//0x2244 //Already in other module.. 
			//0x2254 //Already in other module.. 
			//0x2264 //Already in other module.. 
			//0x2274 //Already in other module.. 
		],
		ScebXCe:[ 
			//0x9340 //Already in other module.. 
			//0x9350 //Already in other module.. 
			//0x9360 //Already in other module.. 
		],
		SceScreenShot:[ 
			//0x1e68 //Already in other module.. 
			//0x1e78 //Already in other module.. 
			//0x1e88 //Already in other module.. 
			//0x1e98 //Already in other module.. 
			//0x1ea8 //Already in other module.. 
			//0x1eb8 //Already in other module.. 
		],
		SceLibFios2:[ 
			//0x22038 //Already in other module.. 
			//0x22048 //Already in other module.. 
			//0x22058 //Already in other module.. 
			//0x22068 //Already in other module.. 
			//0x22078 //Already in other module.. 
			0x22088 ,
			//0x22098 //Already in other module.. ,
			//0x220a8 //Already in other module.. ,
			//0x220b8 //Already in other module.. ,
			0x220c8 ,
			0x220d8 ,
			//0x220e8 //Already in other module.. ,
			//0x220f8 //Already in other module.. ,
			//0x22108 //Already in other module.. 
		],
		SceLibG729:[ 
		],
		SceMsgDialogPlugin:[ 
		],
		SceLibVitaJSExtObj:[ 
		],
		ScePartyMemberListPlugin:[ 
		],
		SceLibRudp:[ 
			//0x116f8 //Already in other module.. 
			//0x11708 //Already in other module.. 
			//0x11718 //Already in other module.. 
			//0x11728 //Already in other module.. 
			//0x11738 //Already in other module.. 
			//0x11748 //Already in other module.. 
			//0x11758 //Already in other module.. 
			//0x11768 //Already in other module.. 
			//0x11778 //Already in other module.. 
		],
		SceNpActivityNet:[ 
		],


		SceMp4:[ 
			//0xe810 //Already in other module.. 
			//0xe820 //Already in other module.. 
			//0xe830 //Already in other module.. 
			//0xe840 //Already in other module.. 
			//0xe850 //Already in other module.. 
			//0xe860 //Already in other module.. 
			//0xe870 //Already in other module.. 
			//0xe880 //Already in other module.. 
		],
		SceAppUtil:[ 
			//0x7690 //Already in other module.. 
			//0x76a0 //Already in other module.. 
			//0x76b0 //Already in other module.. 
			0x7990 ,
			0x79a0 ,
			//0x79b0 //Already in other module.. ,
			0x79c0 ,
			0x79d0 ,
			//0x7b70 //Already in other module.. ,
			//0x7b80 //Already in other module.. ,
			//0x7b90 //Already in other module.. ,
			//0x7ba0 //Already in other module.. ,
			//0x7bb0 //Already in other module.. ,
			//0x7bc0 //Already in other module.. ,
			//0x7bd0 //Already in other module.. ,
			//0x7be0 //Already in other module.. ,
			//0x7bf0 //Already in other module.. 
		],
		SceLibPgf:[ 
			//0x62cc //Already in other module.. 
			//0x62dc //Already in other module.. 
		],
		ScePhotoExport:[ 
			//0x3038 //Already in other module.. 
			//0x3048 //Already in other module.. 
			//0x3058 //Already in other module.. 
			//0x3068 //Already in other module.. 
			//0x3078 //Already in other module.. 
			//0x3088 //Already in other module.. 
			//0x3098 //Already in other module.. 
			//0x30a8 //Already in other module.. 
			//0x30b8 //Already in other module.. 
			//0x30c8 //Already in other module.. 
		],
		SceNet:[ 
			0x9a74 ,
			0x9a84 ,
			0x9a94 ,
			0x9aa4 ,
			0x9ab4 ,
			0x9ac4 ,
			0x9ad4 ,
			0x9ae4 ,
			0x9af4 ,
			0x9b04 ,
			0x9b14 ,
			0x9b24 ,
			0x9b34 ,
			0x9b44 ,
			0x9b54 ,
			0x9b64 ,
			0x9b74 ,
			0x9b84 ,
			//0x9b94 , //Infinite loop
			0x9ba4 ,
			0x9bb4 ,
			0x9bc4 ,
			0x9bd4 ,
			0x9be4 ,
			0x9bf4 ,
			0x9c04 ,
			0x9c14 ,
			0x9c24 ,
			0x9c34 ,
			0x9c44 ,
			0x9c54 ,
			0x9c64 ,
			0x9c74 ,
			0x9c84 ,
			//0x9db4 //Already in other module.. ,
			//0x9dc4 //Already in other module.. ,
			//0x9dd4 //Already in other module.. ,
			//0x9de4 , //Infinite loop ?
			//0x9df4 //Already in other module.. ,
			//0x9e04 //Already in other module.. ,
			//0x9e14 //Already in other module.. ,
			//0x9e24 //Already in other module.. 
		],
		SceAudiocodec:[ 
		],
		SceNearUtil:[ 
			//0x3b58 //Already in other module.. 
			//0x3b68 //Already in other module.. 
			//0x3b78 //Already in other module.. 
		],
		ScePsp2Compat:[ 
			//0x2a0114 //Already in other module.. 
			//0x2a0124 //Already in other module.. 
			//0x2a0134 //Already in other module.. 
			//0x2a03f4 //Already in other module.. 
			//0x2a0404 //Already in other module.. 
			//0x2a0414 //Already in other module.. 
			//0x2a0424 //Already in other module.. 
			//0x2a0434 //Already in other module.. 
			//0x2a0444 //Already in other module.. 
			//0x2a0454 //Already in other module.. 
			//0x2a0464 //Already in other module.. 
			//0x2a0474 //Already in other module.. 
			//0x2a0484 //Already in other module.. 
			//0x2a0494 //Already in other module.. 
			//0x2a04a4 //Already in other module.. 
			//0x2a04b4 //Already in other module.. 
			0x2a04c4 ,
			//0x2a04d4 //Already in other module.. ,
			//0x2a04e4 //Already in other module.. ,
			0x2a04f4 ,
			//0x2a0504 //Already in other module.. ,
			//0x2a0514 //Already in other module.. ,
			0x2a0524 ,
			0x2a0534 ,
			//0x2a0544 //Already in other module.. ,
			0x2a0554 ,
			//0x2a06f4 //Already in other module.. ,
			0x2a0744 
		],
		SceWebKit:[ 
		],
		ScePhotoImportDialogPlugin:[ 
		],



		SceVideoExport:[ 
			//0x1c98 //Already in other module.. 
			//0x1ca8 //Already in other module.. 
			//0x1cb8 //Already in other module.. 
			//0x1cc8 //Already in other module.. 
			//0x1cd8 //Already in other module.. 
			//0x1ce8 //Already in other module.. 
			//0x1cf8 //Already in other module.. 
			//0x1d08 //Already in other module.. 
			//0x1d18 //Already in other module.. 
			//0x1d28 //Already in other module.. 
			//0x1d38 //Already in other module.. 
			//0x1d68 //Already in other module.. 
		],
		SceJpegArm:[ 
		],
		SceDbrecoveryUtility:[ 
		],
		SceNpScore:[ 
			//0x39dc //Already in other module.. 
			//0x39ec //Already in other module.. 
			//0x39fc //Already in other module.. 
			//0x3a0c //Already in other module.. 
			//0x3a1c //Already in other module.. 
			//0x3a2c //Already in other module.. 
			//0x3a3c //Already in other module.. 
			//0x3a4c //Already in other module.. 
			//0x3a5c //Already in other module.. 
			//0x3a6c //Already in other module.. 
		],
		SceNpSignaling:[ 
			//0x8a80 //Already in other module.. 
			//0x8a90 //Already in other module.. 
			//0x8aa0 //Already in other module.. 
			//0x8ab0 //Already in other module.. 
			//0x8ac0 //Already in other module.. 
			//0x8ad0 //Already in other module.. 
			//0x8cf0 //Already in other module.. 
			//0x8d00 //Already in other module.. 
		],
		SceNpPartyGameUtil:[ 
			//0xc5c //Already in other module.. 
			//0xc6c //Already in other module.. 
			//0xc7c //Already in other module.. 
		],
		SceAvPlayer:[ 
			//0xfb40 //Already in other module.. 
			//0xfb50 //Already in other module.. 
			//0xfb60 //Already in other module.. 
			//0xfe70 //Already in other module.. 
			//0xfe80 //Already in other module.. 
			//0xfe90 //Already in other module.. 
			//0xfea0 //Already in other module.. 
			//0xfeb0 //Already in other module.. 
			//0xfec0 //Already in other module.. 
			//0xfed0 //Already in other module.. 
			//0xfee0 //Already in other module.. 
		],
		SceLibc:[ 
			//0x3b288 //Already in other module.. 
			//0x3b298 //Already in other module.. 
			0x3b2a8 ,
			//0x3b2b8 //Already in other module.. ,
			0x3b2c8 ,
			0x3b2d8 ,
			0x3b2e8 ,
			0x3b2f8 ,
			0x3b308 ,
			//0x3b318 //Already in other module.. ,
			//0x3b328 //Already in other module.. ,
			0x3b338 ,
			0x3b348 ,
			//0x3b358 //Already in other module.. ,
			//0x3b368 //Already in other module.. ,
			//0x3b378 //Already in other module.. ,
			//0x3b388 //Already in other module.. ,
			//0x3b398 //Already in other module.. ,
			//0x3b3a8 //Already in other module.. ,
			//0x3b3b8 //Already in other module.. ,
			//0x3b3c8 //Already in other module.. 
		],
		SceNpMatching2:[ 
			//0x2d494 //Already in other module.. 
			//0x2d4a4 //Already in other module.. 
			//0x2d4b4 //Already in other module.. 
			//0x2d4c4 //Already in other module.. 
			//0x2d4d4 //Already in other module.. 
			//0x2d4e4 //Already in other module.. 
			//0x2d4f4 //Already in other module.. 
			//0x2d504 //Already in other module.. 
			//0x2d514 //Already in other module.. 
			//0x2db34 //Already in other module.. 
			//0x2db84 //Already in other module.. 
		],
		SceIme:[ 
			//0x22e8 //Already in other module.. 
			//0x22f8 //Already in other module.. 
			//0x23a8 //Already in other module.. 
			//0x23b8 //Already in other module.. 
			//0x23c8 //Already in other module.. 
			//0x23d8 //Already in other module.. 
		],
		SceNpTus:[ 
			//0x5054 //Already in other module.. 
			//0x5064 //Already in other module.. 
			//0x5074 //Already in other module.. 
			//0x5084 //Already in other module.. 
			//0x5094 //Already in other module.. 
			//0x50a4 //Already in other module.. 
			//0x50b4 //Already in other module.. 
			//0x50c4 //Already in other module.. 
			//0x50d4 //Already in other module.. 
			//0x50e4 //Already in other module.. 
		],
		SceAvcodecUser:[ 
			0x59c ,
			0x5ac ,
			0x5bc ,
			0x5cc ,
			0x5dc ,
			0x5ec ,
			0x5fc ,
			0x60c ,
			0x61c ,
			0x62c ,
			0x63c ,
			0x64c ,
			0x65c ,
			0x66c ,
			0x67c ,
			0x68c ,
			0x69c ,
			0x6ac ,
			0x6bc ,
			0x6cc ,
			0x6dc ,
			0x6ec ,
			0x6fc ,
			0x70c ,
			0x71c ,
			0x72c ,
			0x73c ,
			0x74c ,
			0x75c ,
			0x76c ,
			0x77c ,
			0x78c ,
			0x79c ,
			0x7ac ,
			0x7bc ,
			0x7cc ,
			0x7dc ,
			0x7ec ,
			0x7fc ,
			0x80c ,
			0x81c ,
			0x82c ,
			0x83c ,
			0x84c ,
			0x85c ,
			0x86c ,
			0x87c ,
			0x88c ,
			0x89c ,
			0x8ac ,
			0x8bc ,
			0x8cc ,
			0x8dc ,
			0x8ec ,
			0x8fc ,
			0x90c ,
			0x91c ,
			0x92c ,
			0x93c ,
			0x94c ,
			0x95c ,
			0x96c ,
			0x97c ,
			0x98c ,
			0x99c ,
			0x9ac ,
			0x9bc ,
			0x9cc ,
			0x9dc ,
			0x9ec ,
			//0x9fc , //Crash(user, user, *, *) //TODO
			0xa0c ,
			0xa1c ,
			0xa2c ,
			0xa3c ,
			0xa4c ,
			0xa5c ,
			0xa6c ,
			0xa7c ,
			0xa8c ,
			0xa9c ,
			0xaac ,
			0xabc ,
			0xacc ,
			0xadc ,
			0xaec ,
			0xafc ,
			0xb0c ,
			0xb1c ,
			0xb2c ,
			0xb3c ,
			0xb4c ,
			0xb5c ,
			0xb6c ,
			0xb7c ,
			0xb8c ,
			0xb9c ,
			0xbac ,
			0xbbc ,
			0xbcc ,
			0xbdc ,
			0xbec ,
			0xbfc ,
			0xc0c ,
			0xc1c ,
			0xc2c ,
			0xc3c ,
			0xc4c ,
			0xc5c ,
			0xc6c ,
			0xc7c ,
			0xc8c ,
			0xc9c ,
			//0xcac , //Crash  ( user, user2, user3 ) => Panic() on 3 user land ptr ?
			0xcbc ,
			0xccc ,
			0xcdc ,
			0xcec ,
			0xcfc ,
			0xd0c ,
			0xd1c ,
			0xd2c ,
			0xd3c ,
			0xd4c ,
			0xd5c ,
			0xd6c ,
			0xd7c ,
			0xd8c ,
			0xd9c ,
			0xdac ,
			0xdbc ,
			0xdcc ,
			0xddc ,
			0xdec ,
			0xdfc ,
			0xe0c ,
			0xe1c ,
			0xe2c 
		],
		SceFiber:[ 
			//0x12fc , //Crash ( 0x0, 0x78f7d, 0x829d3cb0, 0x829d3cb0 ) 
			0x130c 
		],
		SceBemp2sys:[ 
			//0xdbb8 //Already in other module.. 
			//0xdbc8 //Already in other module.. 
			//0xdbd8 //Already in other module.. 
			//0xdbe8 //Already in other module.. 
			//0xdbf8 //Already in other module.. 
		]
	};
	return tmp;
}