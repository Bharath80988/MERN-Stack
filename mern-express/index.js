const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1> Welcome to Backend Server </h1>")
})

app.get("/Home",(req,res)=>{
    res.send("<h1> Welcome to Home </h1>")
})

app.get("/static",(req,res)=>{
    res.sendFile("E:\\MERN\\index.html")
})



const PORT = 3001;

app.listen(PORT, () => console.log("Server started Successfully"));
