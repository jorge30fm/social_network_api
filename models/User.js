const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const Thought = require('./Thought')

const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
		},
		thoughts: [
			{
				type: Types.ObjectId,
				ref: "Thought",
			},
		],
		friends: [
			{
				type: Types.ObjectId,
				ref: "User",
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

UserSchema.virtual("friendCount").get(function () {
	return this.friends.length;
});
UserSchema.pre('remove', function(next){
	const Thoughts = mongoose.model("Thought")
	Thought.remove({_id: {$in: this.thoughts}})
})

const User = model("User", UserSchema);

module.exports = User;
