function solve(fruit, weight, money) {
let weightKg = Number(weight) / 1000;
let costPerKg = weightKg * Number(money);
  let output = `I need $${costPerKg.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
  console.log(output);

}

solve('orange', 2500, 1.80);
//I need $4.50 to buy 2.50 kilograms orange.