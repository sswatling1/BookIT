var express = require("express");
var Controller = require("./controllers/Controller");

//Create an instance of an express app
var app = express();

//Set up the template engine
app.set("view engine", "ejs");

//Use static files
app.use(express.static("./public"));

//Execute controllers
Controller(app);

//Listen at a port
var port = 3000;
app.listen(port);
console.log("Listening on port - " + port);