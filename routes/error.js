var express = require('express');
var router = express.Router();

router.get('/404', function(req, res, next) {
	var path = req.query.path;
	console.log(path);

	res.render('404', {
		title: 'Page not found',
		path: path
	});
});

module.exports = router;
