
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", function(req, res){
    res.send("<h1>Node.js server running...</h1>")
})

app.listen(3000, function(){
    console.log("Starting server on port 3000 [OK]")
})
