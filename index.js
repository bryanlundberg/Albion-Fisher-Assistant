const robot = require("robotjs");

while (true) {
	const mouse = robot.getMousePos();
	const hex = robot.getPixelColor(mouse.x, mouse.y);
	console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
}
