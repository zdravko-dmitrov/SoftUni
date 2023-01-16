function cinemaTicket(input) {
  let index = 0;

  let movieTitle = input[index];
  index++;

  let standardTicketsCount = 0;
  let studentTicketsCount = 0;
  let kidTicketCount = 0;

  while (movieTitle !== "Finish") {
    let spacesAvailable = Number(input[index]);
    index++;

    let currentTicket = input[index];
    index++;

    let spacesTaken = 0;

    while (currentTicket !== "End") {
      if (currentTicket === "standard") {
        standardTicketsCount += 1;
      } else if (currentTicket === "student") {
        studentTicketsCount += 1;
      } else if (currentTicket === "kid") {
        kidTicketCount += 1;
      }

      spacesTaken +=1;
      if(spacesTaken === spacesAvailable){
        break;
      }
      currentTicket = input[index];
      index++;
    }

    let percentFull = ((spacesTaken / spacesAvailable) * 100).toFixed(2);
    console.log(`${movieTitle} - ${percentFull}% full.`);

    movieTitle = input[index];
    index++;
  }

  let totalTickets = studentTicketsCount + standardTicketsCount + kidTicketCount;

  console.log(`Total tickets: ${totalTickets}`);

  let standardPercent = (standardTicketsCount / totalTickets) * 100;
  let studentPercent = (studentTicketsCount / totalTickets) * 100;
  let kidPercent = (kidTicketCount / totalTickets) * 100;
  
  console.log(`${studentPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}

cinemaTicket([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
