const router = require("express").Router();
// const bcrypt = require("bcrypt.js");
const bcrypt = require("bcrypt");
const { update } = require("../../models/user");
const User = require("../../models/user");

router.post("/newuser", async (req, res) => {
  const { username, fullname, password, role } = req.body;
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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      console.log("[WARNING] INVALID USER");
      res.send("499");
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("[WARNING] INVALID password");
      res.send("498");

      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    req.login(user, () => {
      console.log("[INFO] user logged in: " + user);

      res.json(user);
    });
  } catch (error) {
    console.log("[WARNING] error logging in (login route)");
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("logout", async (req, res) => {
  try {
    req.logOut();
    if (req.session) {
      req.session = null;
      res.status(204).end();
      res.redirect("/login");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log("[WARNING] logout error");
    console.log(error);
  }
});

router.get("/getusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log("[WARNING]  Error getting all users!");
    console.log(error);
  }
});

router.put("/updateUser", async (req, res) => {
  const { field, update } = req.body;

  const id = req.body.data._id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        [field.toLowerCase()]: update,
      },
      {
        new: true,
      }
    );
    console.log("====================================");
    console.log(updatedUser);
    console.log("====================================");
    return res.json(updatedUser);
  } catch (error) {
    console.log("====================================");
    console.log(`[WARNING] ${error}`);
    console.log("====================================");
  }
});

module.exports = router;
