const express = require("express");
const { Http2ServerRequest } = require("http2");
const app = express();
const https = require("https");

app.get("/", function(req,res){
    res.send("server is up and running");
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Coquitlam&appid=dac3fe55cc61310aa8cac1d25538506f#"
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp
            console.log(weatherData);
            console.log(temp);
            const object = {
                name: "Shanu",
                fav: "rice"
            }
            JSON.stringify(object);
            console.log(object);
        })
    })
})


app.listen(3000, function(){
    console.log("server is running on port 3000");
});