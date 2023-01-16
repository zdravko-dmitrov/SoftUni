function oscars(input){
  let rent = Number(input[0]);
  let statue = rent - (rent * 0.3);
  let catering = statue - (statue * 0.15);
  let sounds = catering / 2;
  let sum = rent + statue + catering + sounds;

  console.log(sum.toFixed(2));

}
oscars(["3500"]);