var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();


var exphbs = require('express-handlebars');


//static content
app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({
	extended: false
}));


//override with POST command
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js');
app.use('/', routes);


app.listen(process.env.PORT || 8080);
