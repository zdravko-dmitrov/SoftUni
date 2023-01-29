function addAndSubstract(input) {
  let oldSum = 0;
  let newSum = 0;

  for (let i = 0; i < input.length; i++) {
    let currentNumber = input[i];
    oldSum += currentNumber;

    if (currentNumber % 2 === 0) {
      //even

      currentNumber += i;
      input[i] = currentNumber;
    } else {
      //odd
      currentNumber -= i;
      input[i] = currentNumber;
    }
    newSum += currentNumber;
  }
  console.log(input);
  console.log(oldSum);
  console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]);
console.log("------------------------");
addAndSubstract([-5, 11, 3, 0, 2]);
