function treasureHunt(input) {
  let state = input.shift().split("|");
  let command = input.shift();
  while (command !== "Yohoho!") {
    tokens = command.split(" ");
    let action = tokens.shift();

    switch (action) {
      case "Loot":
        for (let el of tokens) {
          if (state.includes(el)) {
            continue;
          }
          state.unshift(el);
        }
        break;
      case "Drop":
        let index = Number(tokens[0]);
        if (index < 0 || index > state.length - 1) {
          command = input.shift();
          continue;
        }
        let el = state.splice(index, 1);
        state.push(el);
        break;
      case "Steal":
        let count = Number(tokens[0]);
        let elements = state.splice(-count);
        console.log(elements.join(", "));
        break;
    }
    command = input.shift();
  }

  if (state.length == 0) {
    console.log("Failed treasure hunt.");
  } else {
    let sum = 0;
    for (el of state) {
      sum += el.length;
    }
    let avg = sum / state.length;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",

  "Loot Wood Gold Coins",

  "Loot Silver Pistol",

  "Drop 3",

  "Steal 3",

  "Yohoho!",
]);
console.log("--------------------------------");

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",

  "Loot Wood Gold Coins",

  "Loot Silver Pistol",

  "Drop 3",

  "Steal 3",

  "Yohoho!",
]);
