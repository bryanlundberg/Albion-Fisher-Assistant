const robot = require('robotjs');

function searchColor(xCoord, yCoord, width, height, color) {
	const img = robot.screen.capture(xCoord,yCoord,width,height);
	let foundPixel = false;
	for(let x = 0; x < width; x++) {
		for( let y = 0; y < height; y++) {
			const pixelColor = img.colorAt(x,y)
			if (color == pixelColor) {
				return { x: x+xCoord, y: y+yCoord};
			}
		}
	}
}

const coordenadas = searchColor(90, 158, 209, 219, 'ffffff');
console.log(coordenadas)




/* 
while (true) {
	const mouse = robot.getMousePos();
	const hex = robot.getPixelColor(mouse.x, mouse.y);
	console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
	const img = robot.screen.capture();
	console.log(img);
	
} */
