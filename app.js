const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');
const app = express();
const https = require("https");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post('/', function(req, res) {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const mails = req.body.mail;
  const data = {
    members: [{
      email_address: mails,
      status: "subscribed",
      merge_fields: {
        FNAME: first,
        LNAME: last
      }
    }]
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us8.api.mailchimp.com/3.0/lists/39a2c37371";
  const options = {
    method: "POST",
    auth: "Bhavesh:a5d5c15acf14b6b179b5cf7c4d0653d8-us8"
  }
  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();

});
app.post("/failure", function(req, res) {
  res.redirect('/');
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is Running Wild");
});
// api key a5d5c15acf14b6b179b5cf7c4d0653d8-us8
// id 39a2c37371
// to add changes into the server 
// git add .
// git commit - "Edited"
// git push to heroku master
