const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const Signup = require("./Models/signupSchema.js");
const jwt=require("jsonwebtoken");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = 2000;

mdb
  .connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MDB Connection Successful"))
  .catch((err) => console.log("Check your connection string", err));

app.post("/signup", async (req, res) => {
  try {
    console.log("Signup Request for:", req.body.email);
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", isSignUp: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSignup = new Signup({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignUp: true });
  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({ message: "Signup Unsuccessful", isSignUp: false });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "Account Not Found", isLoggedin: false });
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Incorrect Password", isLoggedin: false });
    }

    res.status(200).json({ message: "Login Successful", isLoggedin: true });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Login Error", isLoggedin: false });
  }
});

app.get("/getsignupdetails", async (req, res) => {
  try {
    const signupDetails = await Signup.find();
    res.status(200).json(signupDetails);
  } catch (error) {
    console.log("Error fetching signup details:", error);
    res.status(500).json({ message: "Failed to retrieve data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
