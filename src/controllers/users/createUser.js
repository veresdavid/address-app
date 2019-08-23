const User = require("../../models/User");

module.exports = function(req, res) {

	// create a new User object from the request body
	const userBody = {
		name: req.body.name,
		email: req.body.email,
		addresses: []
	};

	const user = new User(userBody);

	// save and return the new user
	user.save()
		.then(savedUser => {
			res.status(200).json(savedUser);
		})
		.catch(error => {
			res.status(500).json(error);
		});

}