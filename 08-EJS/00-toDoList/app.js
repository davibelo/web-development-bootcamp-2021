
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

// setting express app to use ejs as view engine
app.set("view engine", "ejs")

app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    
    if (currentDay === 6 || currentDay === 0){
        day = "Weekend";        
    } else {
        day = "Weekday";
    }
    // rendering html template on list.ejs, substituting
    // variables as shown below on js object argument
    res.render("list",{kindOfDay: day}); 
})

app.listen(3000, function(){
    console.log("Starting server on port 3000 [OK]");
})
