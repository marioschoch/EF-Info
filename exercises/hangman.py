
# Variablen
gesucht = 'wilkommen'

gefunden = []   # Buchstaben die richtig geraten sind
falsch_geraten = [] # Buchstaben die falsch geraten sind

def show(): # Printet falsche buchstaben und die gefundenen buchstaben im wort.
    print('Falsche Buchstaben:', falsch_geraten)
    for buchstabe in gesucht:
        if buchstabe in gefunden:
            print(buchstabe, end=' ')
        else:
            print('_', end=' ')
    print('')

def is_valid(inp):
    return True

def eingabe():
    buchstabe = input('Buchstabe? ')
    while not is_valid(buchstabe):
        buchstabe = input('Buchstabe? ')
    return buchstabe.lower()

def auswerten(valid_inp):  #fügt ein ?valid.inp? zu einer liste hinzu, je nach dem ob er im wort vorkommt
    if valid_inp in gesucht:
        gefunden.append(valid_inp)
    else:
        falsch_geraten.append(valid_inp)

def gewonnen():  #prüft ob das wort vollständig erraten wurde
    for buchstabe in gesucht:
        if buchstabe not in gefunden:
            return False
    return True

def game_over():
    if len(falsch_geraten) == 10:
        return True
    else:
        return False

def play():
    while not game_over():
        buchstabe = eingabe()
        auswerten(buchstabe)
        print (buchstabe)
        show()
    if gewonnen():
        print('Congratulations! You Won!')
    else:
        print(f'You Lost! The word was', gesucht)
    


play()