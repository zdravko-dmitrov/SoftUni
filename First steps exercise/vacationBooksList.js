function vacationBooks(input)
{
  let numberPages = Number(input[0]);
  let pages = Number(input[1]);
  let days = Number(input[2]);

  let totalHours = numberPages / pages;
  let dailyHours = totalHours / 2;

  console.log(dailyHours);
  
}

vacationBooks(["212","20","2"]);
