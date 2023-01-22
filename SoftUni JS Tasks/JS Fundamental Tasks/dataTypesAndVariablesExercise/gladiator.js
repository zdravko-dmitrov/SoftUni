function gladiator(lostFights, helmetPrice, swordFrice, shieldPrice, armorPrice){
let sum = 0;
for(let i =1; i <= lostFights; i++){
  if(i % 2 === 0){
    sum += helmetPrice;
  }
  if(i % 3 === 0){
    sum += swordFrice;
  }
  if(i % 6 === 0){
    sum += shieldPrice;
  }
  if(i % 12 === 0){
    sum += armorPrice;
  }
  

}
console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}
gladiator(7,2, 3, 4, 5);