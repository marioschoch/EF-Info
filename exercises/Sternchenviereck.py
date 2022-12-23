
def zeile_1(zahl):
    for i in range(zahl):
        print('*', end='')
    print()

def zeile_2(zahl):
    print('*', end='')
    print(' '*(zahl-2), end='')
    print('*')

def viereck(zahl, reihe):
    zeile_1(zahl)
    for i in range(reihe-2):
        zeile_2(zahl)
    zeile_1(zahl)

viereck(6, 7)
