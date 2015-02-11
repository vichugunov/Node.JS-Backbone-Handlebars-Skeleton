var path = require('path'),
    express = require('express'),
    exphbs  = require('express-handlebars');

var app = express();

// Configure paths to views and templates

var layoutsDir = path.resolve(__dirname, '../views/server/layouts');
var rootDir = path.resolve(__dirname, '../../');
var viewPaths = [
  path.resolve(__dirname, '../views/server'),
  layoutsDir,
  path.resolve(__dirname, '../views/templates')
];

// Configure handlebars engine to work with Express framework

var hbs = exphbs.create({
  partialsDir: viewPaths,
  layoutsDir: layoutsDir,
  defaultLayout: 'index'
});

// Express configurations

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', viewPaths);
app.use(express.static(rootDir));

// Configure routes

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);
