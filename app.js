const express = require("express");
const { Http2ServerRequest } = require("http2");
const app = express();
const https = require("https");

app.get("/", function(req,res){
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Coquitlam&appid=dac3fe55cc61310aa8cac1d25538506f#"
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(weatherData);
            console.log(temp);
            res.write ("<p>temperature description is " + weatherDescription + "</p>");
            res.write("<h1>the temperature in London is" + temp + "degree celcius. </h1>")
            res.send();
        })
    })
})


app.listen(3000, function(){
    console.log("server is running on port 3000");
});