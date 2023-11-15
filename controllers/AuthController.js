const bcrypt = require("bcrypt");
const Auth = require("../models/Auth");
const asyncHandler = require("express-async-handler");
// login
const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid credentials. User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: "Invalid credentials. Incorrect password." });
    }

    const token = { userId: user._id, role: user.role, email: user.email };
    res.status(200).json({
      success: true,
      data: token,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
});


module.exports = {
  login
};
