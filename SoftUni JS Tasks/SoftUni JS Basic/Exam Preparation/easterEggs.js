function easterEggs(input) {
  let eggsNumber = Number(input[0]);
  let redEggs = 0;
  let orangeEggs =  0;
  let blueEggs = 0;
  let greenEggs = 0;
  let maxEggs = Number.MIN_SAFE_INTEGER;
  let maxColor = "";

  for (let i = 1; i <= eggsNumber; i++) {
    let color = input[i];
    switch(color) {
      case "red":
      redEggs++;
      if(redEggs > maxEggs){
        maxEggs = redEggs;
        maxColor = color;
      }
      break;

      case "orange":
        orangeEggs++;
      if(orangeEggs > maxEggs){
        maxEggs = orangeEggs;
        maxColor = color;
      }

      break;

      case "blue":
        blueEggs++;
        if(blueEggs > maxEggs){
          maxEggs = blueEggs;
          maxColor = color;
        }

      break;

      case "green":
        greenEggs++;
        if(greenEggs > maxEggs){
          maxEggs = greenEggs;
          maxColor = color;
        }

      break;
    }
    
    
  }

console.log(`Red eggs: ${redEggs}`);
console.log(`Orange eggs: ${orangeEggs}`);
console.log(`Blue eggs: ${blueEggs}`);
console.log(`Green eggs: ${greenEggs}`);
console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);