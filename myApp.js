var express = require("express");
require("dotenv").config();
var app = express();
process.env.MESSAGE_STYLE == "uppercase";
console.log(process.env.MESSAGE_STYLE);

//let app = express();
//console.log(process.env//.VARIABLE_ONE)

//app.use('/pics', express.static(__dirname + '/images'));
//console.log("Hello World");
/** app.get("/", (req,res)=>{
  res.send("Hello Express");

});*/

// app.get("/",function(req,res){
//res.sendFile(__dirname + "/views/index.html");
//});

app.use(express.static(__dirname + "/public"));

//serve json on a specific route
var message = { message: "Hello json" };
//app.get('/json',(request,response)=> {
//response.json(message);
//});

/**6)use the .env File to configure app*/

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
  app.use(express.static(__dirname + "/public"));
});
//7.use the .env file
app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE == uppercase) {
    response.json({ message: "HELLO JSON" });
  } else {
    response.json(message);
  }
});
module.exports = app;
