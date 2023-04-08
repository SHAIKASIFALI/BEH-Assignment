const express = require("express");
const authRouter = require("./auth");
const postRouter = require("./posts");
const userRouter = require("./users");
const commentRouter = require("./comments");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/posts", postRouter, commentRouter);
apiRouter.use("/users", userRouter);
module.exports = apiRouter;
