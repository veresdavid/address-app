const express = require("express");

const findAllUsers = require("./findAllUsers");
const findUserById = require("./findUserById");
const createUser = require("./createUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");
const findAddressesOfUserWithId = require("./findAddressesOfUserWithId");
const findUsersAddressWithId = require("./findUsersAddressWithId");
const createAddressForUserWithId = require("./createAddressForUserWithId");

const router = express.Router();

// find all users
router.get("/", findAllUsers);

// find a single user by id
router.get("/:userId", findUserById);

// create a new user
router.post("/", createUser);

// update the user with the given id
router.put("/:userId", updateUser);

// delete the user with the given id
router.delete("/:userId", deleteUser);

// get all the addresses of the user with the given id
router.get("/:userId/addresses", findAddressesOfUserWithId);

// adds a new address to the address list of the user with the given id
router.post("/:userId/addresses", createAddressForUserWithId);

// find a specific address of the user with the given id
router.get("/:userId/addresses/:addressId", findUsersAddressWithId);

module.exports = router;