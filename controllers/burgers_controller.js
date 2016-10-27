var express = require('express');
var burgers = require('../models/burgers.js');
var router = express.Router();

router.get('/', function(req,res) {
	burgers.all(function (data) {
		var hbsObject = { burgers: data };
		res.render('index', {burgers: data});
	});
});

router.post('/create', function(req,res){
    var burgerName = req.body.burger_name;
    burgers.new(burgerName, function () {
    	res.redirect('/');
    });
});

router.put('/update', function(req,res){
	var id = req.body.id;
	burgers.update(id, function () {
		res.redirect('/');
	});
});

module.exports = router;
