const User = require("../models/userModel");
const { generateJwtToken } = require("../utils/authUtils");

const httpSignUp = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).send({
      data: user._id,
      success: true,
      msg: `user created succesfully in the database`,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: `something worng occurred while creating a user in db`,
    });
  }
};

const httpLogin = async (req, res) => {
  try {
    //first match the password
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.verifyPassword(password)))
      return res.status(401).json({
        err: `email or password is incorrect`,
      });

    // now generate the jwt token
    const jwtToken = await generateJwtToken(user._id, email);
    // send the jwttoken and refresh token in httpheaders
    res.set(`x-access-token`, jwtToken);
    //return the jwt token
    return res.status(200).send({
      data: user._id,
      sucess: true,
      msg: `sucessfully logged in the user`,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: `something worng occurred while logging in the  a user in db`,
    });
  }
};

const httpLogout = async (req, res) => {
  try {
    // return the res with authentication headers set as none
    res.set("x-access-token", null);
    return res.status(200).send({
      success: true,
      msg: `user logged out successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: `something worng occurred while logging out a user`,
    });
  }
};

module.exports = {
  httpSignUp,
  httpLogin,
  httpLogout,
};
