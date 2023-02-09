const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  location: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  date: {
    type: "date",
    default: Date.now(),
  },
});

//This pre method call before save method...
UserSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();

  //generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("user", UserSchema);
