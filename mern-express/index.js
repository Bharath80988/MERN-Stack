const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./Models/signupSchema");


const app = express();
app.use(express.json());
const PORT = 3001;
dotenv.config();

// console.log("mongodb+srv://admin:Bharath@2005@mernbharath.mhkgb.mongodb.net/")

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongo DB connection successfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/static", (req, res) => {
  res.sendFile("D:\\MERN_Stack\\HTML_CSS\\index.html");
});

app.post("/signup", (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const newSignup = new Signup({
      firstName: "Bharath",
      lastName: "D",
      email: "bharath.com",
      password: "sjit",
      phoneNumber: 9344816453,
    });
    newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "signup successfull", isSignup: true });
  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "signup unsuccessfull", isSignup: false });
  }
});

app.listen(PORT, () => console.log("Server Started successfully."));
