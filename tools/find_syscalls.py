#!/usr/bin/python

import sys
import glob

tmp_syscall = []

seg0_list = glob.glob('*.seg0.bin')

for seg0 in seg0_list:
	file = open(seg0, 'rb')
	file_data = list(file.read())

	print seg0.split(".")[0] + ":[",
	ended = 0
	for i in xrange(0, len(file_data) - 6):
		if ((ord(file_data[i + 2]) == 0x00) and (ord(file_data[i + 3]) == 0xE3) and (ord(file_data[i + 4]) == 0x00) and (ord(file_data[i + 5]) == 0x00) and (ord(file_data[i+6]) == 0x00) and (ord(file_data[i + 7]) == 0xEF)):
			if ended == 1:
				print ","
			else:
				print ""
			syscall_number = (ord(file_data[i + 1]) << 8) + ord(file_data[i])
			if not (syscall_number in tmp_syscall):
				tmp_syscall.append(syscall_number)
				print "\t" + hex(i),
				ended = 1
			else:
				print "\t//" + hex(i) + " //Already in other module..",	
	print ""
	print "],"
	file.close()