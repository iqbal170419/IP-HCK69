# se-team API Documentation

## Endpoints :

List of available endpoints:

- `GET /`
- `GET /game`
- `POST /register`
- `POST /login`
- `POST /login-google`
- `GET /:id`
- `GET /payment/:id`

&nbsp;

## 1. GET /

Description:

- Get all Game from database

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Grand Theft Auto V",
        "released": "2013-09-17",
        "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        "rating": 4.47,
        "genre": "Action",
        "imgUrl_1": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        "imgUrl_2": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
        "imgUrl_3": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
        "imgUrl_4": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
        "price": 970000,
        "createdAt": "2024-01-18T20:01:27.343Z",
        "updatedAt": "2024-01-18T20:01:27.343Z"
    },
    {
        "id": 2,
        "name": "The Witcher 3: Wild Hunt",
        "released": "2015-05-18",
        "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "rating": 4.65,
        "genre": "Action",
        "imgUrl_1": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "imgUrl_2": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
        "imgUrl_3": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
        "imgUrl_4": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
        "price": 860000,
        "createdAt": "2024-01-18T20:01:27.343Z",
        "updatedAt": "2024-01-18T20:01:27.343Z"
    },
    {
        "id": 3,
        "name": "Portal 2",
        "released": "2011-04-18",
        "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        "rating": 4.61,
        "genre": "Shooter",
        "imgUrl_1": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        "imgUrl_2": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
        "imgUrl_3": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
        "imgUrl_4": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
        "price": 520000,
        "createdAt": "2024-01-18T20:01:27.343Z",
        "updatedAt": "2024-01-18T20:01:27.343Z"
    },, ...
]

```

&nbsp;

## 2. GET /:id

Description:

- Get gameId from database

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "id": 3,
  "name": "Portal 2",
  "released": "2011-04-18",
  "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
  "rating": 4.61,
  "genre": "Shooter",
  "imgUrl_1": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
  "imgUrl_2": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
  "imgUrl_3": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
  "imgUrl_4": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
  "price": 520000,
  "createdAt": "2024-01-18T20:01:27.343Z",
  "updatedAt": "2024-01-18T20:01:27.343Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 3. GET /game

Description:

- Get data transaction

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "userId": 1,
        "gameId": 1,
        "transactionDate": "2024-01-18T20:15:33.107Z",
        "orderId": "0.18928601842474335",
        "transactionToken": "160a7988-77bd-496f-8b62-5d32e03e06fa",
        "status": "pending",
        "totalAmount": 970000,
        "createdAt": "2024-01-18T20:15:33.109Z",
        "updatedAt": "2024-01-18T20:15:33.109Z",
        "Game": {
            "id": 1,
            "name": "Grand Theft Auto V",
            "released": "2013-09-17",
            "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            "rating": 4.47,
            "genre": "Action",
            "imgUrl_1": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            "imgUrl_2": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
            "imgUrl_3": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
            "imgUrl_4": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
            "price": 970000,
            "createdAt": "2024-01-18T20:01:27.343Z",
            "updatedAt": "2024-01-18T20:01:27.343Z"
        }
    },
    {
        "id": 2,
        "userId": 1,
        "gameId": 2,
        "transactionDate": "2024-01-18T20:29:24.195Z",
        "orderId": "0.04211354026809899",
        "transactionToken": "bd730794-2c36-495b-8b6d-d85bf5f05acd",
        "status": "pending",
        "totalAmount": 860000,
        "createdAt": "2024-01-18T20:29:24.197Z",
        "updatedAt": "2024-01-18T20:29:24.197Z",
        "Game": {
            "id": 2,
            "name": "The Witcher 3: Wild Hunt",
            "released": "2015-05-18",
            "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            "rating": 4.65,
            "genre": "Action",
            "imgUrl_1": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            "imgUrl_2": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
            "imgUrl_3": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
            "imgUrl_4": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
            "price": 860000,
            "createdAt": "2024-01-18T20:01:27.343Z",
            "updatedAt": "2024-01-18T20:01:27.343Z"
        }
    },
    {
        "id": 3,
        "userId": 1,
        "gameId": 3,
        "transactionDate": "2024-01-18T20:29:34.975Z",
        "orderId": "0.750234209484725",
        "transactionToken": "1efeab4a-6d73-49e0-879e-27f7c446c3da",
        "status": "pending",
        "totalAmount": 520000,
        "createdAt": "2024-01-18T20:29:34.975Z",
        "updatedAt": "2024-01-18T20:29:34.975Z",
        "Game": {
            "id": 3,
            "name": "Portal 2",
            "released": "2011-04-18",
            "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
            "rating": 4.61,
            "genre": "Shooter",
            "imgUrl_1": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
            "imgUrl_2": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
            "imgUrl_3": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
            "imgUrl_4": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
            "price": 520000,
            "createdAt": "2024-01-18T20:01:27.343Z",
            "updatedAt": "2024-01-18T20:01:27.343Z"
        }
    },...
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 4. POST /register

Description:

- Add User to database

Request:

- body:

```json
{
  "userName": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "userName": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email cannot empty"
}
OR
{
  "message": "must be email format"
}
OR
{
  "message": "password cannot empty"
}
OR
{
  "message": "userName cannot empty"
}
```

&nbsp;

## 5. POST /login

Description:

- login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "accessToken": "string",
  "id": "integer",
  "email": "string",
  "userName": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email or Password Empty"
}
```

&nbsp;

## 6. POST /login-google

Description:

- login via google

_Response (200 - OK)_

```json
{
  "accessToken": "string",
  "id": "integer",
  "email": "string",
  "userName": "string"
}
```

&nbsp;


## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```