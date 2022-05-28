const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register User  : 
const registerUser = async (req, res) => {
  try {
    let { username, password, currentBalance } = req.body;
    let CryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.PASS_SEC
    ).toString();
    let user = new User(username, CryptedPassword, currentBalance);
    user = await user.save();
    console.log(user);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json(`Error occured in registration : ${err}`);
  }
};

// Login User : 
const loginUser = async (req, res) => {
  try {
    let {username} = req.body;
    let user = await User.findUser(username);
    console.log(user) ; 
    if (!user) {
      return res.status(404).json("User not found!");
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (OriginalPassword !== req.body.password) {
      return res.status(401).json("Wrong Password!");
    }
    const accessToken = jwt.sign(
        {
            // id: user.id
            username: user.username
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
    );

    const { password, ...others } = user;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(`Error occured in login : ${err}`);
  }
};

module.exports = { registerUser, loginUser };
