function santaHoliday(input){
  let days = Number(input[0]);
  let nightsOver = days - 1;
  let roomType = input[1];
  let evaluation = input[2];
 let holidayPrice = 0;

  switch (roomType) {
    case "room for one person":
      holidayPrice = nightsOver * 18;
      
      break;

      case "apartment":
        holidayPrice = nightsOver * 25;
        if(days < 10){
          holidayPrice = holidayPrice - (holidayPrice * 0.30);
        } else if(days >= 10 && days <= 15){
          holidayPrice = holidayPrice - (holidayPrice * 0.35);
        } else if(days > 15){
          holidayPrice = holidayPrice - (holidayPrice * 0.50);
        }
      break;

      case "president apartment":
        holidayPrice = nightsOver * 35;
        if(days < 10){
          holidayPrice = holidayPrice - (holidayPrice * 0.10);
        } else if(days >= 10 && days <= 15){
          holidayPrice = holidayPrice - (holidayPrice * 0.15);
        } else if(days > 15){
          holidayPrice = holidayPrice - (holidayPrice * 0.20);
        }
      
      break;
  
  }
if(evaluation ==="positive"){
  holidayPrice = holidayPrice + (holidayPrice * 0.25);
  console.log(holidayPrice.toFixed(2));
} else if(evaluation === "negative"){
  holidayPrice = holidayPrice - (holidayPrice * 0.10);
  console.log(holidayPrice.toFixed(2));
}


}

santaHoliday(["30","president apartment", "negative"]);