//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

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
const DBUrl = "mongodb://localhost:27017/wikiDB";
mongoose.connect(DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// creating articles schema
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// creating article model ("collection manipulator")
const Article = new mongoose.model("Article", articleSchema);

// API according to RESTFul principles

// articles route
app.route("/articles") // using chain handlers below
    // fetch all articles 
    .get(function (req, res) {
        Article.find({}, function (err, foundArticles) {
            if (err) {
                res.send(err);
            } else {
                res.send(foundArticles);
            }
        });
    })

    // create new article
    .post(function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("New article successful saved");
            }
        });
    })

    // delete all the articles
    .delete(function (req, res) {
        Article.deleteMany({}, function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("All articles successful deleted");
            }
        });
    });

// specific article ID route
app.route("/articles/:articleId")
    // Fetch one specific article
    .get(function (req, res) {
        Article.find({
            _id: req.params.articleId
        }, function (err, foundArticle) {
            if (err) {
                res.send(err);
            } else {
                res.send(foundArticle);
            }
        });
    })

    // Update the entire article
    .put(function (req, res) {
        Article.updateOne({
            _id: req.params.articleId
        }, {
            title: req.body.title,
            content: req.body.content
        }, {
            overwrite: true
        }, function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("Article successful updated");
            }
        });
    })

    // Update only title of specific article
    .patch(function (req, res) {
        Article.update({
                _id: req.params.articleId
            }, {
                $set: req.body
                // req.body is a object with only the fields passed by client
                // so, it can be passed directly to operator $set 
            },
            function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Article successful updated");
                }
            });
    })

    // delete the specific article
    .delete(function (req, res) {
        Article.deleteOne({
            _id: req.params.articleId
        }, {
            title: req.body.title,
            content: req.body.content
        }, function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("Article successful deleted");
            }
        });
    });