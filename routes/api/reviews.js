const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Review = require("../../models/Review");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route  GET api/reviews
// @desc   Get all reviews
// @access Private

router.get("/", auth, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  GET api/reviews/:review_id
// @desc   Get review by id
// @access Private

router.get("/:id", auth, async (req, res) => {
  try {
    const review = await Review.findOne({
      _id: req.params.id,
    });
    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.json(review);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route  POST api/reviews
// @desc   Create a review
// @access Private

router.post(
  "/",
  [
    auth,
    [check("formData", "You cannot send an empty review").not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Avatar is not stored in users anymore. Take the name and the avatar from the profile. Try this:

    //  try {
    //  const profile = await Profile.findOne({user:req.user.id}).
    //  populate("user", ["name"]);
    //
    //  const newReview = new Review ({
    //  ...,
    //  name: profile.name,
    //  avatar: profile.avatar,
    //})
    //
    //}
    try {
      const user = await User.findById(req.user.id).select("-password");

      const newReview = new Review({
        formData: req.body.formData,
        name: user.name,
        // this will not work
        avatar: user.avatar,
        user: req.user.id,
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
