function repainting(input)
{
  let naylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let hoursWork = Number(input[3]);
 
let allNaylon = (naylon + 2) * 1.5;
let allPaint = (paint + (paint * 0.10)) * 14.50;
let allThinner = thinner * 5.00;
 
let allNeedsPrice = allNaylon + allPaint + allThinner + 0.40;
let workPrice = (allNeedsPrice * 0.30) * 8;
 
let allCost = allNeedsPrice + workPrice;
 
 
console.log(allCost);
 
}

repainting(["10","10","12","8"])