# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body : 

```json
{
    "username" : "wulan",
    "password" : "rahasia",
    "name" : "wulan dwi yanti"
}
```

Response Body Succes : 

```json
{
    "data" : {
        "username" : "wulan",
        "name" : "wulan dwi yanti"
    }
}
```

Response Body Error :

```json
{
    "errors" : "username already reqistered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :
```json
{
    "username" : "wulan",
    "password" : "rahasia"
}
```

Respons Body Success :
```json
{
    {
  "data" : {
    "token" : "unique-token"
  }
}
}```

Response Body Error :
```json
{
  "errors" : "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current
Haeders :
- Authorization : token
Request Body :
```json
{
    "name" : "wulan dwi yanti", // optional
  "password" : "new password" // optional
}```

Response Body Succes : 
```json
{
    "data" : {
    "username" : "wulan",
    "name" : "wulan dwi yanti"
  }
}```

Response Body Error :
```json
{
    "errors" : "Name length max 100"
}```

## Get User API

Endpoint : GET /api/users/current
Headers :
- Authorization : token

Response Body Succes :
```json
{
    "data" : {
    "username" : "wulan",
    "name" : "wulan dwi yanti"
  }
}```

Response Body Error :
```json
{
    "errors" : "Unauthorized"
}```
## Logout User API

Endpoint : DELETE api/users/logout
Headers :
- Authoriztion : token

Response  Body Succes :
```json
{
    {
  "data" : "OK"
}
}```

Response Body Error :
```json
{
    {
  "errors" : "Unauthorized"
}
}```