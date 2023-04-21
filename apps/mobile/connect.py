#!/usr/bin/python

import argparse
import subprocess
from threading import Thread

def connect_to_phone(ip: str, port: int):
  connection_ip: str = f"{ip}:{port}"
  subprocess.run(["adb", "kill-server"])
  subprocess.run(["adb", "tcpip", str(port)])
  subprocess.run(["adb", "connect", connection_ip])

def main():
  parser = argparse.ArgumentParser(description="Connect to an Android phone over Wi-Fi.")
  parser.add_argument("ip", type=str, help="the IP address of the phone")
  parser.add_argument("--port", type=int, default=5555, help="the port number to use (default: 5555)")
  args = parser.parse_args()

  t = Thread(target=connect_to_phone, args=(args.ip, args.port))
  t.start()
  t.join()

if __name__ == "__main__":
  main()
