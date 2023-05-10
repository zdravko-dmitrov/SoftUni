function stringLength(str1, str2, str3){
  let sumLength = str1.length + str2.length + str3.length;
  let avarage = Math.floor(sumLength / 3);

  console.log(sumLength);
  console.log(avarage);

}
stringLength('chocolate', 'ice cream', 'cake');