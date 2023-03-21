const robot = require('robotjs');
const pixelSearch = require("./modules/utils/pixelSearch")
const config = require("./config");

function main() {
	while (true) {
		const fishIcon = pixelSearch(config.coordinates.x, config.coordinates.y, config.coordinates.w, config.coordinates.h, config.coordinates.color);
		console.log(fishIcon)
	}
}

main();

