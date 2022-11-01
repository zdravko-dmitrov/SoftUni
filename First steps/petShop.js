function petShop(input)
{
let dogFood = Number(input[0]);
let catFood = Number(input[1]);

let allFood = (dogFood * 2.5) + (catFood * 4);

console.log(allFood);
}

petShop(["5", "4"])