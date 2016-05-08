/* 
 * js-struct.js - Utility to assist in parsing c-style structs from an ArrayBuffer
 */

/*
 * Copyright (c) 2011 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

var nextStructId = 0;

function allocate_struct(structproto)
{   
    var newstruct = structproto.create();
    newstruct.ptr = allocate_memory(newstruct.byteLength);
    
    return newstruct;
}

Struct = Object.create(Object, {
    /**
    * Defines a single byte integer value (byte/char). 
    * @param name Property name
    */
    int8: { 
        value: function(name) { 
            return { name: name, readCode: "v.getInt8(o, true);", setCode: "v.setInt8(o, val, true);", byteLength: 1, defaultValue: 0, structProperty: true }; 
        }
    },
    
    /**
    * Defines an unsigned single byte integer value (ubyte/uchar). 
    * @param name Property name
    */
    uint8: { 
        value: function(name) { 
            return { name: name, readCode: "v.getUint8(o, true);", setCode: "v.setUint8(o, val, true);", byteLength: 1, defaultValue: 0, structProperty: true };
        }
    },
    
    /**
    * Defines a two byte integer value (short). 
    * @param name Property name
    */
    int16: { 
        value: function(name) { 
            return { name: name, readCode: "v.getInt16(o, true);", setCode: "v.setInt16(o, val, true);", byteLength: 2, defaultValue: 0, structProperty: true };
        }
    },
    
    /**
    * Defines an unsigned two byte integer value (ushort). 
    * @param name Property name
    */
    uint16: { 
        value: function(name) { 
            return { name: name, readCode: "v.getUint16(o, true);", setCode: "v.setUint16(o, val, true);", byteLength: 2, defaultValue: 0, structProperty: true };
        }
    },
    
    /**
    * Defines a four byte integer value (int/long). 
    * @param name Property name
    */
    int32: { 
        value: function(name) { 
            return { name: name, readCode: "v.getInt32(o, true);", setCode: "v.setInt32(o, val, true);", byteLength: 4, defaultValue: 0, structProperty: true };
        }
    },
    
    /**
    * Defines an unsigned four byte integer value (uint/ulong). 
    * @param name Property name
    */
    uint32: { 
        value: function(name) { 
            return { name: name, readCode: "v.getUint32(o, true);", setCode: "v.setUint32(o, val, true);", byteLength: 4, defaultValue: 0, structProperty: true };
        }
    },
    
    /**
    * Defines a four byte floating point value (float). 
    * @param name Property name
    */
    float32: { 
        value: function(name) { 
            return { name: name, readCode: "v.getFloat32(o, true);", setCode: "v.setFloat32(o, val, true);", byteLength: 4, defaultValue: 0, structProperty: true };
        }
    },
    
    /**
    * Defines an eight byte floating point value (double). 
    * @param name Property name
    */
    float64: { 
        value: function(name) { 
            return { name: name, readCode: "v.getFloat64(o, true);", setCode: "v.setFloat64(o, val, true);", byteLength: 8, defaultValue: 0, structProperty: true };
        }
    },
    
    /**
    * Defines a fixed-length ASCII string. 
    * Will always read the number of characters specified, but the returned string will truncate at the first null char.
    * @param name Property name
    * @param length Number of characters to read
    */
    string: {
        value: function(name, length) {
            var code = "(function(o) {\n";
            code += "   var str = \"\";\n";
            code += "   for(var j = 0; j < " + length + "; ++j) {\n";
            code += "       var char = v.getUint8(o+j, true);\n";
            code += "       if(char === 0) { break; }\n";
            code += "       str += String.fromCharCode(char);\n";
            code += "   }\n";
            code += "   return str;\n";
            code += "})(o);\n";
            var setcode = "(function(o, str) {\n";
            setcode += "   for(var j = 0; j < " + length + "; ++j) {\n";
            setcode += "       v.setUint8(o+j, str.charCodeAt(j), true);\n";
            setcode += "       if(char === 0) { break; }\n";
            setcode += "   }\n";
            setcode += "})(o, val);\n";
            return {
                name: name,
                readCode: code, 
                setCode: setcode, 
                byteLength: length, 
                defaultValue: "",
                structProperty: true
            };
        }
    },
    
    /**
    * Defines a fixed-length array of structs or primitives
    * @param name Property name
    * @param type struct or primitive type to read
    * @param length Number of elements to read. Total bytes read will be type.byteLength * length
    */
    array: {
        value: function(name, type, length) {
            var code = "(function(o) {\n";
            code += "   var aa = new Array(" + length + "), av;\n";
            code += "   for(var j = 0; j < " + length + "; ++j) {\n";
            code += "       av = " + type.readCode + "\n";
            code += "       o += " + type.byteLength + ";\n";
            code += "       aa[j] = av;\n";
            code += "   }\n";
            code += "   return aa;\n"
            code += "})(o);\n";
            var setcode = "(function(o, aa) {\n";
            setcode += "   for(var j = 0; j < " + length + "; ++j) {\n";
            setcode += "       val = aa[j];\n" + type.setCode + "\n";
            setcode += "       o += " + type.byteLength + ";\n";
            setcode += "   }\n";
            setcode += "})(o, val);\n";
            return {
                name: name,
                readCode: code, 
                setCode: setcode, 
                byteLength: type.byteLength * length, 
                defaultValue: null,
                array: true,
                structProperty: true
            };
        }
    },
    
    /**
    * Defines a nested struct
    * @param name Property name
    * @param struct Struct to read
    */
    struct: {
        value: function(name, struct) {
            return {
                name: name,
                readCode: struct.readCode, 
                byteLength: struct.byteLength, 
                defaultValue: null,
                struct: true,
                structProperty: true
            };
        }
    },
    
    /**
    * Defines a number of the bytes to be skipped over.
    * @param length Number of bytes to be skipped
    */
    skip: {
        value: function(length) {
            return {
                name: null,
                readCode: "null;\n", 
                setCode: "\n", 
                byteLength: length,
                structProperty: true
            };
        }
    },
    
    /**
    * Compiles the code to read a struct from the struct's definition
    * @param structDef Object sequentially defining the binary types to read
    * @param prototype Optional, additional prototypes to apply to the returned struct object
    * @returns An object containing a "readStructs" function that can read an array of the defined type from an ArrayBuffer
    */
    create: {
        value: function(/* collected via arguments */) {
            var type;
            var properties = arguments[arguments.length-1].structProperty ? {} : arguments[arguments.length-1];
            
            var byteLength = 0;
            var struct = Object.create(Object.prototype, properties);
            
            // This new struct will be assigned a unique name so that instances can be easily constructed later.
            // It is not recommended that you use these names for anything outside this class, as they are not
            // intended to be stable from run to run.
            Object.defineProperty(struct, "struct_type_id", { value: "struct_id_" + nextStructId, enumerable: false, configurable: false, writable: false });
            Object.defineProperty(this, struct.struct_type_id, { value: struct, enumerable: false, configurable: false, writable: false });
            nextStructId += 1;
            
            // Build the code to read a single struct, calculate byte lengths, and define struct properties
            var readCode = "(function(o) { var st = Object.create(Struct." + struct.struct_type_id + ");\n";
            var readCodeCore = "";
            for(var i = 0; i < arguments.length; ++i) {
                type = arguments[i];
                if(!type.structProperty) { continue; }
                if(type.name) {
                    Object.defineProperty(struct, type.name, { value: type.defaultValue, enumerable: true, configurable: true, writable: true });
                    readCodeCore += "st." + type.name + " = " + type.readCode + "\n";
                }
                readCodeCore += "o += " + type.byteLength + ";\n";
                byteLength += type.byteLength;
            }
            readCode = readCode + readCodeCore + "return st; })(o);";
            
            var createBufferCode = "var o = 0; var buffer = new ArrayBuffer(st.byteLength); var v = new DataView(buffer);\n";
            
            var setCode = createBufferCode;
            for(var i = 0; i < arguments.length; ++i) {
                type = arguments[i];
                if(!type.structProperty) { continue; }
                if(type.name) {
                    setCode += "val = st." + type.name + ";\n";
                    setCode += type.setCode + "\n";
                }
                setCode += "o += " + type.byteLength + ";\n";
            }

            var writeMemCode = "function() { var st = this;\n";
            writeMemCode += setCode;
            writeMemCode += "var addr = st.ptr;\n";
            writeMemCode += "var count = st.byteLength;\n";
            writeMemCode += "for (var i = 0; i < count; ++i) {\n";
            writeMemCode += "aspace[addr + i] = v.getInt8(i, true);\n";
            writeMemCode += "}\n";
            writeMemCode += "}\n";

            var readMemCode = "function() { var st = this;\n";
            readMemCode += "var count = st.byteLength;\n";
            readMemCode += "var buffer = new ArrayBuffer(st.byteLength);\n";
            readMemCode += "var v = new DataView(buffer);\n";
            readMemCode += "var addr = st.ptr;\n";
            readMemCode += "for (var i = 0; i < count; ++i) {\n";
            readMemCode += "v.setUint8(i, aspace[addr + i], true);\n";
            readMemCode += "}\n";
            readMemCode += "var o = 0;\n";
            readMemCode += readCodeCore;
            readMemCode += "}\n";
            
            setCode += "return buffer; }";
            
            // Build the code to read a single struct, calculate byte lengths, and define struct properties
            var create = "return (function() { var o = 0; var v = new DataView(new ArrayBuffer(256), 0);\n";
            create += "var st = Object.create(Struct." + struct.struct_type_id + ");\n";
            create += "var setCode = " + "function() { var st = this;\n" + setCode + ";\n";
            create += "Object.defineProperty(st, \"ptr\", { value: 0, enumerable: true, configurable: true, writable: true });\n"
            create += "Object.defineProperty(st, \"toBuffer\", { value: setCode, configurable: false, writable: false });\n";
            create += "var writeMemCode = " + writeMemCode + ";\n";
            create += "Object.defineProperty(st, \"write\", { value: writeMemCode, configurable: false, writable: false });\n";
            create += "var readMemCode = " + readMemCode + ";\n";
            create += "Object.defineProperty(st, \"read\", { value: readMemCode, configurable: false, writable: false });\n";
            for(var i = 0; i < arguments.length; ++i) {
                type = arguments[i];
                if(!type.structProperty) { continue; }
                if(type.name) {
                    Object.defineProperty(struct, type.name, { value: type.defaultValue, enumerable: true, configurable: true, writable: true });
                    create += "st." + type.name + " = " + type.readCode + "\n";
                }
            }
            create += "return st; })();";
            
            setCode = "return (function() { var st = this;\n" + setCode + ")();";
            
            // Build the code to read an array of this struct type
            var parseScript = "var a = new Array(count);\n var s;\n";
            parseScript += "var v = new DataView(arrayBuffer, offset);\n"; // TODO: I should be able to specify a length here (count * this.byteLength), but it consistently gives me an INDEX_SIZE_ERR. Wonder why?
            parseScript += "var o = 0, so = 0;\n";
            parseScript += "for(var i = 0; i < count; ++i) {\n";
            parseScript += "    so = o;\n";
            parseScript += "    s = " + readCode + "\n";
            parseScript += "    o += this.byteLength;\n";
            parseScript += "    if(callback) { callback(s, offset+so); }\n";
            parseScript += "    a[i] = s;\n";
            parseScript += "}\n";
            parseScript += "return a;\n";
            
            Object.defineProperty(struct, "byteLength", { value: byteLength, enumerable: true, configurable: true, writable: true });
            Object.defineProperty(struct, "readCode", { value: readCode, enumerable: true, configurable: true, writable: true });
            
            var createFunc = new Function(create);
            Object.defineProperty(struct, "create", { value: createFunc, enumerable: true, configurable: true, writable: true });
            
            var parseFunc = new Function("arrayBuffer", "offset", "count", "callback", parseScript);
            Object.defineProperty(struct, "readStructs", { value: parseFunc, configurable: true, writable: true });

            return struct;
        }
    },
    
    //
    // Utility functions to read simple arrays of data from a buffer
    //
    
    /**
    * Read an ASCII string from an ArrayBuffer
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param length Optional, number of characters to read. If not given will read until a NULL char is reached
    */ 
    readString: {
        value: function(buffer, offset, length) {
            var str = "", charBuffer;
            
            // Hm... any way I can do this?
            //var str = String.fromCharCode.apply(charBuffer);
            
            if(length) {
                charBuffer = new Uint8Array(buffer, offset, length);
                
                for(var i = 0; i < length; ++i) {
                    var char = charBuffer[i];
                    if(char === 0) { break; }
                    str += String.fromCharCode(char);
                }
            } else {
                charBuffer = new Uint8Array(buffer, offset);
                
                var i = 0;
                while(true) {
                    var char = charBuffer[i++];
                    if(char === 0) { break; }
                    str += String.fromCharCode(char);
                }
            }
            return str;
        }
    },
    
    // I wonder if there's a more efficent way to do these that doesn't run afoul the offset restrictions of TypedArrays
    
    /**
    * Read an array of 8 bit integers
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of integers to read
    */
    readInt8Array: {
        value: function(buffer, offset, elements) {
            var array = new Int8Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getInt8(i, true);
            }
            return array;
        }
    },
    
    /**
    * Read an array of 8 bit unsigned integers
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of integers to read
    */
    readUint8Array: {
        value: function(buffer, offset, elements) {
            var array = new Uint8Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getUint8(i, true);
            }
            return array;
        }
    },
    
    /**
    * Read an array of 16 bit integers
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of integers to read
    */
    readInt16Array: {
        value: function(buffer, offset, elements) {
            var array = new Int16Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getInt16(i*2, true);
            }
            return array;
        }
    },
    
    /**
    * Read an array of 16 bit unsigned integers
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of integers to read
    */
    readUint16Array: {
        value: function(buffer, offset, elements) {
            var array = new Uint16Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getUint16(i*2, true);
            }
            return array;
        }
    },
    
    /**
    * Read an array of 32 bit integers
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of integers to read
    */
    readInt32Array: {
        value: function(buffer, offset, elements) {
            var array = new Int32Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getInt32(i*4, true);
            }
            return array;
        }
    },
    
    /**
    * Read an array of 32 bit unsigned integers
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of integers to read
    */
    readUint32Array: {
        value: function(buffer, offset, elements) {
            var array = new Uint32Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getUint32(i*4, true);
            }
            return array;
        }
    },
    
    /**
    * Read an array of 32 bit floats
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of floats to read
    */
    readFloat32Array: {
        value: function(buffer, offset, elements) {
            var array = new Float32Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getFloat32(i*4, true);
            }
            return array;
        }
    },
    
    /**
    * Read an array of 64 bit floats
    * @param buffer Buffer to read from
    * @param offset Offset in bytes to start reading at
    * @param elements Number of floats to read
    */
    readFloat64Array: {
        value: function(buffer, offset, elements) {
            var array = new Float64Array(elements);
            var v = new DataView(buffer, offset);
            for(var i = 0; i < elements; ++i) {
                array[i] = v.getFloat64(i*8, true);
            }
            return array;
        }
    },
});

function testStructs()
{
	try
	{
		// Define the struct layout
		var SimpleStruct = Struct.create(
			Struct.int16("myShort"),
			Struct.int8("myChar"),
			Struct.int8("myChar2"),
			Struct.uint32("myUint"),
			Struct.float32("myFloat"),
			Struct.array("myArray", Struct.int8(), 8) // Primitives or other structs can be read as fixed-length arrays
		);

		// Just here to show a more complicated Struct setup.
		var ComplexStruct = Struct.create(
			Struct.struct("myStruct", SimpleStruct), // Structs can be nested
			Struct.string("myString", 4),
			Struct.array("myArray", Struct.int8(), 4), // Primitives or other structs can be read as fixed-length arrays
			Struct.array("myStructArray", SimpleStruct, 2)
		);

		var myStruct = allocate_struct(SimpleStruct);
		myStruct.myShort = 0x1337;
		myStruct.myChar = 0x42;
		myStruct.myChar2 = 0x69;
		myStruct.myUint = 0x81680085;
		myStruct.myFloat = 3.14159;
		myStruct.myArray[4] = 0x128;
		myStruct.write();               // Now, write the struct to memory.
		
		myStruct.myUint = 0x66666666;   // Change a variable to make sure readMem() works properly.
		myStruct.read();
		
		var originalPtr = myStruct.ptr;
		do_read(aspace, originalPtr, myStruct.byteLength);
		
		var destPtr = allocate_memory(myStruct.byteLength); // This is where myStruct will be written to.
		libc_memset(destPtr, 0x69, myStruct.byteLength);
		do_read(aspace, destPtr, myStruct.byteLength);
		
		myStruct.ptr = destPtr; // Change the struct's associated memory pointer.
		myStruct.write();
		do_read(aspace, destPtr, myStruct.byteLength);
		
		var result = libc_memcmp(originalPtr, destPtr, myStruct.byteLength);
		if (result == 0)
		{
			logdbg("testStructs: Success! Destination memory equals the original memory!");
		}
		else
		{
			logdbg("testStructs: Failure! Destination memory is NOT the same as the original memory!");
		}
	}
	catch(e)
	{
		logdbg("RunScriptError: " + e);
	}
}