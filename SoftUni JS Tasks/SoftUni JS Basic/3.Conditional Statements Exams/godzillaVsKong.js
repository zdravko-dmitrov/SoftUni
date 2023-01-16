function movie(input) {
  let movieBudget = Number(input[0]);
  let statCount = Number(input[1]);
  let outfit = Number(input[2]);

  let decore = movieBudget * 0.10;


  if (statCount > 150) {
      outfit -= outfit * 0.10;
  }

  let outfitSum = statCount * outfit;
  let movieCost = decore + outfitSum;


  if (movieCost > movieBudget) {
      let moneyLack = (movieCost - movieBudget).toFixed(2);
      console.log(`Not enough money!`);
      console.log(`Wingard needs ${moneyLack} leva more.`);
  }else  {
       let moneyPlus = (movieBudget - movieCost).toFixed(2);
      console.log(`Action!`);
      console.log(`Wingard starts filming with ${moneyPlus} leva left.`);
  }

}
movie(["9587.88","222","55.68"]);