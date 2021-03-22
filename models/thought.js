const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction.js");
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const User = model("Thought", ThoughtSchema);

module.exports = User;
