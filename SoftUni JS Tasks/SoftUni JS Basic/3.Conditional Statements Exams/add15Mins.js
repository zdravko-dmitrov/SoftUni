function add15Mins(input)
{
let hours = Number(input[0]);
let minutes = Number(input[1]);

let totalTime = hours * 60 + minutes + 15;

console.log(totalTime)

}

add15Mins("1","46")