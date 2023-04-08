const express = require("express");
const {
  httpSignUp,
  httpLogin,
  httpLogout,
} = require("../../controllers/authControllers");
const authRouter = express.Router();

authRouter.post("/signup", httpSignUp);
authRouter.post("/login", httpLogin);
authRouter.get("/logout", httpLogout);
module.exports = authRouter;
