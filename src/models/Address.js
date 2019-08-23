const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AddressSchema = new Schema({
	id: ObjectId,
	country: String,
	city: String,
	street: String,
	houseNumber: Number
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;