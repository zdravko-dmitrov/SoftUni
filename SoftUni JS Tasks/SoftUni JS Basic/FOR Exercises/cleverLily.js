function cleverLily(input){
let age = Number(input[0]);
let priceLoundry = Number(input[1]);
let toyPrice = Number(input[2]);
let totalMoney = 0;
let evenBdayMoney = 10;

for(let i = 1; i<= age;i++){
  if(i % 2 === 0){
totalMoney = totalMoney + (evenBdayMoney - 1);
evenBdayMoney = evenBdayMoney + 10;
  }
  else{
totalMoney = totalMoney + toyPrice;
  }
}
if(totalMoney >= priceLoundry){
  let moneyLeft = totalMoney - priceLoundry;
  console.log(`Yes! ${moneyLeft.toFixed(2)}`);
} else{

  let moneyNeeded = priceLoundry - totalMoney;
  console.log(`No! ${moneyNeeded.toFixed(2)}`);
}

}
cleverLily(["10","170.00","6"]);
