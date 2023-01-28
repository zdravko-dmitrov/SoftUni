function reverseAnArray(n,input){
  let newInput = [];
  for (let i = n - 1; i >= 0; i--) {
    const element = input[i];
    newInput.push(element);
    
  }
  console.log(newInput.join(' '));

}
reverseAnArray(3, [10, 20, 30, 40, 50]);