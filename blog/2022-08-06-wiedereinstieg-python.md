# Wiedereinstieg in Phython

## Erste Schritte
Als erstes habe ich Funktionen wie 'pencolor', 'pensize', 'dot', 'forward' wieder gebraucht. Da sind mir schon wieder die meisten Sachen eingefallen und die Aufgaben waren auch gar kein Problem.

## Füllen und wiederholen
Danach habe ich mir den weiterführenden Begriff zum wiederholen angeschaut:
````
for i in range():
````
Auch den Begriff zum Sachen ausfüllen habe ich wieder aufgefrischt:
````
fillcolor(''), begin_fill(), end_fill()
````

## Projekt Weihnachtsstern
Als nächstes habe ich einen ausgefüllten Stern programmiert. Der Code hat folgenderweise ausgesehen:
````
from turtle import *
fillcolor('blue')
speed(0)

begin_fill()
for i in range(6):
    forward(50)
    left(140)
    forward(50)
    right(80)
end_fill()
````

## Projekt Cirlce with dots
Hier hatte ich ein paar Probleme. Es sah einfacher aus als es war. Ich musste mich so platzieren dass der Kreis seinen mittelpunkt bei den Koordinaten (0,0) hat. Dies brauchte ein bisschen herumtüflerei. So sah es am Schluss aus:
````
from turtle import *

speed(0)

penup() # Den Radius runter gehen damit kreismitte bei (0,0) ist
right(90)
forward(50)
pencolor('blue')
left(90)
pendown()

circle(50)  # Kreis zeichnen

penup()
goto(0,0)   # An startpunkt zurück
pendown()

for dots in range(18):  # Punkte auf kreis
    penup()
    forward(50)
    pendown()
    dot(10)
    penup()
    goto(0,0)
    pendown()
````

Das wars für heute. Peace out. 😊