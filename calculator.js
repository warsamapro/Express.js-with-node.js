//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');

});

app.post('/', function (req, res) {

  var nun1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num2 + num2;

  res.send('Le resultat du calcul est' + result);

});




//------------------------------------------------

//Use sendFile() to send the bmiCalculator.html page
//as a response inside the get method

app.get('/bmiCalculator', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');

});

app.post('/bmiCalculator', function (req, res) {

  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);

  var result = w / (h * h);

  res.send('votre bmi est ' + result);

});

app.listen(1717, function () {
  console.log('server is running on port 3000 .');
});
