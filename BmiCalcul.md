1. Create a new file called bmiCalculator.html inside the Calculator

Warsama@DESKTOP-7IOR2SM MINGW64 ~ calculator
$ touch bmiCalculator.html


2. Add the HTML boilerplate and set the page title to BMI Calculator


3. Add an HTML form, this form will make a post request to our server at the route /bmicalculator.

  <form  action="/bmiCalculator" method="post">


4. Add a button which says “Caculate BMI”

5. Add the get and post methods for the /bmicalculator route into the same server.js file we've been using

app.get('/bmiCalculator', function (req, res) {});




6. Use sendFile() to send the bmiCalculator.html page as a response inside the get method.

app.get('/bmiCalculator', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');

});



7. Inside server.js , create 2 variables, one for weight and one for height.

app.post('/bmiCalculator', function (req, res) {

  var w = Number(req.body.w);
  var h = Number(req.body.h);

  var result = w + h;

  res.send('Le resultat du calcul est ' + result + ' BMI');

});

8. Use the BMI calculator code you wrote previously, or write
