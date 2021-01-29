const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// listening on a dynamic port defined by host or local port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("Starting server on port 3000 [OK]");
})

// making files in public folder accessible by client
app.use(express.static("public"));

// responding to get request on / route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

// responding to post request on / route
app.post("/", function(req, res) {

    // information from frontend
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;

    // creating js object with data 
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }

    // converting to JSON
    const jsonData = JSON.stringify(data);

    // API endpoint
    const url = "https://us7.api.mailchimp.com/3.0/lists/17986d4063"

    // reading API key from text file key.txt
    var keyData = fs.readFileSync("key.txt", "utf8");
    var apiKey = keyData.toString();      

    // request options
    const options = {
        method: "POST",
        auth: "anystring:" + apiKey 
    }

    // creating a request instance with https.request method
    const request = https.request(url, options, function(response) {
        
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        // logging response from API server
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

    // writing jsonData on server using request instance
    request.write(jsonData);
    request.end();

})

// response to try again button on failure page
app.post("/failure",function(req, res) {
    res.redirect("/")
})