const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "MyNameisNitishKumarBijayMahtoIamfromvalsad";

async function login(req, res, next) {
  let user = await User.findOne({
    email: req.body.email,
  });
  // await user.comparePasswords(req.body.password)

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, jwtSecret);
    if (result === true) res.status(200).json({ result: authtoken });
    else res.status(400).send({ result: "User not found" });
  });
}

async function register(req, res, next) {
  try {
    let newUser = new User(req.body);
    let cpwd = req.body.cpassword;
    let pwd = req.body.password;

    if (cpwd === pwd) {
      await newUser.save();
      res.json({ success: true });
    }else{
      res.json({ success: false});
    }
  } catch (error) {
    console.log("Error in Inserting : " + error);
  }
}

async function foodData(req, res, next) {
  try {
    res.status(200).send(global.food_Item);
  } catch (error) {
    console.log("Error Food Data: " + error.message);
  }
}

module.exports = {
  login,
  register,
  foodData,
};
