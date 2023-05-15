function rotateArray(arr, num) {
  const collection = [...arr];
  for(let i = 0; i < num; i++){
    const lastNumber = collection.pop();
    collection.unshift(lastNumber)
  }
console.log(collection);

}
rotateArray(["1", "2", "3", "4"], 2);
//3 4 1 2
