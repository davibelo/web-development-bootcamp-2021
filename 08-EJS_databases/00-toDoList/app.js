//jshint esversion:6

// importing external modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// personal module date.js
const date = require(__dirname + "/date.js");

// creating an express app
const app = express();

// connecting to local mongodb database
mongoose.connect("mongodb://localhost:27017/todolistDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// creating items Schema
const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// creating a items Model
const Item = mongoose.model("Item", itemsSchema);

// creating items to start db
const item1 = new Item({
    name: "Welcome to your todolist!"
});
const item2 = new Item({
    name: "Hit the + button to add a new item"
});
const item3 = new Item({
    name: "<--- Hit  this to delete an item"
});
const defaultItems = [item1, item2, item3];

// setting express app to use ejs as view engine
app.set("view engine", "ejs");

// using bodyParser to read body responses
app.use(bodyParser.urlencoded({
    extended: true
}));
// serving the public folder to client
app.use(express.static("public"));

// get response on "/"
app.get("/", function (req, res) {

    // using date.js module
    day = date.getDate();
    // day = date.getWeekday();

    // reading items database
    Item.find({}, function (err, foundItems) {
        if (err) {
            console.log(err);
        } else {
            console.log("Successful query on database");
        }
        // inserting default items on database if it is empty
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successful saved default items on database');
                }
            });
            res.redirect("/");
        } else {
            // rendering html template on list.ejs, substituting
            // variables as shown below on js object argument
            res.render("list", {
                listTitle: day,
                newListItems: foundItems
            });
        }
    });
});

// post response on "/"
app.post("/", function (req, res) {
    // assigning item = request body new item
    const itemName = req.body.newItem;
    const item = new Item({
        name: itemName
    });
    item.save();
    res.redirect("/");
});

// post response on "/delete"
app.post("/delete", function (req, res) {
    const checkedItemId = req.body.checkbox;
    console.log(checkedItemId);
    Item.deleteOne({
        _id: checkedItemId
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Successful deleted checked item');
        }
    });
    res.redirect("/");
});

app.get("/about", function (req, res) {
    res.render("about", {});
});

app.listen(3000, function () {
    console.log("----- Starting server on port 3000 [OK] -----");
});