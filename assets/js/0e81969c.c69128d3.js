"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[864],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>p});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var m=t.createContext({}),o=function(e){var n=t.useContext(m),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=o(e.components);return t.createElement(m.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(i),p=r,d=c["".concat(m,".").concat(p)]||c[p]||h[p]||a;return i?t.createElement(d,l(l({ref:n},u),{},{components:i})):t.createElement(d,l({ref:n},u))}));function p(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=c;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=i[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8954:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var t=i(7462),r=(i(7294),i(3905));const a={},l="NumTrip",s={permalink:"/EF-Info/2022/01/20/NumTrip-Final",editUrl:"https://github.com/marioschoch/EF-Info/tree/main/blog/2022-01-20-NumTrip-Final.md",source:"@site/blog/2022-01-20-NumTrip-Final.md",title:"NumTrip",description:"---",date:"2022-01-20T00:00:00.000Z",formattedDate:"20. Januar 2022",tags:[],readingTime:2.22,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Wiedereinstieg in Phython",permalink:"/EF-Info/2022/08/06/wiedereinstieg-python"}},m={authorsImageUrls:[]},o=[{value:"Was ist NumTrip?",id:"was-ist-numtrip",level:2},{value:"Wie habe ich es umgesetzt?",id:"wie-habe-ich-es-umgesetzt",level:2},{value:"Welche Probleme sind aufgetreten?",id:"welche-probleme-sind-aufgetreten",level:2},{value:"Tipps f\xfcr nachahmer:",id:"tipps-f\xfcr-nachahmer",level:2},{value:"Wie kann man es spielen?",id:"wie-kann-man-es-spielen",level:2}],u={toc:o};function h(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"was-ist-numtrip"},"Was ist NumTrip?"),(0,r.kt)("p",null,"NumTrip ist ein Spiel bei dem das Ziel ist, sich zu einer m\xf6glichst grossen Zahl durch zu kombinieren. Dies tut man in dem man in dem 5x5 feld (beispiel unten) alle eine Zahl ausw\xe4hlt die eine oder mehrere gleiche Zahlen neben ihr hat. Diese Zahlen werden dann schliesslich an der Stelle der ausgew\xe4hlten Zahl kombiniert und es ergibt sich eine neue Zahl die doppelt so gross ist wie die die man Angew\xe4hlt hat. Die L\xfccken die sich danach ergeben werden danach durch neue, zuf\xe4llige Zahlen aufgef\xfcllt. "),(0,r.kt)("p",null,"Ziel ist, m\xf6glichst viel zu kombinieren, um die gr\xf6sstm\xf6gliche Zahl zu erreichen. Verlieren kann man falls sich keine m\xf6glichkeit mehr ergibt 2 oder mehr nebeneinanderstehende Zahlen zu kombinieren."),(0,r.kt)("p",null,"Folgenderweise sollte man sich das Spielfeld vorstellen:"),(0,r.kt)("p",null,"HIER SPIELFELD EINF\xdcGEN (SCREENSHOT)\n",(0,r.kt)("em",{parentName:"p"},"Zuf\xe4llig generiertes Spielfeld")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wie-habe-ich-es-umgesetzt"},"Wie habe ich es umgesetzt?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Top-Down Entwurf"),(0,r.kt)("p",{parentName:"li"},"Begonnen habe ich mit einem ausf\xfchrlichen Top-Down Entwurf. Das Ziel des Entwurfs war es das Projekt so zu unterteilen dass ich es in verschiedenen, einzelnen Teilen angehen kann und es \xfcbersichtlicher wird zu programmieren.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Spielfeld Programmieren"),(0,r.kt)("p",{parentName:"li"},"Diese Aufgabe habe ich mir aus einfachheitsgr\xfcnden in zwei Teile aufgeteilt:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Anzeigen des Spielfeldes"),(0,r.kt)("p",{parentName:"li"},"  Dieser Teil war relativ simpel und man brauche nur ein gewisses grundverst\xe4ndnis von wiederholungsschleifen ",(0,r.kt)("inlineCode",{parentName:"p"},"for i in range()"),", 2d listen und variabeln. Danach konnte man durch formatierung relativ schnell schon ein erstes, zufriedenstellendes Resultat erkennen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generieren von zuf\xe4lligen zahlen in den einzelnen Felder"),(0,r.kt)("p",{parentName:"li"},"  Hier kam ich das erste mal mit ",(0,r.kt)("inlineCode",{parentName:"p"},"import random")," in den Kontakt. Dies erlaubt mir den zugang zu verschiedenen commands mithilfe von jenen ich zuf\xe4llige Zahlen generieren kann. Danach musste ich nur jedes Feld aufrufen und eine solche einf\xfcgen. Kinderleicht.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Benutzereingabe"),(0,r.kt)("p",{parentName:"li"},"F\xfcr mich war dies bei weitem die schwierigste Aufgabe. Hier wurde mir bewusst wie idiotensicher man so eine Eingabe machen muss, denn kein Mensch wird je das eingeben was man will. Da man immer wieder falsche inputs bekommt muss man das Programm auch auf jeden Einzelfall vorbereiten."),(0,r.kt)("p",{parentName:"li"},"Dies habe ich mit folgenden Ans\xe4tzen versucht:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"if, else")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"while")," Schlaufen"),(0,r.kt)("li",{parentName:"ul"},"ver\xe4nderung von strings durch ",(0,r.kt)("inlineCode",{parentName:"li"},".replace")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},".isnumeric")),(0,r.kt)("li",{parentName:"ul"},"trial and error mit ",(0,r.kt)("inlineCode",{parentName:"li"},"try except"))),(0,r.kt)("p",{parentName:"li"},"Mit viel bastlerei bin ich dann zum erfolg gekommen, leider war dies jedoch noch nicht alles. Mann muss ja auch noch kontrollieren ob die Zahl einen gleichen nachbarn hat... Dies hat mir sehr viel Zeit gekostet. Da ich irgendwann keine Geduld mehr hatte habe ich einfach mit schreiben begonnen und einen riesigen Spaghetti code geschrieben den man wahrscheindlich in halb so vielen Zeilen h\xe4tte schreiben k\xf6nnen. Egal. Er funktioniert:)")),(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"welche-probleme-sind-aufgetreten"},"Welche Probleme sind aufgetreten?"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tipps-f\xfcr-nachahmer"},"Tipps f\xfcr nachahmer:"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wie-kann-man-es-spielen"},"Wie kann man es spielen?"))}h.isMDXComponent=!0}}]);