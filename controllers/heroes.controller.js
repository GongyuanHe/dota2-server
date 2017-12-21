var HEROES = require("../models/heroes.model");

var getHeroes = function (req,res) {
    res.send(HEROES);
}

module.exports = {
    getHeroes: getHeroes,
}