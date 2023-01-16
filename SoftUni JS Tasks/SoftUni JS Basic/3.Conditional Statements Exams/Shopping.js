function shopping(input) {
  let budget = Number(input[0]);
  let gpu = Number(input[1]);
  let cpu = Number(input[2]);
  let ram = Number(input[3]);

  let gpuPrice = gpu * 250;
  let cpuPrice = (gpuPrice * 0.35) * cpu;
  let ramPrice = (gpuPrice * 0.10) * ram;


  let sum = gpuPrice + cpuPrice + ramPrice;

  if (gpu > cpu) {
      sum = sum * 0.85;
  }

  if (budget < sum) {
      console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
  } else {
      console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
  }
}
shopping(["900","2","1","3"]);