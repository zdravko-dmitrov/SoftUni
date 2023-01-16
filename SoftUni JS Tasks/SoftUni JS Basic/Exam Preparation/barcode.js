function barcode(input) {
  let start = input[0];
  let end = input[1];

  let firstStartNumber = Number(start[0]);
  let secondStartNumber = Number(start[1]);
  let thirdStartNumber = Number(start[2]);
  let fourthStartNumber = Number(start[3]);
  let firstEndNumber = Number(end[0]);
  let secondEndNumber = Number(end[1]);
  let thirdEndNumber = Number(end[2]);
  let fourthEndNumber = Number(end[3]);
  let result = "";
  let endResult = "";

  for (let i = firstStartNumber; i <= firstEndNumber; i++) {
    if (i % 2 !== 0) {
      for (let j = secondStartNumber; j <= secondEndNumber; j++) {
        if (j % 2 !== 0) {
          for (let x = thirdStartNumber; x <= thirdEndNumber; x++) {
            if (x % 2 !== 0) {
              for (let y = fourthStartNumber; y <= fourthEndNumber; y++) {
                if (y % 2 !== 0) {
                  result = result + i + j + x + y;
                  endResult += result + " ";
                  result = "";
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(endResult);
}
