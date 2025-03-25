
const  userModel  = require("../Models/userModel.js");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        msg: `User already exists with this email: ${email}`
      });
    }

    const hashpass = await bcrypt.hash(password, 10);

     await userModel.create({
      username,
      email,
      password: hashpass,
    });

    return res.status(201).json({
      msg: "User successfully registered",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        msg: "user is not found",
      });
    }

    const comparedPass = await bcrypt.compare(password, user.password);

    if (!comparedPass) {
      return res.json({
        msg: "invalid cridentials",
      });
    }

    const token = jwt.sign(
      { id: user._id, name: user.username, password: user.password },
      process.env.SECRET_KEY,
      { expiresIn: "1hr" }
    );

    return res.json({
      msg: "user is loged in successfulyy",
      token: token,
    });
  } catch (error) {
    console.log("error", error);
  }
};

const allUsers = async (req, res) => {
  const users = await userModel.find();

  if (users === 0) {
    return res.json({
      msg: "users is not available",
    });
  }

  return res.json({
    msg: "All users",
    data: users,
  });
};

module.exports = {
  register,
  login,
  allUsers,
};
