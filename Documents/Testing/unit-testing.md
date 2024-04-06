# Project testing
This document outlines the process of testing the CRUD operations within the Percs project. <br>

[Back to README](/Documents/Word-PDF/README.md)

### Bruno
The unit testing uses Bruno as the interface for performing testing, if installation is required a download link can be found [HERE](https://www.usebruno.com/downloads).

Once Bruno is installed locally access the unit tests by opening a collection and selecting **bruno-unit-testing**.

---

### User CRUD Operations Testing


#### Testing Environment
- Percs project deployed locally at `http://localhost:8080`

#### User Operations
The following CRUD operations will be tested:
1. **Create User**
2. **Get Users**
3. **Update User**
4. **Delete User**
5. **Login**

---

### Testing Procedure

Certainly! Here's the updated testing procedure with error messages added to the expected responses:

---

### Testing Procedure

#### 1. Create User

##### Request:
```http
POST http://localhost:8080/users/create
Content-Type: application/json

{
  "username": "The Jester",  
  "email": "brejcha@mail.com",
  "password": "password"
}
```

##### Expected Response:
- HTTP Status Code: 200 OK
- Response Body: User object containing user details including unique userID.
<br><br>

- HTTP Status Code: 500 Internal Server Error
- Response Body: Error message in case of failure, e.g., "Error creating user: {error_message}"
<br>
#### 2. Get Users

##### Request:
```http
GET http://localhost:8080/users/
```

##### Expected Response:
- HTTP Status Code: 200 OK
- Response Body: Array of user objects containing user details.
<br>

- HTTP Status Code: 500 Internal Server Error
- Response Body: Error message in case of failure, e.g., "Error fetching users: {error_message}"

#### 3. Update User

##### Request:
```http
PUT http://localhost:8080/users/{userID}
Content-Type: application/json

{
  "_id": "65ced20bdaba65aca52ac5d3",
  "username": "Boris Brejcha",
  "email": "brejcha@mail.com",
  "password": "password"
}
```

##### Expected Response:
- HTTP Status Code: 200 OK
- Response Body: Updated user object containing the modified user details.
<br>

- HTTP Status Code: 500 Internal Server Error
- Response Body: Error message in case of failure, e.g., "Error updating user: {error_message}"

#### 4. Delete User

##### Request:
```http
DELETE http://localhost:8080/users/{userID}
Content-Type: application/json

{
  "id": "{userID}"
}
```

##### Expected Response:
- HTTP Status Code: 200 OK
<br>

- HTTP Status Code: 404 Not Found
- Response Body: Error message if user with the given ID doesn't exist, e.g., "User not found"

- HTTP Status Code: 500 Internal Server Error
- Response Body: Error message in case of other failures, e.g., "Error deleting user: {error_message}"

#### 5. Login

##### Request:
```http
POST http://localhost:8080/users/login
Content-Type: application/json

{
  "email": "brejcha@mail.com",
  "password": "password"
}
```

##### Expected Response:
- HTTP Status Code: 200 OK
- Response Body: Authentication token for the logged-in user.
<br>

- HTTP Status Code: 400 Bad Request
- Response Body: Error message in case of wrong username or password, e.g., "Wrong username or password"

- HTTP Status Code: 500 Internal Server Error
- Response Body: Error message in case of other failures, e.g., "Error logging in: {error_message}"

### Conclusion
The unit testing for user CRUD operations within the Percs project should ensure that each operation functions correctly and returns the expected responses, including appropriate error messages.
<br><br>
<div style="text-align: right;">


> [Back to top](#)

</div>