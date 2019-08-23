const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const usersController = require("./controllers/users/usersController");

// create db connection
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`, { useNewUrlParser: true });

// create express app
const app = express();

// use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// attach controllers
app.use("/users", usersController);

// start the app
app.listen(process.env.APP_PORT || 3000);