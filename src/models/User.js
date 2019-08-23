const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
	id: ObjectId,
	name: String,
	email: String,
	addresses: [{ type: ObjectId, ref: "Address" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;