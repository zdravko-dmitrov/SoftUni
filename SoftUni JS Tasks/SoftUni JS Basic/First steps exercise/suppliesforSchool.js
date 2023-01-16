function suppliesforSchool(input)
{
let numberPens = Number(input[0]);
let numberMarkers = Number(input[1]);
let litersCleaner = Number(input[2]);
let Discount = Number(input[3]);
let DiscountPresentage = Discount / 100;

let allPens = numberPens * 5.8;
let allMarkers = numberMarkers * 7.2;
let allCleaner = litersCleaner * 1.2;

let allPrices = allPens + allMarkers + allCleaner;

let priceWithDiscount = allPrices - (allPrices * DiscountPresentage);

console.log(priceWithDiscount);

}

suppliesforSchool(["2","3","4","25"])
