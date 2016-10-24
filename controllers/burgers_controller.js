// Inside the burgers_controller.js file, import the following:
// Express
// burger.js

var express = require('express');
var burgers = require('./../models/burgers.js');
// var orm = require('./../config/orm.js');
var router = express.Router();

// Create the router for the app, and export the router at the end of your file.

router.get('/', function(req,res) {
	burgers.all(function (data) {
		var hbsObject = { burgers: data };
		res.render('index', {burgers: data});
	});
});

router.post('/create', function(req,res){
    // orm.insertOne(req.body.burger_name);
    var burgerName = req.body.burger_name;
    burgers.new(burgerName, function () {
    	res.redirect('/');
    }); 
});

router.put('/update', function(req,res){
	var ID = req.body.id;
	burgers.update(ID, function () {
		res.redirect('/');
	});
});

module.exports = router;