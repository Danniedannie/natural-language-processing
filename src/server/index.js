const dotenv = require("dotenv");
dotenv.config();
var aylien = require("aylien_textapi");

const results = [];

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_PASSWORD
});

const express = require("express");

const app = express();

app.use(express.static("dist"));

const getAnalysis = async () => {
  await textapi.sentiment(
    // you would want to use the form field value
    { text: "John is a very good football player!" },
    function(error, response) {
      if (error === null) {
        results.push(response);
      } else {
        console.log(error);
      }
    }
  );
};

app.post("/test", async function(req, res, next) {
  await getAnalysis();
  res.send("success");
});

app.get("/all", getData);

function getData(req, res) {
  res.send(results);
  console.log(results);
}

app.listen(3000, function() {
  console.log("Example app listening on port 3030!");
});
