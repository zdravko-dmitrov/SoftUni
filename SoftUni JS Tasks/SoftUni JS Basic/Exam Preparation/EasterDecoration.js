function easterDecoration(input) {
  let index = 0;
  let clients = Number(input[index]);
  index++;
  
  let sum = 0;
  let avarage = 0;
  let countProducts = 0;

  for (i = 0; i < clients; i++) {
    let product = input[index];
  index++;
    while (product !== "Finish") {
      switch (product) {
        case "basket":
          sum = sum + 1.50;
          countProducts++;

          break;
        case "wreath":
          sum = sum + 3.80;
          countProducts++;
          break;

        case "chocolate bunny":
          sum = sum + 7;
          countProducts++;
          break;

        default:
          break;
      }
      product = input[index];
      index++;
    }
    if(countProducts % 2 === 0){
      sum = sum - (sum * 0.2);
    }
    console.log(`You purchased ${countProducts} items for ${sum.toFixed(2)} leva.`);
    avarage = avarage + sum;
    countProducts = 0;
    sum = 0;
  }
  console.log(`Average bill per client is: ${(avarage/clients).toFixed(2)} leva.`);
}
easterDecoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
