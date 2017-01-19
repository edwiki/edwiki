var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	fs.readFile('data/ships/index.md', 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}
		var pageHtml = marked(data);
		res.render('wiki-page', { title: 'Ships', content: pageHtml});
	});
});

router.get('/:name', function(req, res, next) {
	var shipName = req.params.name;
	var pageHtml = '<p>test ' + shipName + '</p>';

	res.render('wiki-page', { title: shipName, content: pageHtml});
});

module.exports = router;
