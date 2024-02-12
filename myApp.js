require("dotenv").config();

let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

var response = "Hello World".toUpperCase();

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: response });
  } else {
    message: "Hello World";
  }
});

module.exports = app;
