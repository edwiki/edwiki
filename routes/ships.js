var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');

router.get('/', function(req, res, next) {
	fs.readFile('data/ships/index.md', 'utf8', function(err, data) {
		if (err) {
			return res.render('wiki-page-edit', {
				title: 'Ships',
				toolbarActiveEdit: true,
				route: '/ships'
			});
		}

		var pageHtml = marked(data);
		res.render('wiki-page', {
			title: 'Ships',
			content: pageHtml,
			toolbarActiveView: true,
			route: '/ships'
		});
	});
});

router.get('/edit', function(req, res, next) {
	fs.readFile('data/ships/index.md', 'utf8', function(err, data) {
		if (err) {
			return res.render('wiki-page-edit', {
				title: 'Ships',
				toolbarActiveEdit: true,
				route: '/ships'
			});
		}

		res.render('wiki-page-edit', {
			title: 'Ships',
			markdown: data,
			toolbarActiveEdit: true,
			route: '/ships',
		});
	});
});

router.post('/edit', function(req, res, next) {
	var markdown = req.body.content;

	fs.writeFile('data/ships/index.md', markdown, function(err, data) {
		return res.redirect('/ships');
	});
});

router.get('/:name', function(req, res, next) {
	var shipName = req.params.name;
	fs.readFile('data/ships/' + shipName + '.md', 'utf8', function(err, data) {
		if (err) {
			return res.render('wiki-page-edit', {
				title: shipName,
				toolbarActiveEdit: true,
				route: '/ships/' + shipName
			});
		}

		var pageHtml = marked(data);
		res.render('wiki-page', {
			title: shipName,
			content: pageHtml,
			toolbarActiveView: true,
			route: '/ships/' + shipName
		});
	});
});

router.get('/:name/edit', function(req, res, next) {
	var shipName = req.params.name;
	fs.readFile('data/ships/' + shipName + '.md', 'utf8', function(err, data) {
		if (err) {
			return res.render('wiki-page-edit', {
				title: shipName,
				toolbarActiveEdit: true,
				route: '/ships/' + shipName
			});
		}

		res.render('wiki-page-edit', {
			title: shipName,
			markdown: data,
			toolbarActiveEdit: true,
			route: '/ships/' + shipName
		});
	});
});

router.post('/:name/edit', function(req, res, next) {
	var shipName = req.params.name;
	var markdown = req.body.content;

	fs.writeFile('data/ships/' + shipName + '.md', markdown, function(err, data) {
		return res.redirect('/ships/' + shipName);
	});
});

module.exports = router;
