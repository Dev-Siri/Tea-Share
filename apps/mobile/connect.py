#!/usr/bin/python

import sys
from os import system

def connect_to_phone(ip: str):
  port: int = 5555
  connection_ip: str = f"{ip}:{port}"

  system("adb kill-server")
  system(f"adb tcpip {port}")
  system(f"adb connect {connection_ip}")

if len(sys.argv) > 1:
  ip: str = sys.argv[1]

  connect_to_phone(ip)
else:
  print("IP or Port is not defined\n")
  print("Usage:")
  print("python connect.py <IP-ADDRESS> <PORT>")