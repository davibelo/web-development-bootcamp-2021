// import express package
const express = require("express")

// making an express app with express() method
const app = express()

// log requests on "/" and send text to browser
// "/" is the home route
// req = request, res = response
app.get("/", function(req, res){
    //console.log(req)
    res.send("<h1>Node.js server running...</h1>")
})

// Adding response for the "/contact" route
app.get("/contact", function(req, res){
    res.send("<h2>Contact at davibelo@gmail.com</h2>")
})

// Adding response for the "/about" route
app.get("/about", function(req, res){
    res.send("<h2>I am Davi Belo, a node.js programmer</h2>")
})

// listening on port 3000
app.listen(3000, function(){
    console.log("Starting server on port 3000 [OK]")
})

