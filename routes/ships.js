var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var pageHtml = '<p>Ships are used to traverse space and perform a variety of different tasks between traversing. All commanders begin the game with a <a href="#">Sidewinder MkI</a>. The player may upgrade components or purchase an entirely new ship based upon their needs and available funds. New ships can only be purchased at <a href="#">Stations</a> with the <a href="#">Shipyard</a> service. Modules can only be changed or upgrades at stations with the <a href="#">Outfitting</a> service.</p>';

	pageHtml += "<h3>Released Ships</h3>";

	pageHtml += '<p>Currently there are 33 playable ships, built by a number of manufacturers - each having its own unique style. Initially it was planned to have a total of 30 playable ships.<span class="cite"><a href="#">[1]</a></span></p>';

	pageHtml += '<ul>';
	pageHtml += '<li><a href="#"><a href="#">Sidewinder MkI</a></li>';
	pageHtml += '<li><a href="#">Eagle MkII</a></li>';
	pageHtml += '<li><a href="#">Hauler</a></li>';
	pageHtml += '<li><a href="#">Adder</a></li>';
	pageHtml += '<li><a href="#">Imperial Eagle</a></li>';
	pageHtml += '<li><a href="#">Viper MkIII</a></li>';
	pageHtml += '<li><a href="#">Cobra MkIII</a></li>';
	pageHtml += '<li><a href="#">Viper MkIV</a></li>';
	pageHtml += '<li><a href="#">Diamondback Scout</a></li>';
	pageHtml += '<li><a href="#">Cobra MkIV</a></li>';
	pageHtml += '<li><a href="#">Type-6</a></li>';
	pageHtml += '<li><a href="#">Diamonback Explorer</a></li>';
	pageHtml += '<li><a href="#">Imperial Courier</a></li>';
	pageHtml += '<li><a href="#">Keelback</a></li>';
	pageHtml += '<li><a href="#">Asp Scout</a></li>';
	pageHtml += '<li><a href="#">Vulture</a></li>';
	pageHtml += '<li><a href="#">Asp Explorer</a></li>';
	pageHtml += '<li><a href="#">Federal Dropship</a></li>';
	pageHtml += '<li><a href="#">Type-7</a></li>';
	pageHtml += '<li><a href="#">Federal Assault Ship</a></li>';
	pageHtml += '<li><a href="#">Imperial Clipper</a></li>';
	pageHtml += '<li><a href="#">Federal Gunship</a></li>';
	pageHtml += '<li><a href="#">Orca</a></li>';
	pageHtml += '<li><a href="#">Fer-de-Lance</a></li>';
	pageHtml += '<li><a href="#">Python</a></li>';
	pageHtml += '<li><a href="#">Type-9</a></li>';
	pageHtml += '<li><a href="#">Beluga Liner</a></li>';
	pageHtml += '<li><a href="#">Anaconda</a></li>';
	pageHtml += '<li><a href="#">Federal Corvette</a></li>';
	pageHtml += '<li><a href="#">Imperial Cutter</a></li>';
	pageHtml += '</ul>';

	pageHtml += "<h3>Ship Types</h3>";

	pageHtml += "<h4>Multipurpose</h4>";
	pageHtml += "<p>Multipurpose ships are a jack-of-all-trades in that they can easily be fitted for whatever role the player needs; whether it be hauling cargo, ship-to-ship combat, or exploring the stars, multipurpose ships can do it all. Multipurpose ships usually can do most jobs just as well if not better than comparable ships targeted towards those jobs.</p>";

	pageHtml += "<h4>Combat</h4>";
	pageHtml += "<p>Combat ships are usually faster, more agile and more heavily armed than other ships of the same size. The exception to this would be gun boats, which have more weapon mounts designed for turrets, but sacrifice their agility for them.</p>";

	pageHtml += "<h4>Freighter</h4>";
	pageHtml += "<p>Freighters are typically slow, cumbersome and lightly armed, but provide extreme hauling capabilities. Useful for traders and smugglers alike.</p>";

	res.render('wiki-page', { title: 'Ships', content: pageHtml});
});

router.get('/:name', function(req, res, next) {
	var shipName = req.params.name;
	var pageHtml = '<p>test ' + shipName + '</p>';

	res.render('wiki-page', { title: shipName, content: pageHtml});
});

module.exports = router;
