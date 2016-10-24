var orm = require('./../config/orm.js');

var burgers = {
	all: function () {
		orm.selectAll(function (result) {
			data = result;
			console.log(data);
			res.render('index', {burgers: data});
		});
	}
	// new: function () {
	// 	orm.insertOne();
	// },
	// update: function () {
	// 	orm.updateOne();
	// }
};

// var all = orm.selectAll();

module.exports = burgers;