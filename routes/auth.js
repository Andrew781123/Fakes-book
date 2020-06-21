const express = require("express");
const router = express.Router();
const passport = require("passport");
const authroizeUser = require("../middleware/auth");

router.get("/", authroizeUser, (req, res) => {
  if (req.user) return res.status(200).json({ user: req.user });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  if (typeof req.user.username === "undefined") {
    res.redirect(`http://localhost:3000/newUser?id=${req.user._id.toString()}`);
  } else res.redirect("http://localhost:3000/");
});

router.get("/login/success", authroizeUser, (req, res) => {
  res.status(200).json({ user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/auth/login");
});

module.exports = router;
