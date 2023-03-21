const robot = require('robotjs');

function pixelSearch(xPos, yPos, width, height, targetColor) {
  const capturedImage = robot.screen.capture(xPos, yPos, width, height);
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const pixelColor = capturedImage.colorAt(x, y);
      
      if (targetColor === pixelColor) {
        return { x: x + xPos, y: y + yPos };
      }
    }
  }
}

const coordenadas = pixelSearch(90, 158, 209, 219, 'ffffff');
console.log(coordenadas)


while (true) {
	const mouse = robot.getMousePos();
	const hex = robot.getPixelColor(mouse.x, mouse.y);
	console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
	const coordenadas = pixelSearch(90, 158, 209, 219, 'ffffff');
	console.log(coordenadas)
}
