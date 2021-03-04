//jshint esversion:6

// importing dotenv package as said in documentation
require("dotenv").config();

// importing external node modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

// creating express app
const app = express();

// setting express app to use ejs as view engine
app.set("view engine", "ejs");

// using bodyParser to read body responses
app.use(bodyParser.urlencoded({
    extended: true
}));

// serving the public folder to client
app.use(express.static("public"));

// starting server on port 3000
app.listen(3000, function () {
    console.log("----- Starting server on port 3000 [OK] -----");
});

// creating mongo db connection
const DBUrl = "mongodb://localhost:27017/userDB";
mongoose.connect(DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// creating user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

// defining encryption key and encrypted fields
const key = process.env.KEY;
userSchema.plugin(encrypt, {
    secret: key,
    encryptedFields: ['password']
});

// creating user model ("collection manipulator")
const User = new mongoose.model("User", userSchema);

// login page
app.route("/login")
    .get(function (req, res) {
        res.render("login");
    })
    .post(function (req, res) {
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({
            email: username
        }, function (err, foundUser) {
            if (err) {
                console.log(err);
            } else {
                if (foundUser.password === password) {
                    res.render("secrets");
                } else {
                    res.send("Login failed");
                }
            }
        });
    });

// register page
app.route("/register")
    .get(function (req, res) {
        res.render("register");
    })
    .post(function (req, res) {
        const newUser = new User({
            email: req.body.username,
            password: req.body.password
        });
        newUser.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.render("secrets");
                console.log("New user successful created");
            }
        });
    });

// home page
app.route("/").get(function (req, res) {
    res.render("home");
});