function sortAdressbook(input) {
  let dict = {};
  for (const el of input) {
    let tokens = el.split(':');
    let name = tokens[0];
    let address = tokens[1];
    dict[name] = address;
  }

  let entries = Object.entries(dict).sort((a,b) => a[0].localeCompare(b[0]));
  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

sortAdressbook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
