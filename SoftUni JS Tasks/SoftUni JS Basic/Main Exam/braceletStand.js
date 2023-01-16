function braceletStand(input){
  let dailySaves = Number(input[0]);
  let dailyWins = Number(input[1]);
  let expenses = Number(input[2]);
  let giftPrice = Number(input[3]);

  let fiveDaySaves = dailySaves * 5;
  let winMoney = dailyWins * 5;
  let allSavedMoney = fiveDaySaves + winMoney;

  let leftMoney = allSavedMoney - expenses;

  let moneyNeeded = giftPrice - leftMoney;

  if(leftMoney >= giftPrice){
    console.log(`Profit: ${leftMoney.toFixed(2)} BGN, the gift has been purchased.`);
  } else{
    console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
  }


}
braceletStand(["5.12","32.05","15","15"]);