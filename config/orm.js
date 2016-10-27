var connection = require('./connection.js');

var orm = {
	selectAll: function (cb) {
		var queryString = 'SELECT * FROM burgers;';
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	},
	insertOne: function (burger_name, cb) {
		connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, false)', [burger_name], function(err, result) {
	      if (err) throw err;
	      cb(result);
	    });
	},
	updateOne: function (id, cb) {
		connection.query('UPDATE burgers SET devoured = true WHERE id = ?', [id], function(err, result) {
	      if (err) throw err;
	      cb(result);
	    });
	}
};

module.exports = orm;
