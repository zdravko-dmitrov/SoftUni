function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let country;
  let budgetSumAndWin = 0;
  let place;
  switch (season) {
      case "summer":
          if (budget <= 100) {
              country = "Bulgaria"
              place = "Camp"
              budgetSumAndWin = budget * 0.30
          } else if(budget > 100 && budget <=1000){
              country = "Balkans"
              place = "Camp"
              budgetSumAndWin = budget * 0.40
          } else if(budget > 1000){
              country = "Europe"
              place = "Hotel"
              budgetSumAndWin = budget * 0.90
          }   
          break;
      case "winter":
          if (budget <= 100) {
              country = "Bulgaria"
              place = "Hotel"
              budgetSumAndWin = budget * 0.70
          } else if(budget > 100 && budget <=1000){
              country = "Balkans"
              place = "Hotel"
              budgetSumAndWin = budget * 0.80
          } else if(budget > 1000){
              country = "Europe"
              place = "Hotel"
              budgetSumAndWin = budget * 0.90
          }
          break;
      default:
          break;
  }
  console.log(`Somewhere in ${country}`);
  console.log(`${place} - ${budgetSumAndWin.toFixed(2)}`);
}