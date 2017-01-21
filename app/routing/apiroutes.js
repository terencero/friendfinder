var path = require('path');

var friendsData = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		friendsData.push(req.body);
		var diff = [];
		for(i=0; i<friendsData.length; i++) {
			var result = req.body.scores[i] - friendsData.scores[i];
			diff.push(Math.abs(result));
		}
		diff.sort(function(a, b){
		return a-b;

	});
		console.log(diff[0]);
		res.json(diff[0]);
	});

};