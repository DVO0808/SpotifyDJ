var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var models = require('../models');
var sha1 = require('sha1');
var cookie = require('cookie');
var cookies = {};

router.get('/', function (req, res){
	cookies = cookie.parse(req.headers.cookie || '');
	if(cookies.email && cookies.id){
		return res.redirect("/users/"+cookies.id);
	}

	models.Users.findAll().then(function (data) {
		res.render('index', {Users : data});
	});

});

router.post('/api/newuser', function(req, res) {
	var currentUser = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	};
	models.Users.create(currentUser).then(function() {
		models.Users.findOne(
			{
				where: {
					email: currentUser.email
				}
		}).then(function(user){
			setEmailCookie = cookie.serialize('email', currentUser.email);
			setIdCookie = cookie.serialize('id', user.id);
			res.setHeader("Set-Cookie", setEmailCookie);
			res.append("Set-Cookie", setIdCookie);
			var hash = '/users/'+user.id;
			res.json(user);
		});
	});
});


router.get('/users/:id?', function(req, res){
	var userID = req.params.id;
	console.log(userID)
	models.Users.findOne({ where: {id: userID} }).then(function (loggedUser){
		res.render('userView', {loggedUser: loggedUser});
	});
});

var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');

router.post('/login', function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	models.Users.findOne(
		{
			where: {
				email: email
			}
		}).then(function(result){
			if (result !== null){
				if(password === result.password){
					setEmailCookie = cookie.serialize('email', email);
					setIdCookie = cookie.serialize('id', result.id);
					res.setHeader("Set-Cookie", setEmailCookie);
					res.append("Set-Cookie", setIdCookie);
					var hash = '/users/'+result.id;
					res.json({url: hash});
				} else {
					res.json({errorMessage: 'Password Incorrect'});
				}
			} else {
				res.json({errorMessage: 'Incorrect Email'});
			}
	})
});

//create logout
router.get('/logout', function (req, res){
	res.clearCookie("email");
	res.clearCookie("password");
	res.clearCookie("id");
	res.json({});
});

module.exports = router;
