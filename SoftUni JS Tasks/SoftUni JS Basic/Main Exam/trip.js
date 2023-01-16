function trip(input) {
  let people = Number(input[0]);
  let season = input[1];
  let sum = 0;

if (people <= 5) {
  switch (season) {
      case "spring":
      sum = people * 50.00;
      break;
      case "summer":
      sum = people * 48.50;
      sum = sum - sum * 0.15;
      break;
      case "autumn":
      sum = people * 60.00;
      break;
      case "winter":
      sum = people * 86.00;
      sum = sum + sum * 0.08;
  
      default:
          break;
  }
} else {
  switch (season) {
      case "spring":
      sum = people * 48.00;
      break;
      case "summer":
      sum = people * 45.00;
      sum = sum - sum * 0.15;
      break;
      case "autumn":
      sum = people * 49.50;
      break;
      case "winter":
      sum = people * 85.00;
      sum = sum + sum * 0.08;
   default:
      break;
}


}
console.log(`${sum.toFixed(2)} leva.`);
}
