//jshint esversion:6

// importing external modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// personal module date.js
const date = require(__dirname + "/date.js");

// creating an express app
const app = express();

// creating items array in the global scope
//let items = [];
const items = ["buy ingredients","cook meal","eat"];
const workItems = ["respond e-mails", "call boss"]

// setting express app to use ejs as view engine
app.set("view engine", "ejs");

// using bodyParser to read body responses
app.use(bodyParser.urlencoded({extended:true}));
// serving the public folder to client
app.use(express.static("public"));

// get response on "/"
app.get("/", function (req, res) {

    // using date.js module
    day = date.getDate();
    // day = date.getWeekday();
    
    // rendering html template on list.ejs, substituting
    // variables as shown below on js object argument
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

// post response on "/"
app.post("/", function (req, res) {
    console.log(req.body)
    // assigning item = request body new item
    let item = req.body.newItem;
    // checking from which list the posting is coming
    if (req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }  
});

app.get("/work", function (req, res){
    res.render("list", {
        listTitle: "work",
        newListItems: workItems
    });
})


app.get("/about", function (req, res){
    res.render("about", {});
})

app.listen(3000, function () {
    console.log("Starting server on port 3000 [OK]");
});