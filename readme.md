# Basis grunt project

## Installeren
____

Zorg dat je Node.js en Grunt en Bower geinstalleerd hebt:

- Installeer Node.js via http://nodejs.org
- Installeer Bower met het volgende commando: `npm install -g bower`
- Installeer Grunt met het volgende commando: `npm install -g grunt-cli`
- Installeer de project dependencies met `npm install` en `bower install` (mogelijk moet je hiervoor uitvoeren als admin)
- Start Grunt vervolgens met `grunt`

## Mappen structuur

```
Project/
│
├── assets/
│   ├── images/
│   ├── js/
│   │   ├── script.js
│   │   └── modernizr.min.js
│   └── sass/
│       ├── config.imports.scss
│       ├── _config.variables.scss
│       ├── _module.navigation.scss
│       ├── _library.general.scss
│       └── _object.buttons.scss       
├── node_modules/
├── components/
├── public/
│   ├── images/
│   ├── js/
│   │   ├── scripts.min.js
│   │   └── modernizr.min.js
│   └── css/
│       └── screen.css  
├── Gruntfile.js
├── package.json
├──.jshintrc
├──.gitignore
├── index.html
└── README.md
```

## Bestands structuur

`assets/─`

In assets zitten alle bestanden waar je daadwerkelijk aan werkt. Deze bestanden worden dmv. je Grunt taskrunner gecompileerd in `public/─`

`images/─` 

Afbeeldingen worden automatisch gecomprimeerd en verplaatst naar `public/images/─`

`js/─`

Hierin staat je javascript, deze wordt (afhankelijk van de instellingen) geminified, beautified, gemangled in 1 bestand met bijv. de javascript uit `components/─`

`sass/─`

Je sass bestanden worden gecompileerd naar `public/css/─`. In deze demo word uit gegaan van algemeen import bestand `config.import.scss` die op volgorde alle scss inlaad. Ook de css uit `components/─` word meegenomen.

`node_modules/─`

Na het installeren via `npm install` worden hier de benodigde Grunt dependencies (gedefinieerd in `package.json`) geplaatst.

`components/─`

Zoals aangegeven in het `.bowerrc` bestand worden hier alle project dependencies (gedefinieerd in `bower.json`) geplaatst

`public/─`

In public worden door *Grunt* alle productie bestanden geplaatst

`package.json`

Alle project instellingen, en dependencies zijn hier definieerd

`bower.json`

Alle externe project assets (zoals jquery, normalize, enz) zijn hier gedefinieerd

`Gruntfile.js`

Hier staan alle taken in die uitgevoerd moeten worden wanneer je `grunt` aanroept via de terminal

`.editorconfig`

In de editorconfig staan editor instellingen gedefinieerd zoals indentatie

`.gitignore`

Standaard `.gitignore` de `components` en `node_modules` negeert.

## Grunt taken

### CSS

─ Alle sass & css wordt samengevoegd (output style: `nested, compact, compressed of expanded`) in 1 bestand (`public/css/screen.css`)
─ Pixrem maakt pixel fallbacks van rem waarden
─ Autoprefixer doet wat de naam zegt, schrijf alleen `border-radius`, en hij vult automatisch alle prefixes in je bestanden aan

### JS

─ Uglify verwerkt alle javascript. Ook hier kan je verschillende parameters meegeven.
─ JSHint/JSLint, deze staan nog niet verwerkt in deze demo, maar deze tools checken je javascript code op fouten, of verbeterpunten en geven deze aan in je terminal.

### Afbeeldingen

─ Imagemin comprimeert automatisch alle afbeeldingen uit `assets/images/─` en plaatst ze in `public/images/─`

### Watch

─ Watch kijkt naar wijzigingen in de bestanden/folders die je aan hebt gegeven, als er iets wijzigt voert hij alle taken opnieuw uit, je hoeft dus niet telkens `grunt` aan te roepen
─ In combinatie met `livereload` kan je browser automatisch herladen worden wanneer er wijzigingen zijn
