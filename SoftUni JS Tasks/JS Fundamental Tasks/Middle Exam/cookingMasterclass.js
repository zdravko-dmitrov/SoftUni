function cookingMasterclass(input) {
 
  let arr = input.map(Number);
  let budget = arr[0];
  let studentsCount = arr[1];
  let priceOfFlour = arr[2];
  let priceOfEgg = arr[3];
  let priceOfApron = arr[4];
  let twenty = Math.ceil(studentsCount * 0.2);
  let eggPrice = priceOfEgg * 10 * studentsCount;
  let freePack = 0;


  if (studentsCount % 5 === 0) {
      freePack++;
      freePack = freePack + priceOfFlour;
  }

  let total = priceOfApron * (studentsCount + twenty) + eggPrice + priceOfFlour * (studentsCount - freePack);



  if (total <= budget) {
      console.log(`Items purchased for ${total.toFixed(2)}$.`);
  } else {
      let neededMoney = total - budget;
      console.log(`${neededMoney.toFixed(2)}$ more needed.`);
  }
}

cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);