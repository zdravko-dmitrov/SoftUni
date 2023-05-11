function roadRader(speed, area){
let limit = 0;

switch(area){
  case 'motorway':
    limit = 130;

  break;

  case 'interstate':
    limit = 90;

  break;

  case 'residential':
    limit = 50;

  break;

  case 'residential':
    limit = 20;

  break;
}
if(speed <= limit){
const output = `Driving ${speed} km/h in a ${limit} zone`
console.log(output);
return;

}
let status = '';
let speeding = speed - limit;

if(speeding <= 20){
  status = 'speeding'
} else if(speeding > 20 && speeding <= 40){
  status = 'excessive speeding.';
} else{
status = 'reckless driving';
}

console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);

}
roadRader(40, 'city');
//Driving 40 km/h in a 50 zone
roadRader(21, 'residential');
//The speed is 1 km/h faster than the allowed speed of 20 - speeding

