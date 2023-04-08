const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

const httpCreateComment = async (req, res) => {
  try {
    const userId = req.headers[`userId`];
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      res.status(400).send({
        err: `post is not found it may have got deleted`,
      });
    }
    const commentObj = {
      userId: userId,
      postId: postId,
      message: req.body.message,
    };

    const comment = await Comment.create(commentObj);

    post.comments.push(comment._id);
    await post.save();
    return res.status(201).send({
      data: comment,
      success: true,
      msg: `comment successfully created for the requested post`,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: `there was a problem while creating comment`,
    });
  }
};

module.exports = {
  httpCreateComment,
};
