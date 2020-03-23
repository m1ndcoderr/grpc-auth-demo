# grpc-auth-demo

### Info
В базе уже есть три пользователя с email: 
- **admin@admin.com**
- **moder@moder.com**
- **user@user.com**

Пароль ко всем - **12Aa**. Тестировалось в [BloomRPC](https://github.com/uw-labs/bloomrpc) (на localhost:5000). 

- Получение **accessToken** по логину и паролю
- Получение списка пользователей (требуется **accessToken**) в зависимости от роли пользователя

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

