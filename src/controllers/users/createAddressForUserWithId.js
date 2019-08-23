const User = require("../../models/User");
const Address = require("../../models/Address");

module.exports = function(req, res) {

	const userId = req.params.userId;

	const addressBody = {
		country: req.body.country,
		city: req.body.city,
		street: req.body.street,
		houseNumber: req.body.houseNumber
	};

	// first we check if the user with the given exists
	User.findById(userId)
		.then(user => {

			if(user){
				
				// check if we already have an address with the same data
				Address.findOne(addressBody)
					.then(foundAddress => {

						if(foundAddress){

							// if the user already has the address in the list, dont add it again
							if(user.addresses.includes(foundAddress._id)){
								res.status(400).json({
									error: "User already has the given address!"
								});
								return;
							}

							// if we found the address in the db, just push it to the list
							user.addresses.push(foundAddress._id);

							// then save the user and return the address object
							user.save()
								.then(savedUser => {
									res.status(200).json(foundAddress);
								})
								.catch(error => {
									res.status(500).json(error);
								});

						}else{

							// if there is no such address yet, first we save it
							const addressToSave = new Address(addressBody);

							addressToSave.save()
								.then(savedAddress => {

									// then push the new address' id to the user's address list
									user.addresses.push(savedAddress._id);

									// then save the user and return the new address object
									user.save()
										.then(savedUser => {
											res.status(200).json(savedAddress);
										})
										.catch(error => {
											res.status(500).json(error);
										});

								})
								.catch(error => {
									res.status(500).json(error);
								});

						}

					})
					.catch(error => {
						res.status(500).json(error);
					});

			}else{
				// if the user does not exist, return an error object
				res.status(500).json({
					error: "There is no such user with the give id!"
				});
			}

		})
		.catch(error => {
			res.status(500).json(error);
		});

}