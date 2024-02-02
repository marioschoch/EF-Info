# main.py -- put your code here!
import machine
import time

led_pin = machine.Pin(2, machine.Pin.OUT)
while True:
    led_pin.value(1)
    print("Turning ON...")
    time.sleep(1)
    led_pin.value(0)
    print("Turning OFF...")
    time.sleep(1)