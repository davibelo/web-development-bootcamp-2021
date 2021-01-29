// import express package
const express = require("express");

// impost body-parser
// body-parser makes possible to read body response parameters
const bodyParser = require("body-parser");

// making an express app with express() method
const app = express();
// making express app to use body parser
app.use(bodyParser.urlencoded({extended:true}));

// server response to the get request from a client on route "/"
app.get("/", function(req, res){
    // this __dirname sends the path where the project is stored
    res.sendFile(__dirname + "/index.html"); 
});

// server response to the get request from a client on route "/bmicalculator"
app.get("/bmicalculator", function(req, res){
    // this __dirname sends the path where the project is stored
    res.sendFile(__dirname + "/bmicalculator.html"); 
});

// server response to the post request from a client on route "/"
app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is: " + result);
});

// server response to the post request from a client on route "/bmicalculator"
app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var resultBMI = weight/(height*height);
    res.send("The BMI is: " + resultBMI);
});

// listening on port 3000
app.listen(3000, function(){
    console.log("Starting server on port 3000 [OK]");
});

