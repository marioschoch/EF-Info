"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=i,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={},a="Wiedereinstieg in Phython",l={permalink:"/EF-Info/2022/08/06/wiedereinstieg-python",editUrl:"https://github.com/marioschoch/EF-Info/tree/main/blog/2022-08-06-wiedereinstieg-python.md",source:"@site/blog/2022-08-06-wiedereinstieg-python.md",title:"Wiedereinstieg in Phython",description:"Erste Schritte",date:"2022-08-06T00:00:00.000Z",formattedDate:"6. August 2022",tags:[],readingTime:1.005,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"numtrip-programmieren",permalink:"/EF-Info/2022/11/25/numtrip-programmieren"}},c={authorsImageUrls:[]},s=[{value:"Erste Schritte",id:"erste-schritte",level:2},{value:"F\xfcllen und wiederholen",id:"f\xfcllen-und-wiederholen",level:2},{value:"Projekt Weihnachtsstern",id:"projekt-weihnachtsstern",level:2},{value:"Projekt Cirlce with dots",id:"projekt-cirlce-with-dots",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"erste-schritte"},"Erste Schritte"),(0,i.kt)("p",null,"Als erstes habe ich Funktionen wie 'pencolor', 'pensize', 'dot', 'forward' wieder gebraucht. Da sind mir schon wieder die meisten Sachen eingefallen und die Aufgaben waren auch gar kein Problem."),(0,i.kt)("h2",{id:"f\xfcllen-und-wiederholen"},"F\xfcllen und wiederholen"),(0,i.kt)("p",null,"Danach habe ich mir den weiterf\xfchrenden Begriff zum wiederholen angeschaut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"for i in range():\n")),(0,i.kt)("p",null,"Auch den Begriff zum Sachen ausf\xfcllen habe ich wieder aufgefrischt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fillcolor(''), begin_fill(), end_fill()\n")),(0,i.kt)("h2",{id:"projekt-weihnachtsstern"},"Projekt Weihnachtsstern"),(0,i.kt)("p",null,"Als n\xe4chstes habe ich einen ausgef\xfcllten Stern programmiert. Der Code hat folgenderweise ausgesehen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"from turtle import *\nfillcolor('blue')\nspeed(0)\n\nbegin_fill()\nfor i in range(6):\n    forward(50)\n    left(140)\n    forward(50)\n    right(80)\nend_fill()\n")),(0,i.kt)("h2",{id:"projekt-cirlce-with-dots"},"Projekt Cirlce with dots"),(0,i.kt)("p",null,"Hier hatte ich ein paar Probleme. Es sah einfacher aus als es war. Ich musste mich so platzieren dass der Kreis seinen mittelpunkt bei den Koordinaten (0,0) hat. Dies brauchte ein bisschen herumt\xfcflerei. So sah es am Schluss aus:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"from turtle import *\n\nspeed(0)\n\npenup() # Den Radius runter gehen damit kreismitte bei (0,0) ist\nright(90)\nforward(50)\npencolor('blue')\nleft(90)\npendown()\n\ncircle(50)  # Kreis zeichnen\n\npenup()\ngoto(0,0)   # An startpunkt zur\xfcck\npendown()\n\nfor dots in range(18):  # Punkte auf kreis\n    penup()\n    forward(50)\n    pendown()\n    dot(10)\n    penup()\n    goto(0,0)\n    pendown()\n")),(0,i.kt)("p",null,"Das wars f\xfcr heute. Peace out. \ud83d\ude0a"))}u.isMDXComponent=!0}}]);