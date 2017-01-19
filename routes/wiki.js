var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');
var capitalize = require('capitalize')

router.get('/:category', function(req, res, next) {
	var category = req.params.category;
	var categoryCap = capitalize.words(category);

	fs.readFile('data/' + category + '/index.md', 'utf8', function(err, data) {
		if (err) {
			if (!req.user) return res.redirect('/');
			return res.render('wiki-page', {
				title: categoryCap,
				breadcrumbs: [
					{ title: categoryCap }
				],
				toolbarActiveView: true,
				route: '/wiki/' + category
			});
		}

		var pageHtml = marked(data);
		res.render('wiki-page', {
			title: categoryCap,
			breadcrumbs: [
				{ title: categoryCap }
			],
			content: pageHtml,
			toolbarActiveView: true,
			route: '/wiki/' + category
		});
	});
});

router.get('/:category/edit', function(req, res, next) {
	var category = req.params.category;
	if (!req.user) return res.redirect('/wiki/' + category);
	var categoryCap = capitalize.words(category);

	fs.readFile('data/' + category + '/index.md', 'utf8', function(err, data) {
		if (err) {
			return res.render('wiki-page-edit', {
				title: categoryCap,
				breadcrumbs: [
					{ title: categoryCap }
				],
				toolbarActiveEdit: true,
				route: '/wiki/' + category
			});
		}

		res.render('wiki-page-edit', {
			title: categoryCap,
			breadcrumbs: [
				{ title: categoryCap }
			],
			markdown: data,
			toolbarActiveEdit: true,
			route: '/wiki/' + category
		});
	});
});

router.post('/:category/edit', function(req, res, next) {
	var category = req.params.category;
	if (!req.user) return res.redirect('/wiki/' + category);
	var categoryCap = capitalize.words(category);
	var markdown = req.body.content;

	fs.writeFile('data/' + category + '/index.md', markdown, function(err, data) {
		return res.redirect('/wiki/' + category);
	});
});

router.get('/:category/:page', function(req, res, next) {
	var category = req.params.category;
	var categoryCap = capitalize.words(category);
	var page = req.params.page;
	fs.readFile('data/' + category + '/' + page + '.md', 'utf8', function(err, data) {
		if (err) {
			return res.render('wiki-page', {
				title: page,
				breadcrumbs: [
					{ title: categoryCap, href: '/wiki/' + category },
					{ title: page }
				],
				toolbarActiveView: true,
				route: '/wiki/' + category + '/' + page
			});
		}

		var pageHtml = marked(data);
		res.render('wiki-page', {
			title: page,
			breadcrumbs: [
				{ title: categoryCap, href: '/wiki/' + category },
				{ title: page }
			],
			content: pageHtml,
			toolbarActiveView: true,
			route: '/wiki/' + category + '/' + page
		});
	});
});

router.get('/:category/:page/edit', function(req, res, next) {
	var category = req.params.category;
	var categoryCap = capitalize.words(category);
	var page = req.params.page;
	if (!req.user) return res.redirect('/wiki/' + category + '/' + page);

	fs.readFile('data/' + category + '/' + page + '.md', 'utf8', function(err, data) {
		if (err) {
			return res.render('wiki-page-edit', {
				title: page,
				breadcrumbs: [
					{ title: categoryCap, href: '/wiki/' + category },
					{ title: page }
				],
				toolbarActiveEdit: true,
				route: '/wiki/' + category + '/' + page
			});
		}

		res.render('wiki-page-edit', {
			title: page,
			breadcrumbs: [
				{ title: categoryCap, href: '/wiki/' + category },
				{ title: page }
			],
			markdown: data,
			toolbarActiveEdit: true,
			route: '/wiki/' + category + '/' + page
		});
	});
});

router.post('/:category/:page/edit', function(req, res, next) {
	var category = req.params.category;
	var categoryCap = capitalize.words(category);
	var page = req.params.page;
	if (!req.user) return res.redirect('/wiki/' + category + '/' + page);
	var markdown = req.body.content;

	fs.writeFile('data/' + category + '/' + page + '.md', markdown, function(err, data) {
		return res.redirect('/wiki/' + category + '/' + page);
	});
});

module.exports = router;
