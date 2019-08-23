const User = require("../../models/User");

module.exports = function(req, res) {

	const userId = req.params.userId;

	// find the user with the given id
	User.findById(userId)
		.then(user => {

			if(user){

				// if we have found the user, update it's fields
				user.name = req.body.name;
				user.email = req.body.email;
				user.addresses = req.body.addresses;

				user.save()
					.then(updatedUser => {
						res.status(200).json(updatedUser);
					})
					.catch(error => {
						res.status(500).json(error);
					});

			}else{
				// if theres no such user, return an error object
				res.status(400).json({
					error: "There is no such user with the given id!"
				});
			}

		})
		.catch(error => {
			res.status(500).json(error);
		});

}