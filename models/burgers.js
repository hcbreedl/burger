var orm = require('../config/orm.js');

var burgers = {
	all: function (cb) {
		orm.selectAll(function (res) {
			cb(res);
		});
	},
	new: function (burger_name, cb) {
		var burgerName = burger_name;
		orm.insertOne(burgerName, function (res) {
			cb(res);
		});
	},
	update: function (id, cb) {
		orm.updateOne(id, function (res) {
			cb(res);
		});
	}
};

module.exports = burgers;
