function cristmasPreparation(input){
  let numberOfPaper = Number(input[0]);
  let numberOfPlat = Number(input[1]);
  let littersOfGlue = Number(input[2]);
  let discount = Number(input[3]);

  let discountPrec = discount / 100;

   let pricePaper = numberOfPaper * 5.80;
   let pricePlat = numberOfPlat * 7.20;
   let priceGlue = littersOfGlue * 1.20;

   let allPrice = pricePaper + pricePlat + priceGlue;

   let priceWithDiscount = allPrice - (allPrice * discountPrec);

   console.log(priceWithDiscount.toFixed(3));


}
cristmasPreparation(["4","2","5", "13"]);