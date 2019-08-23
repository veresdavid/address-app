# Address App
A small dockerized application, that can store users and their addresses.

## Tech stack
The tech stack consists of the following things:
* NodeJs
* Express
* MongoDB
* Mongoose
* Docker

## How to start the app
To spin up the application, you have to type the following command in the root directory of this app:
```
docker-compose up
```

## The running application
If you spin up the app, it runs the following docker services:
* A MongoDB instance on port 27017.
* A MongoDB Express app on port 8081. You can view your databases, collections and documents with this webapp.
* An Express-based REST API running on port 3000. This is the main application.

## Endpoints
The application has several endpoints. These are the following:
* `GET /users` : lists all the saved users
* `GET /users/:userId` : gets a user with the given id
* `POST /users` : saves a new user based on the posted request body
* `PUT /users/:userId` : updates the user with the given id, to the data posted in the request body
* `DELETE /users/:userId` : deletes the user with the given id
* `GET /users/:userId/addresses` : lists all the addresses attached to the user with the given id
* `POST /users/:userId/addresses` : creates and/or attaches a new address to the user with the given id
* `GET /users/:userId/addresse/:addressId` : gets an address attached to a user with the given address and user id