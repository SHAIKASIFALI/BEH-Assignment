const express = require("express");
const {
  httpCreatePost,
  httpGetAllPosts,
  httpUpdatePost,
  httpDeletePost,
} = require("../../controllers/postControllers");
const { isLoggedIn } = require("../../middlewares/authMiddlewares");

const postRouter = express.Router();

// all these routes the user to logged in

postRouter.get("/", isLoggedIn, httpGetAllPosts);
postRouter.post("/", isLoggedIn, httpCreatePost);
postRouter.patch("/:postId", isLoggedIn, httpUpdatePost);
postRouter.delete("/:postId", isLoggedIn, httpDeletePost);
module.exports = postRouter;
