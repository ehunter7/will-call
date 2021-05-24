const router = require("express").Router();
const bcrypt = require("bcrypt.js");

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

router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  try{
    const user = await User.findOne({username});

    if(!user){

      return res.status(400).json({errors: [{ msg: "Invalid Credentials"}]});
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){

      return res.status(400).json({errors: [{ msg: "Invalid Credentials"}]});
    };

    req.login(user, () => {

      console.log("[INFO] user logged in: " + user);

      res.json(user);

    });

  } catch (error) {
    
    console.log('[WARNING] error logging in (login route)');
    console.log(error);
    res.status(500).json({message: "Server error"});
  }
})

module.exports = router;