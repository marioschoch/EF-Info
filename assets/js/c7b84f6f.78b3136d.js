"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[175],{7386:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/11/25/numtrip-programmieren","metadata":{"permalink":"/EF-Info/2022/11/25/numtrip-programmieren","editUrl":"https://github.com/marioschoch/EF-Info/tree/main/blog/2022-11-25-numtrip-programmieren.md","source":"@site/blog/2022-11-25-numtrip-programmieren.md","title":"numtrip-programmieren","description":"","date":"2022-11-25T00:00:00.000Z","formattedDate":"25. November 2022","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Wiedereinstieg in Phython","permalink":"/EF-Info/2022/08/06/wiedereinstieg-python"}},"content":""},{"id":"/2022/08/06/wiedereinstieg-python","metadata":{"permalink":"/EF-Info/2022/08/06/wiedereinstieg-python","editUrl":"https://github.com/marioschoch/EF-Info/tree/main/blog/2022-08-06-wiedereinstieg-python.md","source":"@site/blog/2022-08-06-wiedereinstieg-python.md","title":"Wiedereinstieg in Phython","description":"Erste Schritte","date":"2022-08-06T00:00:00.000Z","formattedDate":"6. August 2022","tags":[],"readingTime":1.005,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"numtrip-programmieren","permalink":"/EF-Info/2022/11/25/numtrip-programmieren"}},"content":"## Erste Schritte\\nAls erstes habe ich Funktionen wie \'pencolor\', \'pensize\', \'dot\', \'forward\' wieder gebraucht. Da sind mir schon wieder die meisten Sachen eingefallen und die Aufgaben waren auch gar kein Problem.\\n\\n## F\xfcllen und wiederholen\\nDanach habe ich mir den weiterf\xfchrenden Begriff zum wiederholen angeschaut:\\n````\\nfor i in range():\\n````\\nAuch den Begriff zum Sachen ausf\xfcllen habe ich wieder aufgefrischt:\\n````\\nfillcolor(\'\'), begin_fill(), end_fill()\\n````\\n\\n## Projekt Weihnachtsstern\\nAls n\xe4chstes habe ich einen ausgef\xfcllten Stern programmiert. Der Code hat folgenderweise ausgesehen:\\n````\\nfrom turtle import *\\nfillcolor(\'blue\')\\nspeed(0)\\n\\nbegin_fill()\\nfor i in range(6):\\n    forward(50)\\n    left(140)\\n    forward(50)\\n    right(80)\\nend_fill()\\n````\\n\\n## Projekt Cirlce with dots\\nHier hatte ich ein paar Probleme. Es sah einfacher aus als es war. Ich musste mich so platzieren dass der Kreis seinen mittelpunkt bei den Koordinaten (0,0) hat. Dies brauchte ein bisschen herumt\xfcflerei. So sah es am Schluss aus:\\n````\\nfrom turtle import *\\n\\nspeed(0)\\n\\npenup() # Den Radius runter gehen damit kreismitte bei (0,0) ist\\nright(90)\\nforward(50)\\npencolor(\'blue\')\\nleft(90)\\npendown()\\n\\ncircle(50)  # Kreis zeichnen\\n\\npenup()\\ngoto(0,0)   # An startpunkt zur\xfcck\\npendown()\\n\\nfor dots in range(18):  # Punkte auf kreis\\n    penup()\\n    forward(50)\\n    pendown()\\n    dot(10)\\n    penup()\\n    goto(0,0)\\n    pendown()\\n````\\n\\nDas wars f\xfcr heute. Peace out. \ud83d\ude0a"}]}')}}]);