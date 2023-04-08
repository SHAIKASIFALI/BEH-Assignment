const express = require("express");

const { isLoggedIn } = require("../../middlewares/authMiddlewares");
const { httpCreateComment } = require("../../controllers/commentControllers");

const commentRouter = express.Router();
// now we will add the routes to the comments
commentRouter.post("/:postId/comments", isLoggedIn, httpCreateComment); // this add the comment to the post that has same postid
module.exports = commentRouter;
