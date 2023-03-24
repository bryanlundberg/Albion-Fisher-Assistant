const {
  waitUntilMinigameStarts,
  waitUntilMinigameEnds,
} = require("./modules/utils/waitEvents");


function main() {
  while (true) {
    waitUntilMinigameStarts();
    waitUntilMinigameEnds();
  }
}

main();

