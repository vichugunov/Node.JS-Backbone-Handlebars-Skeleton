# Структура проекта

```
package.json  
contributors.txt  
.gitignore  
.../prefs  
    .../development  
    .../production  
    .../CodeStyle  
        .jscsrc  
        .jshintrc  
        Preferences.sublime-settings.json  
    ...static/  
        .../html  
            index.html  
        .../bootstrap  
            ../css  
                bootstrap-theme.css  
                bootstrap-theme.css.map  
                bootstrap-theme.min.css  
                bootstrap.css  
                bootstrap.css.map  
                bootstrap.min.css  
            ../fonts  
                glyphicons-halflings-regular.eot  
                glyphicons-halflings-regular.svg  
                glyphicons-halflings-regular.ttf  
                glyphicons-halflings-regular.woff  
                glyphicons-halflings-regular.woff2  
        ...css/  
        ...img/  
    ...js/  
        .../app  
            app.js  
        .../models  
        .../collections  
        .../routers  
        .../templates  
        .../utils  
        .../views  
        .../libs  
            .../bootstrap  
                bootstrap.js  
                bootstrap.min.js  
                npm.js  
            backbone.js  
            handlebars-v2.0.0.js  
            jquery-1.11.2.js  
            underscore.js  
```

Следующая структура спроектирована в силу особенностей:    
1. *prefs/* содержит настройки для среды окружения и настройки верификации стилей  
    -   prefs/development --- содержит все настройки для development окружения  
    -   prefs/production --- содержит все настройки для production окружения  
    -   prefs/CodeStyle --- содержит файлы настроек для проверки JS стиля для Sublime и JsCs, JsHint валидаторов  
2. *js/* содержит полностью все *js* библиотеки и зависимости, а именно:  
    -   js/app --- код, запускающий сервер  
    -   js/models --- модели Backbone  
    -   js/collections --- коллекции Backbone  
    -   js/routes --- коллекции Backbone  
    -   js/templates --- шаблоны Backbone  
    -   js/utils --- Handlebars helper'ы и всякие вспомогательные функции  
    -   js/libs --- внешние библиотеки и зависимости  
3. *static/* содержит весь статический код, который должен будет кэшироваться в дальнейшем, а именно:     
    -   static/html --- всё, что нужно для html контейнеров  
    -   static/bootstrap --- всё , что нужно для bootstrap'а  
    -   static/css --- css стили  
    -   static/img --- изображения  
4. *package.json* --- описание зависимостей и информации о проекте  
5. *contributors.txt* --- список тех, кто внёс свой вклад в развитие проекта  