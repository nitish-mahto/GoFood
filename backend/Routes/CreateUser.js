const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email", "Please Enter Valid Email").isEmail(),
    body("name", "Name Character at least 5 Characters").isLength({ min: 5 }),
    body("password", "Password Character at least 5 Characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log("Error in Insert User's Data : " + error.message);
    }
  }
);

module.exports = router;
