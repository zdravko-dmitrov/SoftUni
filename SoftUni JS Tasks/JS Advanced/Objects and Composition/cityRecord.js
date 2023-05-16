function cityRecord(city, numberOfPeople, treasury) {
let obj = {
  name: city,
  population: numberOfPeople,
  treasury
}
return obj;

}

console.log(cityRecord("Tortuga", 7000, 15000));
