# Numtrip 25/11/22

## Neue sachen:

*Grossbuchstaben in Namen = Zahl die sich nicht mehr verändert.*
*Kleinbuchstaben in Namen = Zahl die sich verändern könnte*

## Veränderungen

Ich habe die transformation der Eingabe so programmiert dass ich am Ende wirklich nur 2 Werte bekomme; x und y.

''''
def transform_eingabe(raw):
    raw = raw.upper()
    raw = raw.replace(' ','').replace('-','').replace('.','').replace(',','').replace('/','').replace(';','').replace(':','')
    x = raw[0]
    if not x.isalpha():
        print('Kein Buchstabe...')
        return False
    y = raw[1]
    if not y.isnumeric():
        print('Keine Zahl...')
        return False
    return [x, y]
''''

Danach habe ich zwei funktionen von Hofer genommen und an meinen code angepasst. Jedoch hat er leider noch nicht funktioniert. Bekam immer fehlermeldungen.

Auch noch ärgerlich ist dass die Reihenzahl die vorher noch richtig angezeigt wurde wieder überall '1' anzeigt. Dies ist ein Problem dass noch zu beheben ist.