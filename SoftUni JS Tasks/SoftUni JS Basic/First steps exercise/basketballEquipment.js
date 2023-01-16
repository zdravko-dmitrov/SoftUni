function basketballEquipment(input)
{
let tax = Number(input[0]);
let sneekers = tax - (tax * 0.40);
let equipment = sneekers - (sneekers * 0.20);
let ball = equipment * 0.25;
let accesories = ball * 0.20;
 
let allprice= tax + sneekers + equipment + ball + accesories;
 
console.log(allprice);
 
}
