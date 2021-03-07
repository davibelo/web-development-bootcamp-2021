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
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

// creating express app
const app = express();
// serving the public folder to client
app.use(express.static("public"));
// setting express app to use ejs as view engine
app.set("view engine", "ejs");
// using bodyParser to read body responses
app.use(bodyParser.urlencoded({
    extended: true
}));

// setting app to use session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

// setting passport to initialize and use session
app.use(passport.initialize());
app.use(passport.session());

// creating mongo db connection
const DBUrl = "mongodb://localhost:27017/userDB";
mongoose.connect(DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// setting mongoose
mongoose.set("useCreateIndex", true);

// creating user schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    googleId: String,
    secret: String
});

// setting passport as a mongoose plugin
userSchema.plugin(passportLocalMongoose);

// setting findOrCreat as a mongoose plugin
userSchema.plugin(findOrCreate);

// creating user model ("collection manipulator")
const User = new mongoose.model("User", userSchema);

// setting passport to work with User model
passport.use(User.createStrategy());

// setting passport serialize methods to work
// with all authentication strategies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/secrets"
    },
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        User.findOrCreate({
            googleId: profile.id
        }, function (err, user) {
            return cb(err, user);
        });
    }
));

// home page
app.route("/").get(function (req, res) {
    res.render("home");
});

// google authentication rout
app.get("/auth/google",
    passport.authenticate("google", {
        scope: ["profile"]
    }));

// google authentication callback route
app.get("/auth/google/secrets",
    passport.authenticate("google", {
        failureRedirect: "/login"
    }),
    function (req, res) {
        // Successful authentication, redirect to secrets
        res.redirect("/secrets");
    });

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

// submit page
app.route("/submit")
    .get(function (req, res) {
        if (req.isAuthenticated()) {
            res.render("submit");
        } else {
            res.redirect("/login");
        }
    })
    .post(function (req, res) {
        const submittedSecret = req.body.secret;
        // passport saves user info on req
        console.log(req.user);
        User.findById(req.user.id, function (err, foundUser) {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    foundUser.secret = submittedSecret;
                    foundUser.save(function () {
                        res.redirect("/secrets");
                    });
                }
            }
        });
    });

// secrets page
app.route("/secrets")
    .get(function (req, res) {
        // finding all users with secret not equal to null 
        User.find({
            "secret": {
                $ne: null
            }
        }, function (err, foundUsers) {
            if (err) {
                console.log(err);
            } else {
                if (foundUsers) {
                    res.render("secrets", {
                        usersWithSecrets: foundUsers
                    });
                }
            }
        });
    });

// logout route
app.route("/logout")
    .get(function (req, res) {
        req.logout();
        res.redirect("/");
    });

// starting server on port 3000
app.listen(3000, function () {
    console.log("----- Starting server on port 3000 [OK] -----");
});