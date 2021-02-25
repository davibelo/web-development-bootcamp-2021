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

// to allow dynamic creation of custom lists
// it will be created lists collection
// with ebbeded items collections

// creating a custom list Schema
const listsSchema = new mongoose.Schema({
    name: String,
    items: [itemsSchema]
});

// creating a List Model
const List = mongoose.model("List", listsSchema);

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
    // not relevant on below code, just example of
    // using external module
    day = date.getDate();
    console.log(day);
    // day = date.getWeekday();

    // naming main list
    const listName = "Today";

    // reading all items database
    Item.find({}, function (err, foundItems) {
        if (err) {
            console.log(err);
        } else {
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
                    listTitle: listName,
                    newListItems: foundItems
                });
            }
        }
    });
});

app.get("/:customListName", function (req, res) {
    const customListName = req.params.customListName;

    List.findOne({
        name: customListName
    }, function (err, foundList) {
        if (err) {
            console.log(err);
        } else {
            // if foundList doesn't exists
            if (!foundList) {
                // create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });
                list.save();
                res.redirect("/" + customListName);
            } else {
                // show an existing list
                console.log(foundList);
                res.render("list", {
                    listTitle: foundList.name,
                    newListItems: foundList.items
                });
            }
        }
    });
});

// post response on "/"
app.post("/", function (req, res) {

    // assigning itemName = request body new item
    const itemName = req.body.newItem;
    // assigning listName = request body list from submit button
    const listName = req.body.list;
    // creating new item document
    const item = new Item({
        name: itemName
    });

    // test if user is on main list    
    if (listName === "Today") {
        item.save();
        res.redirect("/");
        // if user is on a custom list
    } else {
        // find the list in database and saving new item
        List.findOne({
            name: listName
        }, function (err, foundList) {
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
});

// post response on "/delete"
app.post("/delete", function (req, res) {
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    // checking if the main list
    if (listName === "Today") {
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
    } else {
        // if it is a custom list
        List.findOneAndUpdate({
                // querying list name
                name: listName
            }, {
                // using mongo db $pull operator
                $pull: {
                    // name of the array inside the list
                    items: {
                        // condition to find item to pull from array
                        _id: checkedItemId
                    }
                }
            },
            function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successful deleted checked item');
                    res.redirect("/" + listName);
                }
            });
    }
});

app.get("/about", function (req, res) {
    res.render("about", {});
});

app.listen(3000, function () {
    console.log("----- Starting server on port 3000 [OK] -----");
});