function biggerHalf(arr){
  let result = [];
arr.sort((a,b) => a - b);
let halfLenght = Math.ceil(arr.lenght / 2);
for (let index = arr.length - 1; index >= arr.length - halfLenght; index--) {
  result.push(arr[index]);
  
}
result.reverse();
return result;

}
console.log(biggerHalf([4, 7, 2, 5]));