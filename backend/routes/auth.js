const router = require("express").Router();
const User = require("../models/user.js");

// ユーザー登録
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//ログイン機能

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("ユーザーが見つかりません");

    const validPassword = req.body.password === user.password;
    if (!validPassword) return res.status(400).send("パスワードが違います");
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// router.get("/", (req, res) => {
//   res.send("auth router");
// });

module.exports = router;
