//jshint esversion:6

// importing dotenv package as said in documentation
require("dotenv").config();

// importing external node modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

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

// setting app to use session
app.use(session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: false
}));

// setting passport to initialize and use session
app.use(passport.initialize());
app.use(passport.session());

// setting mongoose
mongoose.set("useCreateIndex", true);

// creating mongo db connection
const DBUrl = "mongodb://localhost:27017/userDB";
mongoose.connect(DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// creating user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

// setting passport as a mongoose plugin
userSchema.plugin(passportLocalMongoose);

// creating user model ("collection manipulator")
const User = new mongoose.model("User", userSchema);

// setting passport to work with User model
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// login page
app.route("/login")
    .get(function (req, res) {
        res.render("login");
    })
    .post(function (req, res) {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        // using a login method provided by passport on the request
        req.login(user, function (err) {
            if (err) {
                console.log(err);
            } else {
                passport.authenticate("local")(req, res, function () {
                    // this happen after successful authentication
                    res.redirect("/secrets");
                });
            }
        });
    });

// register page
app.route("/register")
    .get(function (req, res) {
        res.render("register");
    })
    .post(function (req, res) {
        User.register({
                username: req.body.username
            }, req.body.password,
            function (err, user) {
                if (err) {
                    console.log(err);
                    res.redirect("/register");
                } else {
                    passport.authenticate("local")(req, res, function () {
                        // this happen after successful authentication
                        res.redirect("/secrets");
                    });
                }
            });
    });

// home page
app.route("/").get(function (req, res) {
    res.render("home");
});

// secrets page
app.route("/secrets")
    .get(function (req, res) {
        // if user already authenticated
        // allows him to render the page
        if (req.isAuthenticated()) {
            res.render("secrets");
        } else {
            res.redirect("/login");
        }
    });

// logout route
app.route("/logout")
    .get(function (req, res) {
        req.logout();
        res.redirect("/");
    });