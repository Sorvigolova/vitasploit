#!/usr/bin/python

import struct
import sys

fileObj = open(sys.argv[1], 'rb')
data = fileObj.read(4)
offset =  0
while len(data) == 4:
	opcode = struct.unpack('I', data)[0]
	if ((opcode & 0xFFF00000) == 0xE8900000) : #LDM
		print "%s 0x%08x %08x\tldm" % (sys.argv[1], offset,opcode),
		if (opcode & 0x000F0000)>>16 == 0:
			print "r0 ",
		elif (opcode & 0x000F0000)>>16 == 1:
			print "r1 ",
		elif (opcode & 0x000F0000)>>16 == 2:
			print "r2 ",
		elif (opcode & 0x000F0000)>>16 == 3:
			print "r3 ",
		elif (opcode & 0x000F0000)>>16 == 4:
			print "r4 ",
		elif (opcode & 0x000F0000)>>16 == 5:
			print "r5 ",
		elif (opcode & 0x000F0000)>>16 == 6:
			print "r6 ",
		elif (opcode & 0x000F0000)>>16 == 7:
			print "r7 ",
		elif (opcode & 0x000F0000)>>16 == 8:
			print "r8 ",
		elif (opcode & 0x000F0000)>>16 == 9:
			print "r9 ",
		elif (opcode & 0x000F0000)>>16 == 10:
			print "r10",
		elif (opcode & 0x000F0000)>>16 == 11:
			print "r11",
		elif (opcode & 0x000F0000)>>16 == 12:
			print "ip",
		elif (opcode & 0x000F0000)>>16 == 13:
			print "sp",
		elif (opcode & 0x000F0000)>>16 == 14:
			print "lr",
		elif (opcode & 0x000F0000)>>16 == 15:
			print "pc",
			
		print ", {",
		
		if (opcode & 0x00000001):
			print "r0,",
		if (opcode & 0x00000002):
			print "r1,",
		if (opcode & 0x00000004):
			print "r2,",
		if (opcode & 0x00000008):
			print "r3,",
		if (opcode & 0x00000010):
			print "r4,",
		if (opcode & 0x00000020):
			print "r5,",
		if (opcode & 0x00000040):
			print "r6,",
		if (opcode & 0x00000080):
			print "r7,",
		if (opcode & 0x00000100):
			print "r8,",
		if (opcode & 0x00000200):
			print "r9,",
		if (opcode & 0x00000400):
			print "r10,",
		if (opcode & 0x00000800):
			print "fp,",
		if (opcode & 0x00001000):
			print "ip,",
		if (opcode & 0x00002000):
			print "sp,",
		if (opcode & 0x00004000):
			print "lr,",
		if (opcode & 0x00008000):
			print "pc,",
			
		print "}"
	data = fileObj.read(4)
	offset = offset+4
fileObj.close()