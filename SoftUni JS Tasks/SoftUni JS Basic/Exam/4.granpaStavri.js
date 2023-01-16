function grandpaStavri(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;

  let litres = 0;
  let degrees = 0;

  for (let i = 1; i <= days; i++) {
    let dailyLitres = Number(input[index]);
    index++;
    litres += dailyLitres;
    let dailyDegrees = Number(input[index]);
    index++;
    degrees = degrees + dailyDegrees * dailyLitres;
  }
  let avgDegrees = degrees / litres;
  console.log(`Liter: ${litres.toFixed(2)}`);
  console.log(`Degrees: ${avgDegrees.toFixed(2)}`);

  if (avgDegrees < 38) {
    console.log("Not good, you should baking!");
  } else if (avgDegrees >= 38 && avgDegrees <= 42) {
    console.log("Super!");
  } else {
    console.log("Dilution with distilled water!");
  }
}

grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);
