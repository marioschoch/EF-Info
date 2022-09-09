

# Number liste
# for index in Numbers
# Print if modulo = > 0



#for index in range(1, 100):
#    print(index%(index-1))

PRIME = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

for i in range(1, 101, 2):
    for n in PRIME:
         if i % n == 0:
            print (i)


