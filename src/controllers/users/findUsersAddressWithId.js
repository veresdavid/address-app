const User = require("../../models/User");
const Address = require("../../models/Address");

module.exports = function(req, res) {

	const userId = req.params.userId;
	const addressId = req.params.addressId;

	User.findById(userId)
		.then(user => {

			// if we have found the user and it has the address id in it's list, return the address object
			if(user && user.addresses.includes(addressId)){

				Address.findById(addressId)
					.then(address => {
						res.status(200).json(address);
					})
					.catch(error => {
						res.status(500).json(error);
					});

			}
			// upon error, return an error object
			else{
				res.status(500).json({
					error: "The given user does not have an address with the given id!"
				});
			}

		})
		.catch(error => {
			res.status(500).json(error);
		});

}