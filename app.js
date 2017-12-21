var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var heroesController = require("./controllers/heroes.controller");

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/heroes",heroesController.getHeroes);

app.listen(3000);
console.log("server started");
