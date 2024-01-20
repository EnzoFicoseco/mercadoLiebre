const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.listen(3080, console.log("Server up on port: 3080"));

app.get("/", function(req, res){
    const homePath = path.join(__dirname, "/views/home.html");
    res.sendFile(homePath);
})
app.get("/registro", function(req, res){
    const homePath = path.join(__dirname, "/views/register.html");
    res.sendFile(homePath);
})
app.get("/login", function(req, res){
    const homePath = path.join(__dirname, "/views/login.html");
    res.sendFile(homePath);
})