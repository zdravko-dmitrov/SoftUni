function memoryGame(arr) {
  let sequence = arr.shift().split(" ");
  let index = 0;
  let moves = 0;
  while (arr[index] !== "end") {
      let indexes = arr[index].split(" ").map(Number);
      moves++;
      if ((indexes[0] < 0 || indexes[0] >= sequence.length) || (indexes[1] < 0 || indexes[1] >= sequence.length) || indexes[0] === indexes[1]) {
          let middle = Math.ceil(sequence.length / 2);
          sequence.splice(middle, 0, `-${moves}a`, `-${moves}a`);
          console.log("Invalid input! Adding additional elements to the board");
      } else {
          if (sequence[indexes[0]] === sequence[indexes[1]]) {
              let firstEl = sequence[indexes[0]];
              let secondEl = sequence[indexes[1]];
              console.log(`Congrats! You have found matching elements - ${sequence[indexes[0]]}!`);
              sequence.splice(sequence.indexOf(firstEl), 1);
              sequence.splice(sequence.indexOf(secondEl), 1);
          } else if (sequence[indexes[0]] !== sequence[indexes[1]]) {
              console.log("Try again!");
          }
          if (sequence.length === 0) {
              return console.log(`You have won in ${moves} turns!`);
          }
      }
      index++;
  }
  console.log("Sorry you lose :(");
  console.log(sequence.join(" "));
}
memoryGame([
"1 1 2 2 3 3 4 4 5 5",
  "1 0",
  "-1 0",
  "1 0",
  "1 0",
  "1 0",
  "end"
]);
memoryGame([
  "a 2 4 a 2 4",
  "0 3",
  "0 2",
  "0 1",
  "0 1",
  "end"
]
);

memoryGame(["b b c c", "4 3", "end"])