from timeit import timeit
from random import shuffle
from copy import deepcopy

def bogo_sort(a):
    print(a)
    while True:
        shuffle(a)
        is_sorted = True
        for i in range(len(a)-1):
            if a[i] > a[i+1]:
                is_sorted = False
                break
        if is_sorted:
            return a

to_sort = list(range(6))
shuffle(to_sort)

execution_time = timeit(lambda: bogo_sort(deepcopy(to_sort)), number=10000)
print('Zeit für 100x Sortieren:', execution_time)