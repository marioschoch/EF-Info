

import random

def random_spielfeld(): #generiert ein zufälliges spielfeld mit den zahlen 1, 2 oder 4
    anfangszahlen = [1,2,4]
    for i in range(5):
        for j in range(5):
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
    raw = raw.replace(' ','').replace('-','').replace('.','').replace(',','').replace('/','').replace(';','').replace(':','')
    if len(raw) == 2: # Kontolliert ob eingabe 2 lang ist, falls ja gehts weiter, sonst gibts nichts wieder
        pass
    else:
        print('Bitte gib nur 2 Zeichen ein!')
        return None
    x = raw[0]
    if not x.isnumeric():
        print('Spalte muss eine Zahl sein!')
        return None
    y = raw[1]
    if not y.isnumeric():
        print('Zeile muss eine Zahl sein!')
        return None
    return [int(x)-1, int(y)-1]

def eingabe(): # Fordert benutzer zu eingabe auf, überprüft ob es transform_eingabe erfolgreich überlebt, falls ja wiedergibt es die eingabe als x,y wert
    valid = False
    while not valid: 
        try:
            eingaben = input('Gibt eine Spalte und Zeile an:')
            eingaben = transform_eingabe(eingaben)
            valid = eingaben is not None
        except:
            print('Keine gültige Eingabe')
    
    nebeneinander = False # Kontrolliert ob die ausgewählte zahl alleinestehend oder nicht alleinestehend ist
    x, y = eingaben

    if x < 0 or x > 4: # Kontrolliert ob eingabe x zwischen 1 und 5 war
        print('Zahl nicht zwischen 1 & 5!')
        return eingabe()
    if y < 0 or y > 4: # Kontrolliert ob eingabe y zwischen 1 und 5 war
        print('Zahl nicht zwischen 1 & 5!')
        return eingabe()

    if x == 4 and y < 4 and y > 0: # Testet randzahlen (ausser eckzahlen) auf benachbarte gleiche zahlen
        if spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x-1][y]:
            nebeneinander = True
    if x==0 and y<4 and y>0:
        if spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x+1][y]:
           nebeneinander = True
    if y==4 and x<4 and x>0:
        if spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x-1][y]:
            nebeneinander = True
    if y==0 and x<4 and x>0:
        if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x-1][y]:
            nebeneinander = True
    if y==0 and x==0: # Testet Eckzahlen auf benachbarte gleiche Zahlen
        if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y+1]:
            nebeneinander = True
    if y==0 and x==4:
        if spielfeld[x][y] == spielfeld[x-1][y] or spielfeld[x][y] == spielfeld[x][y+1]:
            nebeneinander = True
    if y==4 and x==0:
        if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y-1]:
            nebeneinander = True
    if y==4 and x==4:
        if spielfeld[x][y] == spielfeld[x-1][y] or spielfeld[x][y] == spielfeld[x][y-1]:
            nebeneinander = True
    if x>0 and x<4 and y>0 and y<4: # Testet alle mittleren zahlen auf benachbarte gleiche zahlen
        if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x-1][y]:
            nebeneinander = True
    if nebeneinander == True: # Falls nicht alleinestehend geht es weiter
        return eingaben
    else: # Falls alleinestehend sagt es uns dies, und fordert eine neue Eingabe
        print('Alleinstehende Zahl, bitte gib eine neue ein!')
        return eingabe()


def removeNumbers(x, y, alteZahl):

    # Check if coordinates are in Spielfeld
    if x < 0 or x > 4:
        return False
    if y < 0 or y > 4:
        return False
    
    #Falls alte zahl noch in Feld, ändert sie und wiederholt das programm.
    if spielfeld[x][y] == alteZahl:
        spielfeld[x][y] = 0
        removeNumbers(x, y + 1, alteZahl)  # unten
        removeNumbers(x, y - 1, alteZahl)  # oben
        removeNumbers(x + 1, y, alteZahl)  # rechts
        removeNumbers(x - 1, y, alteZahl)  # links
        return True
    else:
        return False

def runterfallen(): # Falls unten im Feld lücken entstehen, schiebt es die zahlen darüber nach unten so dass alle leeren Felder oben sind
    for k in range(5):
        for i in range(4,0,-1): # [4,3,2,1]
            for j in range(5):
                if spielfeld[i][j] == 0:
                    spielfeld[i][j] = spielfeld[i-1][j]
                    spielfeld[i-1][j] = 0

def auffüllen(): # füllt felder die auf 0 gesetzt sind auf
    anfangszahlen = [1,2,4]
    for i in range(5):
        for j in range(5):
            if spielfeld[i][j] == 0:
                spielfeld[i][j] = random.choice(anfangszahlen)

def gewonnen(): # kontrolliert ob man gewonnen hat oder nicht
    for i in range(5):
        for j in range(5):
            if spielfeld[i][j] == 256:
                print('DU HAST GEWONNEN!')
                return True

def verloren():
    for x in range(5):
        for y in range(5):
            if x==4 and y<4 and y>0: # Testet randzahlen (ausser eckzahlen) auf benachbarte gleiche zahlen
                if spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x-1][y]:
                    return True
            if x==0 and y<4 and y>0:
                if spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x+1][y]:
                    return True
            if y==4 and x<4 and x>0:
                if spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x-1][y]:
                    return True
            if y==0 and x<4 and x>0:
                if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x-1][y]:
                    return True
            if y==0 and x==0: # Testet Eckzahlen auf benachbarte gleiche Zahlen
                if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y+1]:
                    return True
            if y==0 and x==4:
                if spielfeld[x][y] == spielfeld[x-1][y] or spielfeld[x][y] == spielfeld[x][y+1]:
                    return True
            if y==4 and x==0:
                if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y-1]:
                    return True
            if y==4 and x==4:
                if spielfeld[x][y] == spielfeld[x-1][y] or spielfeld[x][y] == spielfeld[x][y-1]:
                    return True
            if x>0 and x<4 and y>0 and y<4: # Testet alle mittleren zahlen auf benachbarte gleiche zahlen
                if spielfeld[x][y] == spielfeld[x+1][y] or spielfeld[x][y] == spielfeld[x][y-1] or spielfeld[x][y] == spielfeld[x][y+1] or spielfeld[x][y] == spielfeld[x-1][y]:
                    return True

def play():
    random_spielfeld()
    show_spielfeld()
    while True:
        x, y = eingabe()
        altezahl = spielfeld[x][y] #weist ausgewählte zahl der variabel 'altezahl' zu
        removeNumbers(x, y, altezahl) 
        spielfeld[x][y] = altezahl*2 #verdoppelt ausgewählte zahl und setzt sie an ausgewählter stelle ein (soll nur funktionieren wenn nicht alleinestehend)
        runterfallen()
        auffüllen()
        show_spielfeld()
        if gewonnen() == True:
            return False
        if verloren() == True:
            pass
        else:
            print('DU HAST VERLOREN HAHAHAHHAHAHA')
            return False

play()