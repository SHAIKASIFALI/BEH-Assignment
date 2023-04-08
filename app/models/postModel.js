const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  // represents the one who has created a post
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // list of all the comments on the particular post
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
