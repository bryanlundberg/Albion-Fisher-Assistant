const robot = require('robotjs');

function pixelSearch(xPos, yPos, width, height, targetColor) {
  const capturedImage = robot.screen.capture(xPos, yPos, width-xPos, height-yPos);
  let cc = null;
  for (let x = 0; x < capturedImage.width; x++) {
    for (let y = 0; y < capturedImage.height; y++) {
      const pixelColor = capturedImage.colorAt(x, y);
      if (pixelColor === targetColor) {
        cc = { x: x + xPos, y: y + yPos };
        break;
      }
    }
    if (cc !== null) {
      break;
    }
  }
  return cc;
}

module.exports = pixelSearch;
