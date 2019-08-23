const User = require("../../models/User");

module.exports = function(req, res) {

	const userId = req.params.userId;

	User.findById(userId)
		.populate("addresses")
		.exec()
		.then(user => {

			// if we have found the user return it's addresses
			if(user){
				res.status(200).json(user.addresses);
			}
			// if there is no user with the given id, return an error object
			else{
				res.status(400).json({
					error: "There is no such user with the given id!"
				});
			}

		})
		.catch(error => {
			res.status(500).json(error);
		});

}