
feld =[[2,4,4,4,2],[1244,2,4,2,2],[2,2,4,4,2],[2,4,4,4,4],[4,4,4,4,4]]

#print('hallo', Spielfeld[0][0])
#print(f'hallo      {Spielfeld[0][0]}', )  #formatiert

def spielfeld():
    zeilennummer=1
    print('          1      2      3      4      5')
    for zeile in feld:
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
        print('Keine Zahl...')
        return False
    y = raw[1]
    if not y.isnumeric():
        print('Keine Zahl...')
        return False
    return [x, y]

def eingabe():
    eingabe = input('Gibt eine Splate und Zeile an:')
    eingabe = transform_eingabe(eingabe)

def process(col, row):
    feld[row][col] = 0

def play():
    spielfeld()
    while True:
        x, y = eingabe()
        process(x, y)
        spielfeld()

play()