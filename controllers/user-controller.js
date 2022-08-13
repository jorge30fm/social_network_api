const { User, Thought } = require("../models");

const userController = {
	getAllUsers(req, res) {
		User.find({})
			.populate({
				path: "friends",
				options: { select: "-__v -email -thoughts -friends" },
			})
			.lean()
			.populate({
				path: "thoughts",
				select: "-__v",
			})
			.select("-__v")
			.then((dbUserData) => res.json(dbUserData))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	getUserById({ params }, res) {
		User.findOne({ _id: params.userId })
			.populate({
				path: "thoughts",
				select: "-__v",
			})
			.populate({
				path: "friends",
				options: { select: "-__v -email -thoughts -friends" },
			})
			.lean()
			.select("-__v")
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: "No user found with this id!" });
					return;
				}
				res.json(dbUserData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	addUser({ body }, res) {
		User.create(body)
			.then((dbUserData) => res.json(dbUserData))
			.catch((err) => res.status(400).json(err));
	},
	removeUser({ params }, res) {
		User.findOneAndDelete({ _id: params.userId })
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: "No user found with this id!" });
					return;
				}
				res.json(dbUserData);
			})
			.catch((err) => res.status(400).json(err));
	},
	updateUser({ params, body }, res) {
		User.findOneAndUpdate({ id: params.userId }, body, {
			new: true,
			runValidators: true,
		})
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: "No user found with this id!" });
					return;
				}
				res.json(dbUserData);
			})
			.catch((err) => res.status(400).json(err));
	},
	addFriend({ params, body }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId },
			{ $push: { friends: params.friendId } },
			{ new: true, runValidators: true }
		)
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: "No user found with this id!" });
					return;
				}
				res.json(dbUserData);
			})
			.catch((err) => res.json(err));
	},
	removeFriend({ params }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId },
			{ $pull: { friends: params.friendId } },
			{ new: true }
		)
			.then((dbUserData) => res.json(dbUserData))
			.catch((err) => res.json(err));
	},
};

module.exports = userController;
