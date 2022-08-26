## Проект "Messenger"

### Описание

Учебный проект "Messanger" находится в разработке. Предполагает прототип мессенджера с функциями регистрации, авторизации, получением-отправкой сообщений.

Макет сделан в [Figma](https://www.figma.com/file/cp17L4umbewTRBurdgOue4/Chat-design?node-id=0%3A1) и в процессе разработки будет дорабатываться.

Актуальная версия задеплоена в сервисе [Netlify](https://app.netlify.com/) и доступна по [адресу](https://deploy--jocular-pony-266b95.netlify.app/)


### Навигация

+ [/auth](https://deploy--jocular-pony-266b95.netlify.app/auth) - страница авторизации
+ [/register](https://deploy--jocular-pony-266b95.netlify.app/register) - страница регистрации
+ [/](https://deploy--jocular-pony-266b95.netlify.app/) - страница списка чатов (в качестве заглушки стоит чат)
+ [/error](https://deploy--jocular-pony-266b95.netlify.app/error) - страница ошибки сервера
+ [/not-found](https://deploy--jocular-pony-266b95.netlify.app/not-found) или любой отличный от адресов выше - страница 400

### Установка

`npm install` - установка зависимостей
`npm run dev` - запуск dev-версии на Parcel
`npm run start` - запуск версии на Express

### Технологии

+ Figma
+ Parcel
+ Handlebars
+ SCSS
+ Express
+ Netlify