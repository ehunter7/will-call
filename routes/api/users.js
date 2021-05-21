const router = require("express").Router();
const bcrypt = require("bcrypt.js");
//! need to create model
const User = require("../../models/user");

router.post("/newuser", async (req, res) => {
  console.log("[INFO] (users.js route) req.body: " + req.data);
  const { username, fullname, password, role } = req.data;
  try {
    const user = new User({
      username,
      fullname,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "[WARNING] Server error, user post route." });
  }
});
