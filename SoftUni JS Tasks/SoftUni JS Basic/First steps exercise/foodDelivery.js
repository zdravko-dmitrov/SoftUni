function foodDeliver(input)
{
let numberChickenMenus = Number(input[0]);
let numberFishMenus = Number(input[1]);
let numberVegieMenus = Number(input[2]);
 
let chickenMenusPrice = numberChickenMenus * 10.35;
let fishMenusPrice = numberFishMenus * 12.40;
let vegieMenusPrice = numberVegieMenus * 8.15;
 
let allMenusPrice = chickenMenusPrice + fishMenusPrice + vegieMenusPrice;
 
let desertPrice = allMenusPrice * 0.2;
 
let allPrice = allMenusPrice + desertPrice + 2.50;
 
console.log(allPrice);
 
}
