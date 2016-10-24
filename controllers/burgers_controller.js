// Inside the burgers_controller.js file, import the following:
// Express
// burger.js

var express = require('express');
var burgers = require('./../models/burgers.js');
var app = express();

// Create the router for the app, and export the router at the end of your file.

var router = {
	get: function () {
		app.get('/', function(req,res) {
		    burgers.all();
		});
	},
	// new: function () {
	// 	app.post('/create', function(req,res){
	// 	    burgers.new();
	// 	});
	// },
	// app.delete('/delete', function(req,res){
	//     connection.query('DELETE FROM quotes WHERE id = ?', [req.body.id], function(err, result) {
	//       if (err) throw err;
	//       res.redirect('/');
	//     });
	// });
	// update: function () {
	// 	app.put('/update', function(req,res){
	// 		burgers.update();
	// 	});
	// }
};

module.exports = router;