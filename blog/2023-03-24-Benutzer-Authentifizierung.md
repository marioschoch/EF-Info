
Ich war am 17.03 nicht und deshalb habe ich Jodok blog übernommen um den Anschluss nicht zu verlieren. Unten dann noch Notizen von mir.

Letzte Woche haben wir in Node-RED einen bereits existierenden Flow eingefügt, der zwei HTML-Seiten enthält: eine welcome.html und eine login.html. Der Aufbau ist ziemlich simpel: Die Login-Funktion sucht einfach in der Datenbank nach Benutzernamen und Passwort und überprüft, ob sie übereinstimmen. Dazu wird dies in den Cookies gespeichert, daher sieht das Set-Cookie so aus:
```py
if (usr){
    if (password== user.pw){
        msg.cookies = {
            auth: true,
            name: name
        }
    }
}
```

Die Login Funktion löscht beim abmelden einfach das cookie und leitet uns and die entscprechende seite weiter, in unserem Falle also die Wilkommensseite.

Das Programmieren in JavaScript ist fast identisch mit Python, deshalb war es für mich auf den ersten Blick ziemlich verständlich. Kleine unterschiede sind zum Beispiel das man alles theoretisch auf eine einzelne Zeile code schreiben könnte.

![](./login_website.jpg)

Dazu haben wir ganz oben eine Funktion erstellt, die als Datenbank für Benutzernamen und Passwörter dient. Sie sieht so aus:

```py
flow.set(
    "johnny",
    {
        pw: "qwert"
    }
)
flow.set(
    "maria",
    {
        pw: "asdf"
    }

)
return msg;
````

Hier wurden den Benutzern Johnny und Maria jeweils ein Passwort festgelegt. Diese werden dann beim Login überprüft. Das Problem ist jedoch, dass man ein Passwort niemals einfach so abspeichern darf. Man muss immer nur den Hashwert abspeichern, da sonst bei einem Datenleck alle Benutzernamen und Passwörter veröffentlicht werden könnten.