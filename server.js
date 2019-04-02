const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
const helper = require('./helper/helper.js');



require('dotenv').config();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {
    weather: null,
    error: null,
    phrase: null
  });
})

app.post('/', function (req, res) {
  let apiKey = process.env.API_KEY;
  let zipcode = req.body.zip;
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`
  console.log(url);
  request(url, function (err, response, body) {
    if (err) {
      console.log(err);
      res.render('weather', {
        weather: null,
        phrase: null,
        error: 'Error, please try again, nothing returned'
      });
    } else {
      let weather = JSON.parse(body)
      console.log(weather);
      if (weather.main == undefined) {
        res.render('weather', {
          weather: null,
          phrase: null,
          error: 'Error, please try again, undefined'
        });
      } else {
        let temp = Math.round(weather.main.temp);
        let phrasetext = helper.temp(temp);
        res.render('weather', {
          weather: temp,
          error: null,
          phrase: phrasetext,
        });
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})