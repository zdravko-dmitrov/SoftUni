function exam(input) {
 
  let brStudent = Number(input[0]);
  let index = 1;
  let score = Number(input[index]);
  index++;
  let topStudent = 0;
  let between4To5 = 0;
  let between3To4 = 0;
  let fail = 0;
  let average1 = 0;
  let average2 = 0;
  let average3 = 0;
  let average4 = 0;
  // let totalAverage = 0 ;
  let average = 0;
  let totalScore = 0;
  for (i = 1; i <= brStudent; i++) {

      if (score >= 2.00 && score <= 2.99) {
          fail++;
      } else if (score >= 3.00 && score <= 3.99) {
          between3To4++;
      } else if (score >= 4.00 && score <= 4.99) {
          between4To5++;
      } else if (score >= 5) {
          topStudent++;
      }
      totalScore+= score;
      score = Number(input[index]);
      index++;
  }
  average1 = fail / brStudent * 100;
  average2 = between3To4 / brStudent * 100;
  average3 = between4To5 / brStudent * 100;
  average4 = topStudent / brStudent * 100;
  average = (totalScore / 10);

  console.log(`Top students: ${average4.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${average3.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${average2.toFixed(2)}%`);
  console.log(`Fail: ${average1.toFixed(2)}`);
  console.log(`Average: ${average.toFixed(2)}`);
}