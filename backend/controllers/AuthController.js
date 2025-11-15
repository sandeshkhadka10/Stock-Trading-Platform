const { UsersModel } = require("../model/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports.Signup = async (req, res, next) => {
  const { email, password, username, createdAt } = req.body;
  const existingUser = await UsersModel.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const noneExistingUser = await UsersModel.create({
    username,
    email,
    password: hashedPassword,
    createdAt,
  });

  const token = createSecretToken(noneExistingUser._id);
  // store token inside session
  req.session.user = {
    id: noneExistingUser._id,
    token: token,
  };

  res.cookie("token", token, { 
    httpOnly: true, 
    maxAge: 7*24*60*60*1000 // 7 days
  }); 

  res.status(201).json({
    message: "User signed in successfully",
    noneExistingUser,
  });
  // next();
};

module.exports.Login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "All fields are required" });
  }
  const existingUser = await UsersModel.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({ message: "User doesn't exist" });
  }
  const auth = await bcrypt.compare(password, existingUser.password);
  if (!auth) {
    return res.status(401).json({ message: "Incorrect email or password", existingUser });
  }
  const token = createSecretToken(existingUser._id);

  // store token inside session
  req.session.user = {
    id: existingUser._id,
    token: token,
  };

  res.cookie("token", token, { 
    httpOnly: true, 
    maxAge: 7*24*60*60*1000 // 7 days
  }); 

  res.status(201).json({ message: "User logged in successfully" });
};

module.exports.Logout = (req, res) => {
  // destroy the session on logout
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
  });

  // clear the session cookie
  res.clearCookie("connect.sid");

  // clear the jwt cookie
  res.clearCookie("token");

  res.status(200).json({ message: "Logged out successfully" });
};

module.exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  const existingUser = await UsersModel.findOne({ email });
  if (!existingUser) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const resetCode = Math.floor(10000 + Math.random() * 90000).toString();
  const expires = new Date(Date.now() + 1 * 60 * 1000);

  existingUser.resetCode = resetCode;
  existingUser.resetCodeExpires = expires;
  await existingUser.save();

  // Email sending
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Code",
    text: `Your password reset code is: ${resetCode}.It will expire in 1 Minutes`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reset code send to your email" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send reset code" });
  }
};

module.exports.resetPassword = async (req, res) => {
  const { email, resetCode, newPassword } = req.body;
  const existingUser = await UsersModel.findOne({ email });

  if (
    !existingUser ||
    String(existingUser.resetCode).trim() !== String(resetCode).trim()
  ) {
    return res.status(400).json({ message: "Invalid code or email" });
  }

  if (Date.now() > new Date(existingUser.resetCodeExpires).getTime()) {
    return res.status(400).json({ message: "Reset Code expired" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  existingUser.password = hashedPassword;
  existingUser.resetCode = undefined;
  existingUser.resetCodeExpires = undefined;
  await existingUser.save();

  return res.status(200).json({ message: "Password reset successfully" });
};
