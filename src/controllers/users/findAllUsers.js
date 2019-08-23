const User = require("../../models/User");

module.exports = function(req, res) {

	// find all users
	User.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(error => {
			res.status(500).json(error);
		});

}