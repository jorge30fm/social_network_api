const { Thought } = require("../models");

const thoughtControler = {
	getAllThoughts(req, res) {
		Thought.find({})
			.select("-__v")
			.then((dbThoughtData) => res.json(dbThoughtData))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	getThoughtById({ params }, res) {
		Thought.findOne({ _id: params.thoughtId })
			.select("-__v")
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res.status(404).json({ message: "No thought with this id found" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	addThought({ body }, res) {
		Thought.create(body)
			.then((dbThoughtData) => res.json(dbThoughtData))
			.catch((err) => res.status(400).json(err));
	},
	editThought({ params, body }, res) {
		Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
			new: true,
			runValidators: true,
		})
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res.status(404).json({ message: "No thoought with this id found!" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => res.status(400).json(err));
	},
	deleteThought({ params }, res) {
		Thought.findOneAndDelete({ _id: params.thoughtId })
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res.status(404).json({ message: "No thought with this id found!" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => res.status(400).json(err));
	},
	addReaction({ params, body }, res) {
		Thought.findOneAndUpdate(
			{ _id: params.thoughtId },
			{ $push: { reactions: body } },
			{ new: true, runvalidators: true }
		)
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res.status(404).json({ message: "No thought with this id found!" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	},
	deleteReaction({ params }, res) {
		Thought.findOneAndUpdate(
			{ _id: params.thoughtId },
			{ $pull: { reactions: { reactionId: params.reactionId } } },
			{ new: true }
		)
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res
						.status(404)
						.json({ message: "No thought or reaction found with given id's" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => {
				res.status(400).json({ err });
			});
	},
};
module.exports = thoughtControler;
