
zahl_zu_faktorisieren = 5




n = zahl_zu_faktorisieren
def factorial(n):
    if (n==0):
       return 1
    else:
        return n*factorial(n-1)

print(factorial(n))