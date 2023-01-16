function catDiat(input){
  let fatsNumber = Number(input[0]);
  let fatsPrec = fatsNumber / 100;
  let proteinNumber = Number(input[1]);
  let proteinPrec = proteinNumber / 100;
  let carbsNumber = Number(input[2]);
  let carbsPrec = carbsNumber / 100;
  let allCal = Number(input[3]);
  let water = Number(input[4]);
  let waterPrec = water /100;

  let fatGrams = (allCal * fatsPrec)/9;
  let proteinGrams = (allCal * proteinPrec)/4;
  let carbsGrams = (allCal * carbsPrec)/4;

  let foodGrams = fatGrams + proteinGrams + carbsGrams;

  let caloriesWithWater = allCal / foodGrams;

  let calories = caloriesWithWater - (caloriesWithWater * waterPrec);

  console.log(calories.toFixed(4));
  


}
catDiat(["40",
"40",
"20",
"3000",
"40"]);