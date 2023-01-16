function demo(black){
  let name = black[0];
  let age = Number(black[1]);
  let city = black[2];

  console.log(`My name is ${name} I'm ${age} years old and I'm from ${city}.`);
}
demo(['Zdavko', '26','Razgrad']);