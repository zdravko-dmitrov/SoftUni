function sumOfOddNumbers(number){
  let Counter = 0;
  let sum = 0;
for (let i = 1; i <= 100; i++) {
  if(i % 2 == 1){
    console.log(i);
    Counter ++;
    sum += i;
    if(Counter >= number){
      break;
    }
  }
  
  
}
console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);