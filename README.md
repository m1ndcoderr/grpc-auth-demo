# grpc-auth-demo

### Info
В базе уже есть три пользователя с email: *admin@admin.com*, *moder@moder.com*, *user@user.com*, пароль ко всем - *12Aa*. Тестировалось в *BloomRPC* (localhost:5000) - [https://github.com/uw-labs/bloomrpc](https://github.com/uw-labs/bloomrpc). К сожалению, получение пользователей в зависимости от роли завести не удалось, возможно причина в users.proto, но это не точно. Получение *accessToken* по логину и паролю работает нормально.

## Installation

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

NestJS - [https://nestjs.com](https://nestjs.com/)

