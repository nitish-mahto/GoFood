const User = require("../models/User");
const brcypt = require("bcrypt");

async function login(req, res, next) {
  let user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .lean()
    .exec();

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  res.send({ user: "Login Successful" });
}

async function register(req, res, next) {
  const salt = await brcypt.genSalt(10);
  let secPassword = await brcypt.hash(req.body.password, salt);
  try {
    let newUser = new User(req.body);
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.log("Error in Inserting : " + error);
  }
}

module.exports = {
  login,
  register,
};
