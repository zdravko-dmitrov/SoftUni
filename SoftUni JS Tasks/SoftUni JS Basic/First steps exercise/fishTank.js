function fishTank(input)
{
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let persentage = Number(input[3]);
  let fullSpace = persentage / 100;
 
  let volumeTank = length * width * height;
  let volumeLiters = volumeTank / 1000;
 
  let litersNeeded = volumeLiters * (1 - fullSpace);
 
  console.log(litersNeeded)
}
fishTank(["85","75","47","17"]);