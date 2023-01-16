function pcStore(input) {
  let dollar = 1.57;
  let processor = Number(input[0]);
  let videoCard = Number(input[1]);
  let ram = Number(input[2]);
  let numRam = Number(input[3]);
  let discount = Number(input[4]);
  let sumOfRam = ram * numRam;
  let processorlev = processor * dollar;
  let videoCardlev = videoCard * dollar;
  let ramslev = sumOfRam * dollar;
  let processorDiscount = processorlev - processorlev * discount;
  let videoCardDiscount = videoCardlev - videoCardlev * discount;
  let sum = ramslev + processorDiscount + videoCardDiscount;
  console.log(`Money needed - ${sum.toFixed(2)} leva.`);
}
pcStore(["500",
"200",
"80",
"2",
"0.05"]);

