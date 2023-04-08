const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  // represents who commented
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  // represents what user has commented
  message: {
    type: String,
    required: true,
  },

  // represents on what post has the user commented
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
