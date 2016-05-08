/*
	Syscall map for firmware 2.12
*/

function syscallOffsets()
{
	var tmp = { 
		SceAppUtil:[ 
			0x765c ,
			0x766c ,
			0x767c ,
			0x792c ,
			0x793c ,
			0x794c ,
			0x7aec ,
			0x7afc ,
			0x7b0c ,
			0x7b1c ,
			0x7b2c ,
			0x7b3c ,
			0x7b4c ,
			0x7b5c ,
			0x7b6c 
		],
		SceCommonDialog:[ 
			0xc6fc ,
			0xc70c ,
			0xc71c ,
			0xc72c ,
			0xc73c ,
			0xc74c ,
			0xc75c ,
			0xc76c ,
			0xc77c ,
			0xc78c ,
			0xc83c ,
			0xc84c ,
			0xc85c ,
			//0xc86c //Already in other module.. ,
			0xc87c ,
			0xc88c ,
			0xc89c ,
			0xc8ac ,
			0xc8bc ,
			0xc90c ,
			0xc91c ,
			0xc92c ,
			0xc93c ,
			0xc94c ,
			//0xc96c //Already in other module.. ,
			0xc97c ,
			0xc98c 
		],
		SceDriverUser:[ 
			//0x12c4 //Already in other module.. 
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
			0x1914 ,
			0x1924 ,
			0x1934 ,
			0x1944 ,
			0x1954 ,
			0x1964 ,
			0x1974 ,
			0x1984 ,
			0x1994 ,
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
			0x1a84 ,
			0x1a94 ,
			0x1aa4 ,
			0x1ab4 ,
			0x1ac4 ,
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
			0x1c54 ,
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
			0x1da4 
		],
		SceGxm:[ 
			0x550 ,
			//0x560 //Already in other module.. ,
			//0x570 //Already in other module.. ,
			//0x580 //Already in other module.. ,
			0x590 ,
			//0x5a0 //Already in other module.. ,
			0x5b0 ,
			0x5c0 ,
			0x5e0 ,
			//0x5f0 //Already in other module.. ,
			0x600 
		],
		SceLibc:[ 
			//0x39598 //Already in other module.. 
			//0x395a8 //Already in other module.. 
			0x395b8 ,
			0x395c8 ,
			0x395d8 ,
			0x395e8 ,
			0x395f8 ,
			0x39608 ,
			0x39618 ,
			0x39628 ,
			0x39638 ,
			0x39648 ,
			0x39658 ,
			0x39668 ,
			//0x39678 //Already in other module.. ,
			//0x39688 //Already in other module.. ,
			//0x39698 //Already in other module.. ,
			//0x396a8 //Already in other module.. ,
			0x396b8 ,
			//0x396c8 //Already in other module.. ,
			//0x396d8 //Already in other module.. 
		],
		SceLibKernel:[ 
			//0x3d7c //Already in other module.. 
			//0x3d8c //Already in other module.. 
			//0x3d9c //Already in other module.. 
			//0x3dac //Already in other module.. 
			0x3dbc ,
			0x3dcc ,
			0x3ddc ,
			0x3dec ,
			0x3dfc ,
			0x3e0c ,
			0x3e1c ,
			0x3e2c ,
			0x3e3c ,
			0x3e4c ,
			0x3e5c ,
			0x3e6c ,
			//0x3e7c //Already in other module.. ,
			0x3e8c ,
			//0x3e9c //Already in other module.. ,
			0x3eac ,
			0x3ebc ,
			0x3ecc ,
			0x3edc ,
			0x3eec ,
			0x3efc ,
			0x3f0c ,
			0x3f1c ,
			0x3f2c ,
			0x3f3c ,
			0x3f4c ,
			0x3f5c ,
			0x3f6c ,
			0x3f7c ,
			0x3f8c ,
			0x3f9c ,
			0x3fac ,
			0x3fbc ,
			0x3fcc ,
			0x3fdc ,
			0x3fec ,
			0x3ffc ,
			0x400c ,
			0x401c ,
			0x402c ,
			0x403c ,
			0x404c ,
			0x405c ,
			0x406c ,
			0x407c ,
			0x408c ,
			0x409c ,
			0x40ac ,
			0x40bc ,
			0x40cc ,
			0x40dc ,
			0x40ec ,
			0x40fc ,
			0x410c ,
			0x411c ,
			0x412c ,
			0x413c ,
			0x414c ,
			0x415c ,
			0x416c ,
			0x417c ,
			0x418c ,
			0x419c ,
			0x41ac ,
			//0x41bc //Already in other module.. ,
			0x41cc ,
			0x41dc ,
			0x41ec ,
			0x41fc ,
			0x420c ,
			0x421c ,
			0x422c ,
			0x423c ,
			0x424c ,
			0x425c ,
			0x426c ,
			0x427c ,
			0x428c ,
			0x429c ,
			0x42ac ,
			0x42bc ,
			0x42cc ,
			0x42dc ,
			0x42ec ,
			0x42fc ,
			0x430c ,
			0x431c ,
			0x432c ,
			0x433c ,
			0x434c ,
			0x435c ,
			0x436c ,
			0x437c ,
			0x438c ,
			0x439c ,
			0x43ac ,
			0x43bc ,
			0x43cc ,
			0x43dc ,
			//0x43ec //Already in other module.. ,
			0x43fc ,
			0x440c ,
			0x441c ,
			0x442c ,
			0x443c ,
			0x444c ,
			0x445c ,
			0x446c ,
			0x447c ,
			0x448c ,
			0x449c ,
			0x44ac ,
			//0x44bc //Already in other module.. ,
			0x44cc ,
			0x44dc ,
			0x44ec ,
			0x44fc ,
			0x450c ,
			//0x451c //Already in other module.. ,
			0x452c ,
			0x453c ,
			0x454c ,
			0x455c ,
			0x456c ,
			0x457c ,
			//0x458c //Already in other module.. ,
			0x459c ,
			0x45ac ,
			0x45bc ,
			0x45cc ,
			0x45dc ,
			0x45ec ,
			0x45fc ,
			0x460c ,
			0x461c ,
			0x462c ,
			0x463c ,
			0x464c ,
			0x465c ,
			0x466c ,
			0x467c ,
			0x468c ,
			0x469c ,
			0x46ac ,
			//0x46bc //Already in other module.. ,
			0x46cc ,
			0x46dc ,
			0x46ec ,
			0x46fc ,
			0x470c ,
			0x471c ,
			0x472c ,
			0x473c ,
			//0x474c //Already in other module.. ,
			0x475c ,
			0x476c ,
			0x477c ,
			0x478c ,
			0x479c ,
			0x47ac ,
			0x47bc ,
			0x47cc ,
			0x47dc ,
			0x47ec ,
			0x47fc ,
			0x480c ,
			0x481c ,
			0x482c ,
			0x483c ,
			0x484c ,
			0x485c ,
			0x486c ,
			0x487c ,
			0x488c ,
			0x489c ,
			0x48ac ,
			0x48bc ,
			0x48cc ,
			0x48dc ,
			0x48ec ,
			0x48fc ,
			0x490c ,
			0x491c ,
			0x492c ,
			0x493c ,
			0x494c ,
			0x495c ,
			0x496c ,
			0x497c ,
			0x498c ,
			0x499c ,
			0x49ac 
		],
		SceNet:[ 
			0xa5fc ,
			0xa60c ,
			0xa61c ,
			0xa62c ,
			0xa63c ,
			0xa64c ,
			0xa65c ,
			0xa66c ,
			0xa67c ,
			0xa68c ,
			0xa69c ,
			0xa6ac ,
			0xa6bc ,
			0xa6cc ,
			0xa6dc ,
			0xa6ec ,
			0xa6fc ,
			0xa70c ,
			0xa71c ,
			0xa72c ,
			0xa73c ,
			0xa74c ,
			0xa75c ,
			0xa76c ,
			0xa77c ,
			0xa78c ,
			0xa79c ,
			0xa7ac ,
			0xa7bc ,
			0xa7cc ,
			0xa7dc ,
			0xa7ec ,
			0xa7fc ,
			0xa80c ,
			//0xa93c //Already in other module.. ,
			//0xa94c //Already in other module.. ,
			//0xa95c //Already in other module.. ,
			0xa96c ,
			//0xa97c //Already in other module.. ,
			//0xa98c //Already in other module.. ,
			//0xa99c //Already in other module.. ,
			//0xa9ac //Already in other module.. 
		],
		ScePaf:[ 
			0x264bf4 ,
			0x264c04 ,
			0x264c14 ,
			0x264c24 ,
			0x264dc4 ,
			0x264dd4 ,
			//0x264de4 //Already in other module.. ,
			0x264df4 ,
			0x264e04 ,
			0x264e14 ,
			//0x264e24 //Already in other module.. ,
			0x264e34 ,
			//0x264e44 //Already in other module.. ,
			0x264e54 ,
			//0x264e64 //Already in other module.. ,
			0x264e74 ,
			0x264f24 ,
			0x264f34 ,
			0x264f44 ,
			//0x265134 //Already in other module.. ,
			0x265144 ,
			0x265154 ,
			0x265164 ,
			0x265174 ,
			0x265184 ,
			0x265194 ,
			0x2651a4 ,
			0x2651b4 ,
			0x2651c4 ,
			0x2651d4 ,
			0x2651e4 ,
			0x2651f4 ,
			0x265204 ,
			0x265214 ,
			0x265224 ,
			0x265234 ,
			0x265874 ,
			0x265884 ,
			0x265894 ,
			0x2658a4 ,
			0x2658b4 ,
			//0x2658c4 //Already in other module.. ,
			0x265c24 ,
			0x265c34 ,
			//0x265c44 //Already in other module.. ,
			//0x265c54 //Already in other module.. ,
			0x265c64 ,
			0x265c74 ,
			0x265c84 ,
			0x265c94 ,
			//0x265ca4 //Already in other module.. ,
			0x265cb4 ,
			0x265cc4 ,
			0x265cd4 ,
			//0x265ce4 //Already in other module.. ,
			//0x265cf4 //Already in other module.. ,
			0x265d04 ,
			//0x265d14 //Already in other module.. ,
			//0x265d24 //Already in other module.. ,
			0x265d34 ,
			//0x265d44 //Already in other module.. ,
			0x265d54 ,
			//0x265d64 //Already in other module.. ,
			//0x265d74 //Already in other module.. ,
			//0x265d84 //Already in other module.. ,
			//0x265d94 //Already in other module.. ,
			0x265da4 ,
			//0x265db4 //Already in other module.. ,
			//0x265dc4 //Already in other module.. ,
			0x265dd4 ,
			//0x265de4 //Already in other module.. ,
			//0x265df4 //Already in other module.. ,
			//0x265e04 //Already in other module.. ,
			//0x265e14 //Already in other module.. ,
			//0x265e24 //Already in other module.. ,
			0x265e34 ,
			0x265e44 ,
			0x265e54 
		],
		SceWebKit:[ 
		],
		SceWebKitProcess:[ 
			//0x133b0 //Already in other module.. 
			//0x133c0 //Already in other module.. 
			//0x133d0 //Already in other module.. 
			//0x133e0 //Already in other module.. 
			//0x133f0 //Already in other module.. 
			//0x13400 //Already in other module.. 
			0x13410 ,
			0x13420 ,
			//0x13430 //Already in other module.. ,
			0x13440 ,
			0x13450 ,
			//0x13460 //Already in other module.. ,
			0x13470 ,
			0x13480 ,
			0x13490 ,
			0x134d0 ,
			0x13520 ,
			0x13530 ,
			0x13540 ,
			0x13550 ,
			//0x139f0 //Already in other module.. ,
			//0x13a00 //Already in other module.. ,
			0x13a10 ,
			0x13a20 ,
			0x13a30 ,
			0x13a40 
		],
	};
	return tmp;
}