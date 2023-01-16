function darts(input) {
  let index = 0;
  let initialPoints = 301;
  let successfulShotsCounter = 0;
  let unsuccessfulShotsCounter = 0;
  // let pointsReceived = 0;
  let playerName = input[index]; // i = 0
  index++; // i = 1
  let currentInput = input[index]; // i = 1

  while (currentInput !== "Retire") {
    let sectorField = currentInput;
    index++; // i = 2
    let pointsReceived = Number(input[index]); // i = 2
    index++; // i = 3
    switch (sectorField) {
      case "Single":
        pointsReceived *= 1;
        break;
      case "Double":
        pointsReceived *= 2;
        break;
      case "Triple":
        pointsReceived *= 3;
        break;
      default:
        break;
    }
    if (pointsReceived > initialPoints) {
      unsuccessfulShotsCounter++;
      currentInput = input[index]; // i = 3
      // return;
    }
    if (initialPoints === 0) {
      console.log(
        `${playerName} won the leg with ${successfulShotsCounter} shots.`
      );
      break;
    } else if (pointsReceived <= initialPoints) {
      successfulShotsCounter++;
      initialPoints -= pointsReceived;
      currentInput = input[index]; // i = 3
    }
  }
  if (currentInput === "Retire") {
    console.log(
      `${playerName} retired after ${unsuccessfulShotsCounter} unsuccessful shots.`
    );
  }
}

darts([
  "Michael van Gerwen",
  "Triple",
  "20",
  "Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
]);
