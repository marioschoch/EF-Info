from timeit import timeit
from random import shuffle
from copy import deepcopy

def selection_sort(a):
    for j in range(len(a) - 1):
        key = a[j]
        index = j
        for i in range(j + 1, len(a)):
            if a[i] < a[index]:
                index = i
        a[j] = a[index]
        a[index] = key
    return a

to_sort = list(range(20000))
shuffle(to_sort)

execution_time = timeit(lambda: selection_sort(deepcopy(to_sort)), number=3)
print('Zeit für 100x Sortieren:', execution_time/3)