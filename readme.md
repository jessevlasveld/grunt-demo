#Basis grunt project

##Installeren
____

Zorg dat je Node.js en Grunt en Bower geinstalleerd hebt:

- Installeer Node.js via http://nodejs.org
- Installeer Bower met het volgende commando: `npm install -g bower`
- Installeer Grunt met het volgende commando: `npm install -g grunt-cli`
- Installeer de project dependencies met `npm install` en `bower install` (mogelijk moet je hiervoor uitvoeren als admin)
- Start Grunt vervolgens met `grunt`

##Mappen structuur

```
Project/
│
├── assets/
|   ├── images/
|   ├── js/
|   |   ├── script.js
|   |   └── modernizr.min.js
│   └── sass/
│       ├── config.imports.scss
|       ├── _config.variables.scss
|       ├── _module.navigation.scss
|       ├── _library.general.scss
|       └── _object.buttons.scss       
├── node_modules/
├── components/
├── public/
|   ├── images/
|   ├── js/
|   |   ├── scripts.min.js
|   |   └── modernizr.min.js
│   └── css/
|       └── screen.css  
├── Gruntfile.js
├── package.json
├──.jshintrc
├──.gitignore
├── index.html
└── README.md
```
