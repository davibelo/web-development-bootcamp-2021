const express = require("express")
// using native https module
const https = require("https")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended: true}))

// listening on port 3000
app.listen(3000, function () {
    console.log("Starting server on port 3000 [OK]")
})

// responding to get request on / route
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

// responding to post request / route
app.post("/", function (req, res){    
    
    const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather"
    const city = req.body.cityName
    const apiKey = "21c1fb51be9fe4ef6dc902b8c7ebc268"
    const units = "metric"
    const url = apiEndPoint + "?q=" + city + "&appid=" + apiKey + "&units=" + units
    
    // accessing weather API, getting data and sending to client
    https.get(url, function (response) {
        console.log("statusCode", response.statusCode)
        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            
            // writing response of post request
            res.write("<h1>The temperature in " + city + " is " + temp + " oC</h1>")
            res.write("<h2>The weather is currently " + weatherDescription + "</h2>")
            res.write("<img src=" + imageURL + ">")
            res.send()
        })
    })
})

