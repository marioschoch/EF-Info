

# Number liste
# for index in Numbers
# Print if modulo = > 0



#for index in range(1, 100):
#    print(index%(index-1))

#PRIME = [2, 3, 5, 7]                       #versuch es selbst zu machen

#for i in range(1, 101, 2):
#    for n in PRIME:
#         if i % n == 0:
#            print(i)

# Lösung

from time import time
from math import sqrt

primes = []
t0 = time()
MAX_ZAHL = 1000000

for zahl in range(2, MAX_ZAHL + 1):
    prim_zahl = True
    for test_zahl in range(2, int(sqrt(zahl) + 1)):
        if zahl % test_zahl == 0:
            prim_zahl = False
            break
    if prim_zahl:
        primes.append(zahl)

t1 = time()
time = t1 - t0

print(time)
print(primes)


