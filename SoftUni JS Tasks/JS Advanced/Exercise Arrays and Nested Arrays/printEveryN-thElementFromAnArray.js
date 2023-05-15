function print(arr, number) {
const output = [];

for(let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if(i % number === 0){
    output.push(element);
  }

}
return output;


}
print(["5", "20", "31", "4", "20"], 2);
//['5', '31','20']
