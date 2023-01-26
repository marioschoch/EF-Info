# NumTrip
---
## Was ist NumTrip?

NumTrip ist ein Spiel bei dem das Ziel ist, sich zu einer möglichst grossen Zahl durch zu kombinieren. Dies tut man in dem man in dem 5x5 feld (beispiel unten) alle eine Zahl auswählt die eine oder mehrere gleiche Zahlen neben ihr hat. Diese Zahlen werden dann schliesslich an der Stelle der ausgewählten Zahl kombiniert und es ergibt sich eine neue Zahl die doppelt so gross ist wie die die man Angewählt hat. Die Lücken die sich danach ergeben werden danach durch neue, zufällige Zahlen aufgefüllt. 

Ziel ist, möglichst viel zu kombinieren, um die grösstmögliche Zahl zu erreichen. Verlieren kann man falls sich keine möglichkeit mehr ergibt 2 oder mehr nebeneinanderstehende Zahlen zu kombinieren.

Folgenderweise sollte man sich das Spielfeld vorstellen:

HIER SPIELFELD EINFÜGEN (SCREENSHOT)
*Zufällig generiertes Spielfeld*

---
## Wie habe ich es umgesetzt?

1. Top-Down Entwurf
    
    Begonnen habe ich mit einem ausführlichen Top-Down Entwurf. Das Ziel des Entwurfs war es das Projekt so zu unterteilen dass ich es in verschiedenen, einzelnen Teilen angehen kann und es übersichtlicher wird zu programmieren.

2. Spielfeld Programmieren

    Diese Aufgabe habe ich mir aus einfachheitsgründen in zwei Teile aufgeteilt:
    - Anzeigen des Spielfeldes
        
        Dieser Teil war relativ simpel und man brauche nur ein gewisses grundverständnis von wiederholungsschleifen `for i in range()`, 2d listen und variabeln. Danach konnte man durch formatierung relativ schnell schon ein erstes, zufriedenstellendes Resultat erkennen.
    - Generieren von zufälligen zahlen in den einzelnen Felder

        Hier kam ich das erste mal mit ``import random`` in den Kontakt. Dies erlaubt mir den zugang zu verschiedenen commands mithilfe von jenen ich zufällige Zahlen generieren kann. Danach musste ich nur jedes Feld aufrufen und eine solche einfügen. Kinderleicht.

3. Benutzereingabe

    Für mich war dies bei weitem die schwierigste Aufgabe. Hier wurde mir bewusst wie idiotensicher man so eine Eingabe machen muss, denn kein Mensch wird je das eingeben was man will. Da man immer wieder falsche inputs bekommt muss man das Programm auch auf jeden Einzelfall vorbereiten.

    Dies habe ich mit folgenden Ansätzen versucht:

    - ``if, else`` und ``while`` Schlaufen
    - veränderung von strings durch ``.replace`` oder ``.isnumeric``
    - trial and error mit ``try except``
    
    Mit viel bastlerei bin ich dann zum erfolg gekommen, leider war dies jedoch noch nicht alles. Mann muss ja auch noch kontrollieren ob die Zahl einen gleichen nachbarn hat... Dies hat mir sehr viel Zeit gekostet. Da ich irgendwann keine Geduld mehr hatte habe ich einfach mit schreiben begonnen und einen riesigen Spaghetti code geschrieben den man wahrscheindlich in halb so vielen Zeilen hätte schreiben können. Egal. Er funktioniert:)

4.

---
## Welche Probleme sind aufgetreten?
---
## Tipps für nachahmer:
---
## Wie kann man es spielen?