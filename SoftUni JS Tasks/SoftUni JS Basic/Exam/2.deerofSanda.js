function deerOfSanta(input) {
  let day = Number(input[0]);
  let foods = Number(input[1]);
  let foodFirstDeer = Number(input[2]);
  let foodSecondDeer = Number(input[3]);
  let foodThirdDeer = Number(input[4]);
  let firstDeer = day * foodFirstDeer;
  let secondDeer = day * foodSecondDeer;
  let thirdDeer = day * foodThirdDeer;
  let sum = firstDeer + secondDeer + thirdDeer;

  if (sum < foods) {
    let foodleft = foods - sum;
    console.log(`${Math.floor(foodleft)} kilos of food left.`);
  } else if (sum > foods) {
    let foodNeeded = sum - foods;
    console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
  }
}

deerOfSanta(["2", "10", "1", "1", "2"]);
