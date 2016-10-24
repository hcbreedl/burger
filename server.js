var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var orm = require('./config/orm.js');
// var burgers = require('./models/burgers.js');
// var router = require('./controllers/burgers_controller.js');
var connection = require('./config/connection.js');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//=======================================================

// app.get('/', function(req,res) {
//     connection.query('SELECT * FROM plans;', function(err, data) {
//       if (err) throw err;

//       res.render('index', {plans: data});

//     });
// });

// app.delete('/delete', function(req,res){
//     connection.query('DELETE FROM burgers WHERE id = ?', [req.body.id], function(err, result) {
//       if (err) throw err;
//       res.redirect('/');
//     });
// });

// burgers.all();
// burgers.new();
// burgers.update();

// router.get();
// router.new();
// router.update();

app.get('/', function(req,res) {
	orm.selectAll(function (result) {
		data = result;
		console.log(data);
		res.render('index', {burgers: data});
	});
});

app.post('/create', function(req,res){
    orm.insertOne(req.body.burger_name);
    res.redirect('/');
});

app.put('/update', function(req,res){
    orm.updateOne(req.body.id)
    res.redirect('/');
});

var port = 3000;
app.listen(port);
