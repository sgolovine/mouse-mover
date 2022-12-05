// Move the mouse across the screen as a sine wave.
const robot = require("robotjs");

(() => {
  console.clear();
  console.log("Mouse Mover is running. Press CTRL + C to exit.");
  // Speed up the mouse.
  robot.setMouseDelay(2);

  const twoPI = Math.PI * 2.0;
  const screenSize = robot.getScreenSize();
  const height = screenSize.height / 2 - 10;
  const width = screenSize.width;

  let x;

  while (true) {
    if (x > width / 2) {
      x = 0;
    }
    for (x = 0; x < width; x++) {
      y = height * Math.sin((twoPI * x) / width) + height;
      robot.moveMouse(x, y);
    }
  }
})();
