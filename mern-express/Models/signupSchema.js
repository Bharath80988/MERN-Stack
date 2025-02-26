const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true }
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup; 
