const robot = require("robotjs");
const pixelSearch = require("./modules/utils/pixelSearch");
const config = require("./config");

let minigameStarted = null;
let minigameFinished = false;
let hold = false;

function main() {
  while (true) {
    while (minigameStarted === null) {
      minigameStarted = pixelSearch(
        config.coordinates.x,
        config.coordinates.y,
        config.coordinates.w,
        config.coordinates.h,
        config.coordinates.color
      );
      console.log("searching minigame");
    }

    console.log("minigame started");
    robot.mouseToggle("down");
    hold = true;
    minigameFinished = false;
    minigameStarted = null;

    while (minigameFinished === false) {
      console.log("minigame loop");
      while (hold === true) {
        console.log("searching end reference");
        const endReference = pixelSearch(
          config.endGameReference.x,
          config.endGameReference.y,
          config.endGameReference.w,
          config.endGameReference.h,
          config.endGameReference.color
        );
        if (endReference !== null) {
          minigameFinished = true;
					hold = false;
          robot.mouseToggle("up");
					break;
        }
        console.log("searching right reference");
        const rightRefence = pixelSearch(
          config.gameReferenceRight.x,
          config.gameReferenceRight.y,
          config.gameReferenceRight.w,
          config.gameReferenceRight.h,
          config.gameReferenceRight.color
        );
        if (rightRefence !== null) {
          hold = false;
          robot.mouseToggle("up");
        }
      }

      while (hold === false) {
        console.log("searching left reference");
        const endReference = pixelSearch(
          config.endGameReference.x,
          config.endGameReference.y,
          config.endGameReference.w,
          config.endGameReference.h,
          config.endGameReference.color
        );
        if (endReference !== null) {
          minigameFinished = true;
					hold = false;
          robot.mouseToggle("up");
					break;
        }
        const leftReference = pixelSearch(
          config.gameReferenceLeft.x,
          config.gameReferenceLeft.y,
          config.gameReferenceLeft.w,
          config.gameReferenceLeft.h,
          config.gameReferenceLeft.color
        );
        if (leftReference !== null) {
          hold = true;
          robot.mouseToggle("down");
        }
      }
    }
  }
}


main();
