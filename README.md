## Проект "Messenger"

### Описание

Учебный проект "Messenger". Предполагает прототип мессенджера с функциями регистрации, авторизации, получением-отправкой сообщений, редактированием профиля.

Макет сделан в [Figma](https://www.figma.com/file/cp17L4umbewTRBurdgOue4/Chat-design?node-id=0%3A1).

Актуальная версия задеплоена в сервисах:
+ [Netlify](https://app.netlify.com/) и доступна по [адресу](https://deploy--jocular-pony-266b95.netlify.app/)
+ [Heroku](https://dashboard.heroku.com/apps) и доступна по [адресу](https://meow-messenger.herokuapp.com/messenger)

### Что нового

В рамках последнего спринта внедрен сборщик Webpack, реализовано минимальное покрытие тестами с помощью Mocha и Chai, настроена Docker-сборка и precommit.
Проведен аудит пакетов: основные уязвимости устранены (оставшиеся относятся к дев-версии и используются для сборки).

### Примечания

1. Обратите внимание, если вы не авторизованы - вас будет выкидывать на страницу логина и пароля, если авторизованы - на страницу чатов.
2. Чтобы посмотреть/поменять информацию о юзере, нажмите на значок профиля около имени, в том же окне можно поменять пароль, кликнув на нижнюю ссылку.
3. Чтобы поменять аватарку у пользователя, нажмите на аватарку.
4. Чтобы создать новый чат, нажмите на плюсик рядом со строкой поиска по чатам.
5. Поиск по чатам работает при нажатии на Enter в строке поиска.
6. Действия над каким-либо чатом можно найти в меню выбранного чата (иконка в правом верхнем углу).

### Навигация

+ [/](https://meow-messenger.herokuapp.com/) - страница авторизации
+ [/sign-up](https://meow-messenger.herokuapp.com/sign-up) - страница регистрации
+ [/messenger](https://meow-messenger.herokuapp.com/messenger) - страница списка чатов
+ [/error](https://meow-messenger.herokuapp.com/error) - страница ошибки сервера
+ [/not-found](https://meow-messenger.herokuapp.com/not-found) или любой отличный от адресов выше - страница 400

### Установка

`npm install` - установка зависимостей  

`npm run dev` - запуск dev-версии на Parcel  

`npm run start` - запуск версии на Express  


### Технологии

+ Figma
+ Webpack
+ Handlebars
+ SCSS
+ Express
+ Netlify
+ Haroku
+ Docker
+ TypeScript
+ ESLint
+ Stylelint
+ Mocha, Chai
