

1) Make a new folder called Calculator on your Desktop

Warsama@DESKTOP-7IOR2SM MINGW64 ~
$ mkdir Calculator


2) Change Directory to this new folder

Warsama@DESKTOP-7IOR2SM MINGW64 ~
$ cd  Calculator

Warsama@DESKTOP-7IOR2SM MINGW64 ~ calculator
$ cd


3) Inside the Calculator folder, create a new file called calculator.js

Warsama@DESKTOP-7IOR2SM MINGW64 ~ calculator

$ touch calculator.js


5) Set up a new NPM package

Warsama@DESKTOP-7IOR2SM MINGW64 ~ calculator
$ npm init


6)Open the project folder in Atom

Warsama@DESKTOP-7IOR2SM MINGW64 ~ calculator
$  atom .


7) Using NPM install the express module

Warsama@DESKTOP-7IOR2SM MINGW64 ~/calculator
$ npm install express


8) Require express in your calculator.js
const express = require('express');

9)Setup express
const app = express();


10) Create a root route get method with app.get()

11)Send the words Hello World from the root route as the response

app.get('/', function (request, response) {
  response.send('hello word');

}
);



12)Spin up our server on port 3000 with app.listen

app.listen(3000, function () {
  console.log('server started on port 3000');
}
);

13) Run server with nodemon

Warsama@DESKTOP-7IOR2SM MINGW64 ~ calculator
$  nodemon calculator.js

<============================================================================>
Now when we use res.send, we’re sending individual bits of HTML data.

app.get('/', function (require, respond) {
  respond.send('hello');
  });

But if we want to send an entire web page, such as our index.html,
 we have to use something different.

 So if we head over to the Express API reference, and
 you can see it’s organized by which part you're looking

-express
-Application
-Request
-Response
-Router


So instead of just sending a relative file path, what we can do is
 we can use a constant that’s called

 app.get('/', function (require, respond) {
   respond.sendFile(__dirname);
   });

   app.get('/', function (req, res) {
     res.sendFile(__dirname + '/index.html');

   });
<=================================================================>

  <form action="/" method="post">

  app.post('/', function (req, res) {
    res.send('thanks for visting');

  });

<===================================================================>

We need to be able to get that data into here,
into this callback function, so we can calculate the output,

and then send the result back to the browser.
Now, in order to tap into those pieces of data,
 we have to install another NPM package, which is called Body Parser.


 Warsama@DESKTOP-7IOR2SM MINGW64 ~ calculator
 $ npm install body-parser


 this is going  to allow us to
  pass the information that we get sent from the post request.

  So now that we've installed body-parser and it's now inside
  our package.json as one of our dependencies,

  we can head over to our calculator.js, we can require it,
  so that we incorporate that package into

our current project. So we can create a new const that's called bodyParser,
 and it's going to be requiring
