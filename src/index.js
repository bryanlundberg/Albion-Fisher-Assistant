const robot = require("robotjs");
const {
  waitUntilMinigameStarts,
  waitUntilMinigameEnds,
} = require("./modules/utils/waitEvents");


function main() {
  while (true) {
    waitUntilMinigameStarts();
    robot.mouseToggle("down");
    waitUntilMinigameEnds();
  }
}

main();

