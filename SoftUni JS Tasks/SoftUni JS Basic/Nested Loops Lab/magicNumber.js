function magic(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let magicNumber = Number(input[2]);
  let counter = 0;
  let isMagicNumber = false;

  for (let i = n1; i <= n2; i++) {
    for (let x = n1; x <= n2; x++) {
      counter++;
      if (i + x === magicNumber) {
        console.log(`Combination N:${counter} (${i} + ${x} = ${magicNumber})`);
        isMagicNumber = true;
        break;
      }
    }
    if (isMagicNumber) {
      break;
    }
  }
  if (isMagicNumber === false) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
magic(["23", "24", "20"]);
