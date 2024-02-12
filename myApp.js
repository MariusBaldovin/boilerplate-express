require("dotenv").config();

let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

if (process.env.MESSAGE_STYLE === "uppercase") {
  let response = "Hello json".toUpperCase();
  app.get("/json", function (req, res) {
    res.json({ message: response });
  });
} else {
  app.get("/json", function (req, res) {
    res.json({ message: "Hello json" });
  });
}

module.exports = app;
