const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const gravatar = require("gravatar");
//const normalize = require("normalize-url");
import normalizeUrl from "normalize-url";

// @route  POST api/users
// @desc   Register user
// @access Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email address").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists

      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Get users gravatar

      const avatar = normalizeUrl(
        gravatar.url(email, {
          s: "200",
          r: "pg",
          d: "mm",
        }),
        { forceHttps: true }
      );

      user = new User({
        name: name,
        email: email,
        avatar: avatar,
        password: password,
      });

      // Encrypt password

      const salt = await bcrypt.genSalt(10);
      // changing 'password' attribute of the new User instance, 'user'
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      // user.save() gives us a promise and we can then
      // access the user id, which thanks to Mongoose
      // we don't need to call using '_id', but simply
      // 'id'

      // Return jsonwebtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

    console.log(req.body);
  }
);

module.exports = router;
