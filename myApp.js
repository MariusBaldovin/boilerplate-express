require("dotenv").config();

let express = require("express");
let app = express();

// Root-level request logger middleware
app.use((req, res, next) => {
  // Log the method, path, and IP address of the request
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // Pass control to the next middleware/route handler
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  let response = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  }
  res.json({ message: response });
});

module.exports = app;
