// importing external modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// creating an express app
const app = express();

// creating items array in the global scope
//let items = [];
let items = ["buy ingredients","cook meal","eat"];

// setting express app to use ejs as view engine
app.set("view engine", "ejs");

// using bodyParser to read body responses
app.use(bodyParser.urlencoded({extended:true}));
// serving the public folder to client
app.use(express.static("public"));

// get response on "/"
app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let day = today.toLocaleDateString("en-US", options)

    // rendering html template on list.ejs, substituting
    // variables as shown below on js object argument
    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

// post response on "/"
app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    // refresh site
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Starting server on port 3000 [OK]");
});