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
    
    Mit viel bastlerei bin ich dann zum erfolg gekommen, leider war dies jedoch noch nicht alles. Mann muss ja auch noch kontrollieren ob die Zahl einen gleichen nachbarn hat... Dies hat mir am meisten Zeit gekostet. Da ich irgendwann keine Geduld mehr hatte habe ich einfach mit schreiben begonnen und einen riesigen Spaghetticode geschrieben den man wahrscheinlich in halb so vielen Zeilen hätte schreiben können. Egal. Er funktioniert:)

4. Floodfill Algorithmus

    Dies ist der Teil für den man am meisten programmier Verständnis braucht. Es ist ein Algorithmus der man immer wieder braucht und für den es sogar eine eigene [Wikipedia seite](https://de.wikipedia.org/wiki/Floodfill) gibt. Wir haben ihn gebraucht um zu kontrollieren ob oben, unten oder auf einer der Seiten die gleiche Zahl steht wie man ausgewählt hat. Falls ja, soll es die Zahl löschen und das Programm noch einmal ausführen bis alle nebeneinanderstehenden Zahlen gelöscht sind.

5. Leere Felder auffüllen

    - Lücken füllen

        Da durch den Floodfill Algorithmus natürlich überall leere Felder entstehen, sollte man eine künstliche Schwerkraft erzeugen. Sie sollte sobald es unter einer Zahl eine Lücke gibt, diese nach unten ziehen so dass alle leeren Felder oben im Spielfeld anzutreffen sind. 
        
        Folgendes war mein Lösungsansatz:
        
        1. Jedes Feld in meinem Spielfeld der Reihe nach durchgehen um zu schauen ob es leer ist oder nicht.

        2. Falls das Feld leer ist, soll es den Wert des oberen Feldes nehmen und in das eigene Feld einsetzen. Das Feld von oben muss danach allerdings geleert werden. Falls es schon einen Wert hat, kann es direkt zum nächsten Feld springen.

        3. Dieser ganze Prozess muss anschliessend vier mal wiederholt werden für den Fall dass ganz oben eine Zahl steht und unten vier leere Felder sind. (Bei jedem Mal wird sie nur ein Feld nach unten geschoben)

    - Zahlen einfügen

        Sobald sich die leeren Felder oben befinden, war es leichte Arbeit sie mit zufälligen Zahlen zu versorgen. Es reichte mir, einen Teil des Codes für die generierung des Spielfeldes zu übernehmen und ein `if spielfeld[i][j] == 0:`einzufügen. Danach klappte es schon wunderbar.

6. Last but not least

    Am Schluss integrierte ich noch die `verloren()` und `gewonnen()` Funktionen. Diese kontrollieren nach jedem Zug a) Ob es noch einen möglichen Zug gibt, b) Ob die Zielzahl (Ich habe 256 festgelegt) erreicht wurde.

    Wurde eines dieser Ziele erfüllt, endet das Spiel entweder mit einer sehr erfreulichen Nachricht, oder mit einer Nachricht die dich noch tagelang verfolgen wird...

---
## Welche Probleme sind aufgetreten?

Dieses Projekt war für mich die erste richtige Programmier-aufgabe. Wie es sich also gehört, hatte ich natürlich auch immer wieder Hänger und Schwierigkeiten bei denen ich nicht wirklich weiter kam. Um ein paar zu nennen: Fehlendes vorstellungsvermögen beim Code schreiben, fehlender python Wortschatz und auch eine falsche ansichtsweise auf nicht funktionierenden Code. 

All diese Sachen haben sich je länger ich mit python gearbeitet habe verbessert und schon bald konnte ich wirklich auch selbst Codeblöcke schreiben. Was mir immer geholfen hat ist mir die Sachen erklären zu lassen und danach selbst zu versuchen. Sobald man etwas versteht, kann man es auch selbst anwenden.

---
## Tipps für nachahmer:

Das allerwichtigste für mich war es mich mit der Sprache vertraut zu machen. Die unzähligen Repetitionskurse auf der [Website](https://ofi.gbsl.website) von Herr Hofer haben mir sehr geholfen. Wichtig ist aber auch immer die gelerneten Sachen direkt anzuwenden um sie auch zu können.

Der zweite wichtige Punkt ist der Top-down Entwurf. Er hilft sehr beim strukturieren der Arbeit und macht es dir einfacher ein so grosses Projekt in viele, kleinere, einfachere Aufaben zu unterteilen die man auch lösen kann. Am Schluss das Puzzle zusammensetzten kann jeder;)

---
## Wie kann man es spielen?