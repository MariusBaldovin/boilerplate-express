require("dotenv").config();
var bodyParser = require("body-parser");

let express = require("express");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Root-level request logger middleware
app.use((req, res, next) => {
  // Log the method, path, and IP address of the request
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // Pass control to the next middleware/route handler
});

// Middleware function that adds the current time to req.time
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString(); // Add the current time to the request
    next(); // Pass control to the next middleware/handler
  },
  (req, res) => {
    // Final handler sends the time in JSON format
    res.json({ time: req.time });
  }
);

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

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});

app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`,
  });
});

module.exports = app;
