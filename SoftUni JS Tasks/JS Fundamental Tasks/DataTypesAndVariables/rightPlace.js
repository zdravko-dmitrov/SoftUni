function place(str, char, result) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      newString = newString + char;
    } else {
      newString += str[i];
    }
  }
  console.log(newString === result ? 'Matched' : 'Not Matched');
}
place("Str_ng", "I", "Strong");
