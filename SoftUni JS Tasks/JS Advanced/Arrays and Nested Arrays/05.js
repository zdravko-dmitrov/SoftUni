function pieOfPie(arr, pie1, pie2){
  let firstPieIndex = arr.indexOf(pie1);
  let secondPieIndex = arr.indexOf(pie2);
  let result = arr.slice(firstPieIndex, secondPieIndex);
  return result;
}
console.log(pieOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));