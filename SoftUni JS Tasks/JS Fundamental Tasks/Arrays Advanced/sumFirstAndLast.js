function sumFirstAndLast(arr){
  let firstEl = Number(arr.shift());
  let lastEl = Number(arr.pop());

  console.log(firstEl + lastEl);
  
}
sumFirstAndLast(['20', '30', '40']);