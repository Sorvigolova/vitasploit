/*
	Syscall map for firmware 2.05
*/

function syscallOffsets()
{
	var tmp = { 
		SceNpTrophy:[ 
			0x107fc ,
			0x1080c ,
			0x1081c ,
			0x1082c ,
			0x108cc 
		],
		SceLibPgf:[ 
			0x6fe8 ,
			0x6ff8 
		],
		SceJpegArm:[ 
		],
		SceVoiceQoS:[ 
			//0x3618 //Already in other module.. 
			//0x3628 //Already in other module.. 
			0x3638 
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
			0x1da4 ,
			0x1db4 ,
			0x1dc4 ,
			0x1dd4 ,
			0x1de4 
		],
		SceCommonGuiDialog:[ 
		],
		SceLibPspnetAdhoc:[ 
			0x7bf4 ,
			0x7c04 ,
			0x7c14 ,
			0x7c24 ,
			0x7c34 ,
			0x7c44 ,
			0x7c54 ,
			0x7c64 ,
			0x7c74 ,
			0x7c84 ,
			0x7e34 ,
			0x7e54 
		],
		SceLibKernel:[ 
			0x946c ,
			//0x947c //Already in other module.. ,
			//0x948c //Already in other module.. ,
			//0x949c //Already in other module.. ,
			0x94ac ,
			0x94bc ,
			0x94cc ,
			0x94dc ,
			0x94ec ,
			0x94fc ,
			0x950c ,
			0x951c ,
			0x952c ,
			0x953c ,
			0x954c ,
			0x955c ,
			//0x956c //Already in other module.. ,
			0x957c ,
			0x958c ,
			0x959c ,
			0x95ac ,
			0x95bc ,
			0x95cc ,
			0x95dc ,
			0x95ec ,
			0x95fc ,
			0x960c ,
			0x961c ,
			0x962c ,
			0x963c ,
			0x964c ,
			0x965c ,
			0x966c ,
			0x967c ,
			0x968c ,
			0x969c ,
			0x96ac ,
			0x96bc ,
			0x96cc ,
			0x96dc ,
			0x96ec ,
			0x96fc ,
			0x970c ,
			0x971c ,
			0x972c ,
			0x973c ,
			0x974c ,
			0x975c ,
			0x976c ,
			0x977c ,
			0x978c ,
			0x979c ,
			0x97ac ,
			0x97bc ,
			0x97cc ,
			0x97dc ,
			0x97ec ,
			0x97fc ,
			0x980c ,
			0x981c ,
			0x982c ,
			0x983c ,
			0x984c ,
			0x985c ,
			0x986c ,
			0x987c ,
			0x988c ,
			0x989c ,
			//0x98ac //Already in other module.. ,
			0x98bc ,
			0x98cc ,
			0x98dc ,
			0x98ec ,
			0x98fc ,
			0x990c ,
			0x991c ,
			0x992c ,
			0x993c ,
			0x994c ,
			0x995c ,
			0x996c ,
			0x997c ,
			0x998c ,
			0x999c ,
			0x99ac ,
			0x99bc ,
			0x99cc ,
			0x99dc ,
			0x99ec ,
			0x99fc ,
			0x9a0c ,
			0x9a1c ,
			0x9a2c ,
			0x9a3c ,
			0x9a4c ,
			0x9a5c ,
			0x9a6c ,
			0x9a7c ,
			0x9a8c ,
			0x9a9c ,
			0x9aac ,
			0x9abc ,
			//0x9acc //Already in other module.. ,
			0x9adc ,
			0x9aec ,
			0x9afc ,
			0x9b0c ,
			0x9b1c ,
			0x9b2c ,
			0x9b3c ,
			0x9b4c ,
			0x9b5c ,
			0x9b6c ,
			0x9b7c ,
			0x9b8c ,
			0x9b9c ,
			0x9bac ,
			0x9bbc ,
			0x9bcc ,
			0x9bdc ,
			0x9bec ,
			0x9bfc ,
			0x9c0c ,
			0x9c1c ,
			0x9c2c ,
			0x9c3c ,
			0x9c4c ,
			0x9c5c ,
			0x9c6c ,
			0x9c7c ,
			0x9c8c ,
			0x9c9c ,
			0x9cac ,
			0x9cbc ,
			0x9ccc ,
			0x9cdc ,
			0x9cec ,
			0x9cfc ,
			0x9d0c ,
			0x9d1c ,
			0x9d2c ,
			0x9d3c ,
			0x9d4c ,
			0x9d5c ,
			0x9d6c ,
			//0x9d7c //Already in other module.. ,
			0x9d8c ,
			0x9d9c ,
			0x9dac ,
			0x9dbc ,
			0x9dcc ,
			0x9ddc ,
			0x9dec ,
			0x9dfc ,
			//0x9e0c //Already in other module.. ,
			0x9e1c ,
			0x9e2c ,
			0x9e3c ,
			0x9e4c ,
			0x9e5c ,
			0x9e6c ,
			0x9e7c ,
			0x9e8c ,
			0x9e9c ,
			0x9eac ,
			0x9ebc ,
			0x9ecc ,
			0x9edc ,
			0x9eec ,
			0x9efc ,
			0x9f0c ,
			0x9f1c ,
			0x9f2c ,
			0x9f3c ,
			0x9f4c ,
			0x9f5c ,
			0x9f6c ,
			0x9f7c ,
			0x9f8c ,
			0x9f9c ,
			0x9fac ,
			0x9fbc ,
			0x9fcc ,
			0x9fdc ,
			0x9fec ,
			0x9ffc ,
			0xa00c ,
			0xa01c ,
			0xa02c ,
			0xa03c ,
			0xa04c ,
			0xa05c ,
			0xa06c 
		],
		ScePsp2Compat:[ 
			0x2907a4 ,
			0x2907b4 ,
			0x2907c4 ,
			//0x290a84 //Already in other module.. ,
			0x290a94 ,
			//0x290aa4 //Already in other module.. ,
			//0x290ab4 //Already in other module.. ,
			0x290ac4 ,
			0x290ad4 ,
			//0x290ae4 //Already in other module.. ,
			0x290af4 ,
			//0x290b04 //Already in other module.. ,
			//0x290b14 //Already in other module.. ,
			0x290b24 ,
			0x290b34 ,
			//0x290b44 //Already in other module.. ,
			0x290b54 ,
			0x290b64 ,
			0x290b74 ,
			0x290b84 ,
			//0x290b94 //Already in other module.. ,
			//0x290ba4 //Already in other module.. ,
			0x290bb4 ,
			0x290bc4 ,
			//0x290bd4 //Already in other module.. ,
			0x290be4 ,
			0x290d64 ,
			0x290db4 ,
			0x290dc4 ,
			0x290dd4 
		],
		SceLibNetCtl:[ 
			//0x5a94 //Already in other module.. 
			//0x5aa4 //Already in other module.. 
			//0x5ab4 //Already in other module.. 
			//0x5ac4 //Already in other module.. 
			//0x5ad4 //Already in other module.. 
			//0x5ae4 //Already in other module.. 
			//0x5af4 //Already in other module.. 
			//0x5b04 //Already in other module.. 
			//0x5b14 //Already in other module.. 
			//0x5b24 //Already in other module.. 
			0x5b44 ,
			0x5b54 ,
			0x5b64 ,
			0x5b74 
		],
		SceGpuEs4User:[ 
			0x1ca4 ,
			0x1cb4 ,
			0x1cc4 ,
			//0x1d74 //Already in other module.. ,
			//0x1d84 //Already in other module.. ,
			//0x1d94 //Already in other module.. ,
			//0x1da4 //Already in other module.. 
		],
		SceBeisobmf:[ 
		],
		SceLibLocation:[ 
			//0x25ac //Already in other module.. 
			//0x25bc //Already in other module.. 
			//0x25cc //Already in other module.. 
			//0x25dc //Already in other module.. 
			//0x25ec //Already in other module.. 
		],
		SceLibG729:[ 
		],
		SceNpFriendPrivacyLevel:[ 
			//0x6b1c //Already in other module.. 
			//0x6b2c //Already in other module.. 
			//0x6b3c //Already in other module.. 
		],
		SceLibLocationExtension:[ 
		],
		SceNpManager:[ 
			//0x4fac //Already in other module.. 
			//0x4fbc //Already in other module.. 
			//0x4fcc //Already in other module.. 
			0x4fdc ,
			//0x4fec //Already in other module.. ,
			0x4ffc ,
			//0x500c //Already in other module.. ,
			0x51bc 
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
			0xa95c ,
			0xa96c ,
			0xa97c ,
			0xa98c ,
			0xa99c ,
			//0xa9ac //Already in other module.. 
		],
		SceNpActivityNet:[ 
		],
		SceLibSsl:[ 
			//0x474f4 //Already in other module.. 
			//0x47504 //Already in other module.. 
			//0x47514 //Already in other module.. 
			//0x47524 //Already in other module.. 
			//0x47534 //Already in other module.. 
			//0x47544 //Already in other module.. 
		],
		SceNetAdhocMatching:[ 
			//0x3404 //Already in other module.. 
			//0x3414 //Already in other module.. 
			//0x3544 //Already in other module.. 
			//0x3554 //Already in other module.. 
			//0x3564 //Already in other module.. 
			//0x3574 //Already in other module.. 
			//0x3584 //Already in other module.. 
			//0x3594 //Already in other module.. 
		],
		SceNpMatching2:[ 
			//0x2dd84 //Already in other module.. 
			//0x2dd94 //Already in other module.. 
			//0x2dda4 //Already in other module.. 
			//0x2ddb4 //Already in other module.. 
			//0x2ddc4 //Already in other module.. 
			//0x2ddd4 //Already in other module.. 
			//0x2dde4 //Already in other module.. 
			//0x2ddf4 //Already in other module.. 
			//0x2de04 //Already in other module.. 
			//0x2de14 //Already in other module.. 
			//0x2e414 //Already in other module.. 
			0x2e424 
		],
		SceNpScore:[ 
			//0x3920 //Already in other module.. 
			//0x3930 //Already in other module.. 
			//0x3940 //Already in other module.. 
			//0x3950 //Already in other module.. 
			0x3960 ,
			0x3970 ,
			//0x3980 //Already in other module.. ,
			0x3990 ,
			//0x39a0 //Already in other module.. ,
			//0x39b0 //Already in other module.. 
		],
		SceActivityDb:[ 
		],
		SceNpBasic:[ 
			//0x43b4 //Already in other module.. 
			//0x43c4 //Already in other module.. 
			//0x43d4 //Already in other module.. 
			//0x43e4 //Already in other module.. 
			0x43f4 ,
			0x4404 ,
			//0x4414 //Already in other module.. 
		],
		SceLibFios2:[ 
			0x1ca74 ,
			//0x1ca84 //Already in other module.. ,
			//0x1ca94 //Already in other module.. ,
			//0x1caa4 //Already in other module.. ,
			//0x1cab4 //Already in other module.. ,
			//0x1cac4 //Already in other module.. ,
			//0x1cad4 //Already in other module.. ,
			//0x1cae4 //Already in other module.. ,
			0x1caf4 ,
			0x1cb04 ,
			//0x1cb14 //Already in other module.. ,
			//0x1cb24 //Already in other module.. ,
			0x1cb34 
		],
		SceNpCommerce2:[ 
			//0x20c84 //Already in other module.. 
			//0x20c94 //Already in other module.. 
			//0x20ca4 //Already in other module.. 
			//0x20cb4 //Already in other module.. 
			//0x20cc4 //Already in other module.. 
			//0x20cd4 //Already in other module.. 
		],
		SceSqlite:[ 
			//0x5ac7c //Already in other module.. 
			//0x5ac8c //Already in other module.. 
			//0x5ac9c //Already in other module.. 
		],
		SceLibRudp:[ 
			//0x11abc //Already in other module.. 
			//0x11acc //Already in other module.. 
			//0x11adc //Already in other module.. 
			//0x11aec //Already in other module.. 
			0x11afc ,
			//0x11b0c //Already in other module.. ,
			//0x11b1c //Already in other module.. ,
			//0x11b2c //Already in other module.. ,
			//0x11b3c //Already in other module.. 
		],
		SceLibDbg:[ 
		],
		SceDbutil:[ 
			//0x10828 //Already in other module.. 
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
		SceClipboard:[ 
		],
		SceIme:[ 
			//0x2080 //Already in other module.. 
			//0x2120 //Already in other module.. 
			//0x2130 //Already in other module.. 
			0x2140 ,
			0x2150 
		],
		SceLibXml:[ 
			//0xc888 //Already in other module.. 
			//0xc898 //Already in other module.. 
			//0xc8a8 //Already in other module.. 
		],
		SceNpTus:[ 
			//0x4c84 //Already in other module.. 
			//0x4c94 //Already in other module.. 
			//0x4ca4 //Already in other module.. 
			//0x4cb4 //Already in other module.. 
			//0x4cc4 //Already in other module.. 
			//0x4cd4 //Already in other module.. 
			//0x4ce4 //Already in other module.. 
			//0x4cf4 //Already in other module.. 
			//0x4d04 //Already in other module.. 
			//0x4d14 //Already in other module.. 
		],
		ScePaf:[ 
			0x2cdb74 ,
			0x2cdb84 ,
			0x2cdb94 ,
			//0x2cdba4 //Already in other module.. ,
			0x2cdd54 ,
			0x2cdd64 ,
			0x2cdd74 ,
			0x2cdd84 ,
			0x2cdd94 ,
			0x2cdda4 ,
			0x2cddb4 ,
			0x2cddc4 ,
			0x2cddd4 ,
			0x2cdde4 ,
			0x2cddf4 ,
			0x2cde04 ,
			0x2cdeb4 ,
			0x2cdec4 ,
			0x2cded4 ,
			//0x2ce0c4 //Already in other module.. ,
			//0x2ce0d4 //Already in other module.. ,
			0x2ce0e4 ,
			0x2ce0f4 ,
			0x2ce104 ,
			0x2ce114 ,
			0x2ce124 ,
			0x2ce134 ,
			0x2ce144 ,
			0x2ce154 ,
			0x2ce164 ,
			0x2ce174 ,
			0x2ce184 ,
			0x2ce194 ,
			0x2ce1a4 ,
			0x2ce1b4 ,
			0x2ce1c4 ,
			0x2ce7e4 ,
			0x2ce7f4 ,
			0x2ce804 ,
			0x2ce814 ,
			0x2ce824 ,
			//0x2ce834 //Already in other module.. ,
			//0x2cebc4 //Already in other module.. ,
			0x2cebd4 ,
			//0x2cebe4 //Already in other module.. ,
			//0x2cebf4 //Already in other module.. ,
			0x2cec04 ,
			0x2cec14 ,
			0x2cec24 ,
			0x2cec34 ,
			//0x2cec44 //Already in other module.. ,
			0x2cec54 ,
			0x2cec64 ,
			0x2cec74 ,
			//0x2cec84 //Already in other module.. ,
			//0x2cec94 //Already in other module.. ,
			0x2ceca4 ,
			0x2cecb4 ,
			//0x2cecc4 //Already in other module.. ,
			//0x2cecd4 //Already in other module.. ,
			//0x2cece4 //Already in other module.. ,
			//0x2cecf4 //Already in other module.. ,
			//0x2ced04 //Already in other module.. ,
			//0x2ced14 //Already in other module.. ,
			//0x2ced24 //Already in other module.. ,
			//0x2ced34 //Already in other module.. ,
			//0x2ced44 //Already in other module.. ,
			//0x2ced54 //Already in other module.. ,
			//0x2ced64 //Already in other module.. ,
			//0x2ced74 //Already in other module.. ,
			//0x2ced84 //Already in other module.. ,
			0x2ced94 ,
			//0x2ceda4 //Already in other module.. ,
			//0x2cedb4 //Already in other module.. ,
			//0x2cedc4 //Already in other module.. ,
			//0x2cedd4 //Already in other module.. ,
			//0x2cede4 //Already in other module.. ,
			0x2cedf4 ,
			//0x2cee04 //Already in other module.. ,
			//0x2cee14 //Already in other module.. ,
			//0x2cee24 //Already in other module.. ,
			0x2cee34 ,
			0x2cee44 ,
			0x2cee54 ,
			0x2cee64 ,
			//0x2ceee4 //Already in other module.. 
		],
		SceLibHttp:[ 
			//0x16740 //Already in other module.. 
			//0x16750 //Already in other module.. 
			//0x16760 //Already in other module.. 
			//0x16770 //Already in other module.. 
			//0x16780 //Already in other module.. 
			//0x16790 //Already in other module.. 
			//0x167b0 //Already in other module.. 
			//0x167c0 //Already in other module.. 
			//0x167d0 //Already in other module.. 
		],
		SceNearUtil:[ 
			0x3408 ,
			//0x3418 //Already in other module.. ,
			//0x3428 //Already in other module.. 
		],
		SceAppUtil:[ 
			//0x7558 //Already in other module.. 
			//0x7568 //Already in other module.. 
			//0x7578 //Already in other module.. 
			//0x7818 //Already in other module.. 
			//0x7828 //Already in other module.. 
			//0x7838 //Already in other module.. 
			//0x79d8 //Already in other module.. 
			//0x79e8 //Already in other module.. 
			//0x79f8 //Already in other module.. 
			//0x7a08 //Already in other module.. 
			//0x7a18 //Already in other module.. 
			//0x7a28 //Already in other module.. 
			//0x7a38 //Already in other module.. 
			//0x7a48 //Already in other module.. 
			//0x7a58 //Already in other module.. 
		],
		SceNgsUser:[ 
			//0x9aa4 //Already in other module.. 
			//0x9ab4 //Already in other module.. 
			0x9b74 ,
			0x9b84 ,
			0x9b94 ,
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
			0x9c94 ,
			0x9ca4 ,
			0x9cb4 ,
			0x9cc4 ,
			0x9cd4 ,
			0x9ce4 ,
			0x9cf4 ,
			0x9d04 ,
			0x9d14 ,
			0x9d24 ,
			0x9d34 ,
			0x9d44 ,
			0x9d54 ,
			0x9d64 ,
			0x9d74 ,
			0x9d84 ,
			0x9d94 ,
			0x9da4 ,
			0x9db4 ,
			0x9dc4 ,
			0x9dd4 ,
			0x9de4 ,
			0x9df4 ,
			0x9e04 ,
			0x9e14 ,
			0x9e24 ,
			0x9e34 ,
			0x9e44 ,
			0x9e54 ,
			0x9e64 ,
			0x9e74 ,
			0x9e84 ,
			0x9e94 ,
			0x9ea4 ,
			0x9eb4 ,
			0x9ec4 ,
			0x9ed4 ,
			0x9ee4 ,
			0x9ef4 ,
			0x9f04 ,
			0x9f14 
		],
		ScePhotoExport:[ 
			//0x2fe0 //Already in other module.. 
			//0x2ff0 //Already in other module.. 
			//0x3000 //Already in other module.. 
			//0x3010 //Already in other module.. 
			//0x3020 //Already in other module.. 
			//0x3030 //Already in other module.. 
			//0x3040 //Already in other module.. 
			//0x3050 //Already in other module.. 
			//0x3060 //Already in other module.. 
			//0x3070 //Already in other module.. 
		],
		SceNpCommon:[ 
			//0x5114 //Already in other module.. 
			//0x5124 //Already in other module.. 
			//0x5134 //Already in other module.. 
			//0x5144 //Already in other module.. 
			//0x5154 //Already in other module.. 
			//0x5164 //Already in other module.. 
			//0x5174 //Already in other module.. 
			//0x5184 //Already in other module.. 
			0x51c4 ,
			0x51d4 ,
			0x51e4 ,
			0x51f4 ,
			0x5204 
		],
		SceSystemGesture:[ 
			//0x28a8 //Already in other module.. 
			//0x28b8 //Already in other module.. 
		],
		SceNpUtility:[ 
			//0x9bac //Already in other module.. 
			//0x9bbc //Already in other module.. 
			//0x9bcc //Already in other module.. 
			//0x9bdc //Already in other module.. 
			//0x9bec //Already in other module.. 
			//0x9bfc //Already in other module.. 
			//0x9c0c //Already in other module.. 
			//0x9c1c //Already in other module.. 
			//0x9c2c //Already in other module.. 
			//0x9c3c //Already in other module.. 
		],
		SceNpKdc:[ 
			0x1b64 ,
			0x1b74 ,
			0x1b84 ,
			0x1b94 ,
			0x1ba4 ,
			0x1bb4 ,
			0x1bc4 ,
			0x1bd4 
		],
		SceMp4:[ 
			//0xe530 //Already in other module.. 
			//0xe540 //Already in other module.. 
			//0xe550 //Already in other module.. 
			//0xe560 //Already in other module.. 
			//0xe570 //Already in other module.. 
			//0xe580 //Already in other module.. 
			//0xe590 //Already in other module.. 
			//0xe5a0 //Already in other module.. 
		],
		SceBemp2sys:[ 
			//0xe280 //Already in other module.. 
			//0xe290 //Already in other module.. 
			//0xe2a0 //Already in other module.. 
			//0xe2b0 //Already in other module.. 
			//0xe2c0 //Already in other module.. 
		],
		SceNpSnsFacebook:[ 
			//0x3994 //Already in other module.. 
			//0x39a4 //Already in other module.. 
			//0x39b4 //Already in other module.. 
			//0x39c4 //Already in other module.. 
		],
		SceNotificationUtil:[ 
		],
		SceWebFiltering:[ 
			//0x430c //Already in other module.. 
			0x431c ,
			0x432c ,
			0x433c 
		],
		SceWebKit:[ 
		],
		SceNpSignaling:[ 
			//0x8514 //Already in other module.. 
			//0x8524 //Already in other module.. 
			//0x8534 //Already in other module.. 
			//0x8544 //Already in other module.. 
			//0x8554 //Already in other module.. 
			//0x8564 //Already in other module.. 
			//0x8784 //Already in other module.. 
			//0x8794 //Already in other module.. 
		],
		SceShellSvc:[ 
			0xeea8 ,
			0xeeb8 ,
			0xeec8 ,
			0xeed8 ,
			0xeee8 ,
			//0xeef8 //Already in other module.. ,
			//0xef08 //Already in other module.. ,
			//0xef18 //Already in other module.. ,
			//0xef28 //Already in other module.. ,
			//0xef38 //Already in other module.. ,
			//0xef48 //Already in other module.. ,
			//0xef58 //Already in other module.. ,
			//0xef68 //Already in other module.. ,
			//0xef78 //Already in other module.. ,
			//0xef88 //Already in other module.. ,
			//0xef98 //Already in other module.. ,
			0xefa8 ,
			//0xefb8 //Already in other module.. ,
			//0xefc8 //Already in other module.. ,
			//0xefd8 //Already in other module.. ,
			//0xefe8 //Already in other module.. ,
			0xeff8 ,
			//0xf008 //Already in other module.. ,
			//0xf018 //Already in other module.. ,
			//0xf028 //Already in other module.. ,
			0xf038 ,
			//0xf048 //Already in other module.. ,
			//0xf058 //Already in other module.. ,
			//0xf068 //Already in other module.. ,
			//0xf078 //Already in other module.. ,
			//0xf088 //Already in other module.. ,
			//0xf098 //Already in other module.. ,
			0xf0b8 
		],
		SceAudiocodec:[ 
		],
		SceLibft2:[ 
			//0xee04 //Already in other module.. 
			//0xee14 //Already in other module.. 
		],
		SceHafnium:[ 
			//0x41998 //Already in other module.. 
			//0x419a8 //Already in other module.. 
			//0x419b8 //Already in other module.. 
		],
		SceScreenShot:[ 
			//0x1da8 //Already in other module.. 
			//0x1db8 //Already in other module.. 
			//0x1dc8 //Already in other module.. 
			//0x1dd8 //Already in other module.. 
			//0x1de8 //Already in other module.. 
			//0x1df8 //Already in other module.. 
		],
		SceLibc:[ 
			//0x36d30 //Already in other module.. 
			//0x36d40 //Already in other module.. 
			0x36d50 ,
			//0x36d60 //Already in other module.. ,
			0x36d70 ,
			0x36d80 ,
			0x36d90 ,
			0x36da0 ,
			0x36db0 ,
			//0x36dc0 //Already in other module.. ,
			//0x36dd0 //Already in other module.. ,
			0x36de0 ,
			0x36df0 ,
			//0x36e00 //Already in other module.. ,
			//0x36e10 //Already in other module.. ,
			//0x36e20 //Already in other module.. ,
			//0x36e30 //Already in other module.. ,
			//0x36e40 //Already in other module.. ,
			//0x36e50 //Already in other module.. ,
			//0x36e60 //Already in other module.. ,
			//0x36e70 //Already in other module.. 
		],
		SceNearProfile:[ 
			0x90ac ,
			//0x90bc //Already in other module.. ,
			//0x90cc //Already in other module.. ,
			//0x961c //Already in other module.. ,
			0x962c ,
			0x963c ,
			0x964c ,
			//0x97bc //Already in other module.. ,
			//0x97cc //Already in other module.. ,
			//0x97dc //Already in other module.. ,
			//0x97ec //Already in other module.. ,
			//0x97fc //Already in other module.. ,
			//0x980c //Already in other module.. ,
			//0x981c //Already in other module.. 
		],
		SceWebKitProcess:[ 
			//0x13154 //Already in other module.. 
			//0x13164 //Already in other module.. 
			//0x13174 //Already in other module.. 
			//0x13184 //Already in other module.. 
			//0x13194 //Already in other module.. 
			//0x131a4 //Already in other module.. 
			//0x131b4 //Already in other module.. 
			//0x131c4 //Already in other module.. 
			//0x131d4 //Already in other module.. 
			//0x131e4 //Already in other module.. 
			//0x131f4 //Already in other module.. 
			//0x13204 //Already in other module.. 
			//0x13234 //Already in other module.. 
			//0x13284 //Already in other module.. 
			//0x13294 //Already in other module.. 
			//0x132a4 //Already in other module.. 
			//0x132b4 //Already in other module.. 
			//0x136f4 //Already in other module.. 
			//0x13704 //Already in other module.. 
		],
		SceDbrecoveryUtility:[ 
		],
		ScePromoterUtil:[ 
			//0xdbc //Already in other module.. 
		],
		SceNearDialogUtil:[ 
			0x3c04 ,
			//0x3c14 //Already in other module.. ,
			//0x3c24 //Already in other module.. ,
			//0x3d64 //Already in other module.. ,
			//0x3d74 //Already in other module.. ,
			//0x3d84 //Already in other module.. 
		],
		SceShutterSound:[ 
		],
		SceVoice:[ 
			//0x436c //Already in other module.. 
			//0x437c //Already in other module.. 
			//0x438c //Already in other module.. 
			0x439c ,
			0x43ac ,
			0x43bc ,
			0x43cc ,
			//0x456c //Already in other module.. ,
			//0x457c //Already in other module.. ,
			//0x458c //Already in other module.. ,
			//0x459c //Already in other module.. ,
			//0x45ac //Already in other module.. ,
			//0x45bc //Already in other module.. ,
			//0x45cc //Already in other module.. ,
			//0x45dc //Already in other module.. ,
			//0x45ec //Already in other module.. ,
			//0x45fc //Already in other module.. 
		],
		SceLibVitaJSExtObj:[ 
		],
		SceNpMessage:[ 
			0x68d4c ,
			//0x68ecc //Already in other module.. ,
			//0x6908c //Already in other module.. ,
			//0x6909c //Already in other module.. ,
			//0x690ac //Already in other module.. ,
			//0x690bc //Already in other module.. ,
			//0x690cc //Already in other module.. ,
			//0x690dc //Already in other module.. ,
			//0x690ec //Already in other module.. ,
			//0x690fc //Already in other module.. ,
			//0x6910c //Already in other module.. ,
			//0x6911c //Already in other module.. ,
			//0x6912c //Already in other module.. ,
			//0x6913c //Already in other module.. ,
			//0x6914c //Already in other module.. ,
			//0x6915c //Already in other module.. ,
			//0x6920c //Already in other module.. ,
			//0x6921c //Already in other module.. ,
			//0x6922c //Already in other module.. ,
			//0x6923c //Already in other module.. ,
			//0x6924c //Already in other module.. ,
			//0x6925c //Already in other module.. ,
			//0x6926c //Already in other module.. ,
			//0x6927c //Already in other module.. ,
			//0x6928c //Already in other module.. ,
			//0x6929c //Already in other module.. ,
			//0x692ac //Already in other module.. ,
			//0x692bc //Already in other module.. ,
			0x693ec ,
			//0x693fc //Already in other module.. ,
			//0x6940c //Already in other module.. ,
			//0x6941c //Already in other module.. ,
			//0x6942c //Already in other module.. ,
			//0x6943c //Already in other module.. ,
			//0x6944c //Already in other module.. ,
			//0x6945c //Already in other module.. ,
			//0x6946c //Already in other module.. ,
			//0x6947c //Already in other module.. ,
			//0x6948c //Already in other module.. ,
			//0x6979c //Already in other module.. ,
			0x697ac ,
			0x697bc 
		],
		SceAvPlayer:[ 
			//0xfb00 //Already in other module.. 
			0xfb10 ,
			//0xfb20 //Already in other module.. ,
			//0xfe30 //Already in other module.. ,
			//0xfe40 //Already in other module.. ,
			//0xfe50 //Already in other module.. ,
			//0xfe60 //Already in other module.. ,
			//0xfe70 //Already in other module.. ,
			//0xfe80 //Already in other module.. ,
			//0xfe90 //Already in other module.. ,
			//0xfea0 //Already in other module.. 
		],
		SceIniFileProcessor:[ 
			//0x3700 //Already in other module.. 
			//0x3710 //Already in other module.. 
			//0x3720 //Already in other module.. 
			//0x3730 //Already in other module.. 
			//0x3740 //Already in other module.. 
			//0x3750 //Already in other module.. 
			//0x3760 //Already in other module.. 
		],
		SceUlt:[ 
			//0x10178 //Already in other module.. 
			0x10188 ,
			//0x10198 //Already in other module.. ,
			0x101a8 
		],
		SceFiber:[ 
			0xda8 ,
			0xdb8 
		],
		SceNpPartyGameUtil:[ 
			//0xc40 //Already in other module.. 
			//0xc50 //Already in other module.. 
			//0xc60 //Already in other module.. 
		],
		ScebXCe:[ 
			//0x93d0 //Already in other module.. 
			//0x93e0 //Already in other module.. 
			//0x93f0 //Already in other module.. 
		],
		SceAtrac:[ 
		],
		SceHandwriting:[ 
			//0xa5cc //Already in other module.. 
			//0xa5dc //Already in other module.. 
			//0xa5ec //Already in other module.. 
		],
		SceNpActivity:[ 
			//0x5a0 //Already in other module.. 
		],
		SceCommonDialog:[ 
			//0xc1c0 //Already in other module.. 
			//0xc1d0 //Already in other module.. 
			//0xc1e0 //Already in other module.. 
			0xc1f0 ,
			0xc200 ,
			0xc210 ,
			//0xc220 //Already in other module.. ,
			//0xc230 //Already in other module.. ,
			//0xc240 //Already in other module.. ,
			//0xc250 //Already in other module.. ,
			//0xc260 //Already in other module.. ,
			//0xc270 //Already in other module.. ,
			//0xc280 //Already in other module.. ,
			//0xc290 //Already in other module.. ,
			//0xc2a0 //Already in other module.. ,
			//0xc2b0 //Already in other module.. ,
			//0xc2c0 //Already in other module.. ,
			//0xc2d0 //Already in other module.. ,
			//0xc310 //Already in other module.. ,
			0xc320 ,
			//0xc330 //Already in other module.. ,
			0xc340 ,
			//0xc350 //Already in other module.. ,
			0xc370 ,
			0xc380 
		],
		SceSasUser:[ 
			//0x150b0 //Already in other module.. 
		],
		SceLiveAreaUtil:[ 
			//0xf8c //Already in other module.. 
		],
		SceJpegEncArm:[ 
		],
		SceLibPvf:[ 
			//0x38cc //Already in other module.. 
			//0x38dc //Already in other module.. 
			//0x38ec //Already in other module.. 
			//0x38fc //Already in other module.. 
			//0x390c //Already in other module.. 
			//0x391c //Already in other module.. 
		],
		SceSqliteVsh:[ 
			//0x48948 //Already in other module.. 
			//0x48958 //Already in other module.. 
			//0x48968 //Already in other module.. 
			//0x48978 //Already in other module.. 
			//0x48988 //Already in other module.. 
			//0x48998 //Already in other module.. 
			//0x489a8 //Already in other module.. 
			//0x489b8 //Already in other module.. 
			//0x489c8 //Already in other module.. 
			//0x489d8 //Already in other module.. 
			//0x489e8 //Already in other module.. 
			//0x489f8 //Already in other module.. 
			//0x48a08 //Already in other module.. 
			//0x48a18 //Already in other module.. 
		],
		SceDrmPsmKdc:[ 
			//0x4e4c //Already in other module.. 
			//0x4e5c //Already in other module.. 
			//0x4e6c //Already in other module.. 
			//0x4e7c //Already in other module.. 
			//0x4e8c //Already in other module.. 
			//0x4e9c //Already in other module.. 
			//0x4eac //Already in other module.. 
			0x4f1c ,
			0x4f2c ,
			0x4f3c ,
			0x4f4c ,
			0x4f5c ,
			0x4f6c ,
			0x4f7c 
		],
		SceMusicExport:[ 
			//0x1464 //Already in other module.. 
			//0x1474 //Already in other module.. 
			//0x1484 //Already in other module.. 
			//0x1494 //Already in other module.. 
			//0x14a4 //Already in other module.. 
			//0x14b4 //Already in other module.. 
			//0x14c4 //Already in other module.. 
			//0x14d4 //Already in other module.. 
			//0x14e4 //Already in other module.. 
		],
		SceAvcodecUser:[ 
			0x514 ,
			0x524 ,
			0x534 ,
			0x544 ,
			0x554 ,
			0x564 ,
			0x574 ,
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
			0xc94 
		],
	};
	return tmp;
}