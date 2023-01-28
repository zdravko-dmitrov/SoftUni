function getDayOfTheWeek(input) {
  let daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (input < 1 || input > 7) {
    console.log("Invalid day!");
  } else {
    console.log(daysOfTheWeek[input - 1]);
  }
}
getDayOfTheWeek([10]);
