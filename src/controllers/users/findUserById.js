const User = require("../../models/User");

module.exports = function(req, res) {

	const userId = req.params.userId;

	// find user by the id extracted from url path
	User.findById(userId)
		.then(user => {
			res.status(200).json(user);
		})
		.catch(error => {
			res.status(500).json(error);
		});

}