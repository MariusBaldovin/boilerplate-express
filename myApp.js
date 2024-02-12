require("dotenv").config();

let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  var response = "Hello World";
  if (process.env.MESSAGE_STYLE === "allCaps") {
    response = response.toUpperCase();
  }
  res.json({ message: response });
});

module.exports = app;
