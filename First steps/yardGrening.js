function yardGreening(input)
{
let yardsMeters = Number(input[0]);
let yardPrice = yardsMeters * 7.61;
let discount = yardPrice * 0.18;
let finalPrice = yardPrice - discount

console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);

}

yardGreening(["550"]);