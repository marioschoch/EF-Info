

import random

def random_spielfeld(): #generiert ein zufälliges spielfeld mit den zahlen 1, 2 oder 4
    anfangszahlen = [1,2,4]
    for i in range(0,5):
        for j in range(0,5):
            spielfeld[i][j] = random.choice(anfangszahlen)

spielfeld =[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

#print('hallo', Spielfeld[0][0])
#print(f'hallo      {Spielfeld[0][0]}', )  #formatiert

def show_spielfeld(): # Zeigt dem spieler das spielfeld und die darin vorhandenen Werte an
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


def transform_eingabe(raw): # Kontolliert ob eingabe nur nummern enthält, streicht leerschläge weg gibt anschliessend die erste stelle als x und die zweite als y wieder
    raw = raw.upper()
    raw = raw.replace(' ','').replace('-','').replace('.','').replace(',','').replace('/','').replace(';','').replace(':','')
    x = raw[0]
    if not x.isnumeric():
        print('Keine gültige Eingabe')
        return None
    y = raw[1]
    if not y.isnumeric():
        print('Keine gültige Eingabe')
        return None
    return [int(x)-1, int(y)-1]

def eingabe(): # Fordert benutzer zu eingabe auf, überprüft ob es transform_eingabe erfolgreich überlebt, falls ja wiedergibt es die eingabe als x,y wert
    valid = False
    while not valid: 
        try:
            eingabe = input('Gibt eine Spalte und Zeile an:')
            eingabe = transform_eingabe(eingabe)
            valid = eingabe is not None
        except:
            print('Keine gültige Eingabe')
    return eingabe

def removeNumbers(x, y, alteZahl):

    # Check if coordinates are in Spielfeld
    if x < 0 or x > 4:
        return False
    if y < 0 or y > 4:
        return False
    
    #Falls alte zahl noch in Feld, ändert sie und wiedholt das programm.
    if spielfeld[x][y] == alteZahl:
        spielfeld[x][y] = 0
        removeNumbers(x, y + 1, alteZahl)  # unten
        removeNumbers(x, y - 1, alteZahl)  # oben
        removeNumbers(x + 1, y, alteZahl)  # rechts
        removeNumbers(x - 1, y, alteZahl)  # links
        return True
    else:
        return False

def auffüllen(): #füllt felder die auf 0 gesetzt sind auf
    for i in range(5):
        for l in range(4,0,-1):

def verdoppeln(): #vedoppelt zahl die ausgewählt wurde antstatt sie zu löschen


def play():
    show_spielfeld()
    while True:
        x, y = eingabe()
        altezahl = spielfeld[x][y]
        removeNumbers(x, y, altezahl)
        show_spielfeld()

play()