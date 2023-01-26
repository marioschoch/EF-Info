"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[175],{7386:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/11/25/numtrip-programmieren","metadata":{"permalink":"/EF-Info/2022/11/25/numtrip-programmieren","editUrl":"https://github.com/marioschoch/EF-Info/tree/main/blog/2022-11-25-numtrip-programmieren.md","source":"@site/blog/2022-11-25-numtrip-programmieren.md","title":"Numtrip 25/11/22","description":"Neue sachen:","date":"2022-11-25T00:00:00.000Z","formattedDate":"25. November 2022","tags":[],"readingTime":0.635,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Wiedereinstieg in Phython","permalink":"/EF-Info/2022/08/06/wiedereinstieg-python"}},"content":"## Neue sachen:\\n\\n*Grossbuchstaben in Namen = Zahl die sich nicht mehr ver\xe4ndert.*\\n*Kleinbuchstaben in Namen = Zahl die sich ver\xe4ndern k\xf6nnte*\\n\\n## Ver\xe4nderungen\\n\\nIch habe die transformation der Eingabe so programmiert dass ich am Ende wirklich nur 2 Werte bekomme; x und y.\\n\\n\'\'\'\'\\ndef transform_eingabe(raw):\\n    raw = raw.upper()\\n    raw = raw.replace(\' \',\'\').replace(\'-\',\'\').replace(\'.\',\'\').replace(\',\',\'\').replace(\'/\',\'\').replace(\';\',\'\').replace(\':\',\'\')\\n    x = raw[0]\\n    if not x.isalpha():\\n        print(\'Kein Buchstabe...\')\\n        return False\\n    y = raw[1]\\n    if not y.isnumeric():\\n        print(\'Keine Zahl...\')\\n        return False\\n    return [x, y]\\n\'\'\'\'\\n\\nDanach habe ich zwei funktionen von Hofer genommen und an meinen code angepasst. Jedoch hat er leider noch nicht funktioniert. Bekam immer fehlermeldungen.\\n\\nAuch noch \xe4rgerlich ist dass die Reihenzahl die vorher noch richtig angezeigt wurde wieder \xfcberall \'1\' anzeigt. Dies ist ein Problem dass noch zu beheben ist."},{"id":"/2022/08/06/wiedereinstieg-python","metadata":{"permalink":"/EF-Info/2022/08/06/wiedereinstieg-python","editUrl":"https://github.com/marioschoch/EF-Info/tree/main/blog/2022-08-06-wiedereinstieg-python.md","source":"@site/blog/2022-08-06-wiedereinstieg-python.md","title":"Wiedereinstieg in Phython","description":"Erste Schritte","date":"2022-08-06T00:00:00.000Z","formattedDate":"6. August 2022","tags":[],"readingTime":1.005,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Numtrip 25/11/22","permalink":"/EF-Info/2022/11/25/numtrip-programmieren"},"nextItem":{"title":"NumTrip","permalink":"/EF-Info/2022/01/20/NumTrip-Final"}},"content":"## Erste Schritte\\nAls erstes habe ich Funktionen wie \'pencolor\', \'pensize\', \'dot\', \'forward\' wieder gebraucht. Da sind mir schon wieder die meisten Sachen eingefallen und die Aufgaben waren auch gar kein Problem.\\n\\n## F\xfcllen und wiederholen\\nDanach habe ich mir den weiterf\xfchrenden Begriff zum wiederholen angeschaut:\\n````\\nfor i in range():\\n````\\nAuch den Begriff zum Sachen ausf\xfcllen habe ich wieder aufgefrischt:\\n````\\nfillcolor(\'\'), begin_fill(), end_fill()\\n````\\n\\n## Projekt Weihnachtsstern\\nAls n\xe4chstes habe ich einen ausgef\xfcllten Stern programmiert. Der Code hat folgenderweise ausgesehen:\\n````\\nfrom turtle import *\\nfillcolor(\'blue\')\\nspeed(0)\\n\\nbegin_fill()\\nfor i in range(6):\\n    forward(50)\\n    left(140)\\n    forward(50)\\n    right(80)\\nend_fill()\\n````\\n\\n## Projekt Cirlce with dots\\nHier hatte ich ein paar Probleme. Es sah einfacher aus als es war. Ich musste mich so platzieren dass der Kreis seinen mittelpunkt bei den Koordinaten (0,0) hat. Dies brauchte ein bisschen herumt\xfcflerei. So sah es am Schluss aus:\\n````\\nfrom turtle import *\\n\\nspeed(0)\\n\\npenup() # Den Radius runter gehen damit kreismitte bei (0,0) ist\\nright(90)\\nforward(50)\\npencolor(\'blue\')\\nleft(90)\\npendown()\\n\\ncircle(50)  # Kreis zeichnen\\n\\npenup()\\ngoto(0,0)   # An startpunkt zur\xfcck\\npendown()\\n\\nfor dots in range(18):  # Punkte auf kreis\\n    penup()\\n    forward(50)\\n    pendown()\\n    dot(10)\\n    penup()\\n    goto(0,0)\\n    pendown()\\n````\\n\\nDas wars f\xfcr heute. Peace out. \ud83d\ude0a"},{"id":"/2022/01/20/NumTrip-Final","metadata":{"permalink":"/EF-Info/2022/01/20/NumTrip-Final","editUrl":"https://github.com/marioschoch/EF-Info/tree/main/blog/2022-01-20-NumTrip-Final.md","source":"@site/blog/2022-01-20-NumTrip-Final.md","title":"NumTrip","description":"---","date":"2022-01-20T00:00:00.000Z","formattedDate":"20. Januar 2022","tags":[],"readingTime":2.22,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Wiedereinstieg in Phython","permalink":"/EF-Info/2022/08/06/wiedereinstieg-python"}},"content":"---\\n## Was ist NumTrip?\\n\\nNumTrip ist ein Spiel bei dem das Ziel ist, sich zu einer m\xf6glichst grossen Zahl durch zu kombinieren. Dies tut man in dem man in dem 5x5 feld (beispiel unten) alle eine Zahl ausw\xe4hlt die eine oder mehrere gleiche Zahlen neben ihr hat. Diese Zahlen werden dann schliesslich an der Stelle der ausgew\xe4hlten Zahl kombiniert und es ergibt sich eine neue Zahl die doppelt so gross ist wie die die man Angew\xe4hlt hat. Die L\xfccken die sich danach ergeben werden danach durch neue, zuf\xe4llige Zahlen aufgef\xfcllt. \\n\\nZiel ist, m\xf6glichst viel zu kombinieren, um die gr\xf6sstm\xf6gliche Zahl zu erreichen. Verlieren kann man falls sich keine m\xf6glichkeit mehr ergibt 2 oder mehr nebeneinanderstehende Zahlen zu kombinieren.\\n\\nFolgenderweise sollte man sich das Spielfeld vorstellen:\\n\\nHIER SPIELFELD EINF\xdcGEN (SCREENSHOT)\\n*Zuf\xe4llig generiertes Spielfeld*\\n\\n---\\n## Wie habe ich es umgesetzt?\\n\\n1. Top-Down Entwurf\\n    \\n    Begonnen habe ich mit einem ausf\xfchrlichen Top-Down Entwurf. Das Ziel des Entwurfs war es das Projekt so zu unterteilen dass ich es in verschiedenen, einzelnen Teilen angehen kann und es \xfcbersichtlicher wird zu programmieren.\\n\\n2. Spielfeld Programmieren\\n\\n    Diese Aufgabe habe ich mir aus einfachheitsgr\xfcnden in zwei Teile aufgeteilt:\\n    - Anzeigen des Spielfeldes\\n        \\n        Dieser Teil war relativ simpel und man brauche nur ein gewisses grundverst\xe4ndnis von wiederholungsschleifen `for i in range()`, 2d listen und variabeln. Danach konnte man durch formatierung relativ schnell schon ein erstes, zufriedenstellendes Resultat erkennen.\\n    - Generieren von zuf\xe4lligen zahlen in den einzelnen Felder\\n\\n        Hier kam ich das erste mal mit ``import random`` in den Kontakt. Dies erlaubt mir den zugang zu verschiedenen commands mithilfe von jenen ich zuf\xe4llige Zahlen generieren kann. Danach musste ich nur jedes Feld aufrufen und eine solche einf\xfcgen. Kinderleicht.\\n\\n3. Benutzereingabe\\n\\n    F\xfcr mich war dies bei weitem die schwierigste Aufgabe. Hier wurde mir bewusst wie idiotensicher man so eine Eingabe machen muss, denn kein Mensch wird je das eingeben was man will. Da man immer wieder falsche inputs bekommt muss man das Programm auch auf jeden Einzelfall vorbereiten.\\n\\n    Dies habe ich mit folgenden Ans\xe4tzen versucht:\\n\\n    - ``if, else`` und ``while`` Schlaufen\\n    - ver\xe4nderung von strings durch ``.replace`` oder ``.isnumeric``\\n    - trial and error mit ``try except``\\n    \\n    Mit viel bastlerei bin ich dann zum erfolg gekommen, leider war dies jedoch noch nicht alles. Mann muss ja auch noch kontrollieren ob die Zahl einen gleichen nachbarn hat... Dies hat mir sehr viel Zeit gekostet. Da ich irgendwann keine Geduld mehr hatte habe ich einfach mit schreiben begonnen und einen riesigen Spaghetti code geschrieben den man wahrscheindlich in halb so vielen Zeilen h\xe4tte schreiben k\xf6nnen. Egal. Er funktioniert:)\\n\\n4.\\n\\n---\\n## Welche Probleme sind aufgetreten?\\n---\\n## Tipps f\xfcr nachahmer:\\n---\\n## Wie kann man es spielen?"}]}')}}]);