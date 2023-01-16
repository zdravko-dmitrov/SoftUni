function cinema(input)
{
let movieType = input[0];
let row = Number(input[1]);
let collum = Number(input[2]);

let allTickets = row * collum;
let ticketPrice = 0;

if(movieType === 'Premiere')
{
ticketPrice = 12.00;

}
else if(movieType === 'Normal')
{
  ticketPrice = 7.50;
}
else if(movieType ==='Discount')
{
  ticketPrice = 5.00;

}
let totalProfit = allTickets * ticketPrice;

console.log(`${totalProfit.toFixed(2)} leva`);

}

cinema(['Premiere','10','12']);
