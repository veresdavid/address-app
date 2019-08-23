const User = require("../../models/User");

module.exports = function(req, res) {

	const userId = req.params.userId;

	User.findByIdAndDelete(userId)
		.then(deletedUser => {

			// if delete was successfull, return the deleted user
			if(deletedUser){
				res.status(200).json(deletedUser);
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