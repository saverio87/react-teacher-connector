
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route  GET api/auth
// @desc   Test route
// @access Public

router.get('/', auth, async (req,res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    // in our middleware req.user was assigned the value of 'decoded.user' (an object). Here we want
    // to access its key 'id' to find a User with that
    // same id. We also want to leave out the password
    // to make it more secure
    res.json(user);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// All we have to do is to add 'auth' (the middleware we imported) as a second 
// parameter in router.get()

// @route  POST api/auth
// @desc   Authenticate user & get token
// @access Public

router.post('/', [
  check('email', 'Please include a valid email address').isEmail(),
  check('password','Please enter a password with 8 or more characters').exists()
],
async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  const {email, password} = req.body;

  try {
    // See if user exists

    let user = await User.findOne({email: email});

    if (!user) {
      return res
      .status(400)
      .json({errors: [{msg: 'Invalid credentials'}]})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    // The first parameter for bcrypt.compare is a
    // plain text password, which in this case is
    // entered by the use when they try to log in.
    // The second parameter for bcrypt.compare is an
    // encrypted password, which we can access by 
    // making a request to the database to find the
    // user. The encr. password is stored in user.pwd

    if (!isMatch) {
      return res
      .status(400)
      .json({errors: [{msg: 'Invalid credentials'}]})
    }

    // Return jsonwebtoken

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload,
      config.get('jwtToken'),
      {expiresIn: 36000},
      (err, token) => {
        if (err) throw err;
        res.json({token});
      });

  
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }

  console.log(req.body);
});

module.exports = router;