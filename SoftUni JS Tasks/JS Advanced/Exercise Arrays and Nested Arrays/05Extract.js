function extract(arr) {
  const output = [];
  let biggest = Number.MIN_SAFE_INTEGER;


  for(let i = 0; i < arr.length; i++){
const currElement = arr[i];

if(currElement >= biggest){
  output.push(currElement);
  biggest = currElement;
}
  }
return output;
}

extract([1, 2, 3, 4]);
