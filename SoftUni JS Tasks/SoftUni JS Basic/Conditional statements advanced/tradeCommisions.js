function tradeCommissions(input) {
  let city = input[0];
  let salesVolume = Number(input[1]);
  switch (city) {
    case "Sofia":
      if (0 <= salesVolume && salesVolume <= 500) {
        console.log((salesVolume * 0.05).toFixed(2));
      } else if (500 < salesVolume && salesVolume <= 1000) {
        console.log((salesVolume * 0.07).toFixed(2));
      } else if (1000 < salesVolume && salesVolume <= 10000) {
        console.log((salesVolume * 0.08).toFixed(2));
      } else if (salesVolume > 10000) {
        console.log((salesVolume * 0.12).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Varna":
      if (0 <= salesVolume && salesVolume <= 500) {
        console.log((salesVolume * 0.045).toFixed(2));
      } else if (500 < salesVolume && salesVolume <= 1000) {
        console.log((salesVolume * 0.075).toFixed(2));
      } else if (1000 < salesVolume && salesVolume <= 10000) {
        console.log((salesVolume * 0.1).toFixed(2));
      } else if (salesVolume > 10000) {
        console.log((salesVolume * 0.13).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (0 <= salesVolume && salesVolume <= 500) {
        console.log((salesVolume * 0.055).toFixed(2));
      } else if (500 < salesVolume && salesVolume <= 1000) {
        console.log((salesVolume * 0.08).toFixed(2));
      } else if (1000 < salesVolume && salesVolume <= 10000) {
        console.log((salesVolume * 0.12).toFixed(2));
      } else if (salesVolume > 10000) {
        console.log((salesVolume * 0.145).toFixed(2));
      } else {
        console.log("error");
      }
      break;

    default:
      console.log("error");
      break;
  }
}
tradeCommissions(["Kaspichan", "-50"]);
