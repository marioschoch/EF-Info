
spielfeld =[[2,4,4,4,2],[2,2,4,2,2],[2,2,4,4,2],[2,4,4,4,4],[4,4,4,4,4]]

#print('hallo', Spielfeld[0][0])
#print(f'hallo      {Spielfeld[0][0]}', )  #formatiert

def show_spielfeld():
    zeilennummer=1
    print('          1      2      3      4      5')
    for zeile in spielfeld:
        print('      +------+------+------+------+------+')
        print('      |      |      |      |      |      |')
        print(f'   {(zeilennummer)}  ', end='')
        for zelle in zeile:
            if zelle >= 10000:
                print(f'| {(zelle)}', end='')
            elif zelle >= 1000:
                print(f'| {(zelle)} ', end='')
            elif zelle >= 100:
                print(f'|  {(zelle)} ', end='')
            elif zelle >= 10:
                print(f'|  {(zelle)}  ', end='')
            else:
                print(f'|   {(zelle)}  ', end='')
        print('|')
        zeilennummer= zeilennummer+1
        print('      |      |      |      |      |      |')
    print('      +------+------+------+------+------+')


def transform_eingabe(raw):
    raw = raw.upper()
    raw = raw.replace(' ','').replace('-','').replace('.','').replace(',','').replace('/','').replace(';','').replace(':','')
    x = raw[0]
    if not x.isnumeric():
        print('Die Spalteneingabe ist keine Zahl...')
        return [False, False]
    y = raw[1]
    if not y.isnumeric():
        print('Die Zeileneingabe ist keine Zahl...')
        return [False, False]
    return [int(x)-1, int(y)-1]

def eingabe():
    eingabe = input('Gibt eine Splate und Zeile an:')
    eingabe = transform_eingabe(eingabe)
    return eingabe

def removeNumbers(x, y, alteZahl):

    # Check if coordinates are in Spielfeld
    if x < 1 or x > 5:
        return False
    if y < 1 or y > 5:
        return False
    
    #Falls alte zahl noch in Feld, ändert sie und wiedholt das proramm.
    if spielfeld[x][y] == alteZahl:
        spielfeld[x][y] = 0
        removeNumbers(x, y + 1, alteZahl)  # unten
        removeNumbers(x, y - 1, alteZahl)  # oben
        removeNumbers(x + 1, y, alteZahl)  # rechts
        removeNumbers(x - 1, y, alteZahl)  # links
        return True
    else:
        return False

def play():
    show_spielfeld()
    while True:
        x, y = eingabe()
        altezahl = spielfeld[x][y]
        removeNumbers(x, y, altezahl)
        show_spielfeld()

play()