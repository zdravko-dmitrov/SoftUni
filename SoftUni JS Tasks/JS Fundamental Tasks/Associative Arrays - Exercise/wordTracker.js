function wordTracker(data) {
  let result = {};
  let words = data.shift().split(" ");
  for (let word of words) {
    result[word] = 0;
  }
  for (let word of data) {
    if (result.hasOwnProperty(word)) {
      result[word] += 1;
    }
  }
  let sortArr = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sortArr) {
    console.log(`${key} - ${value}`);
  }
}

wordTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
console.log("--------------------------------------------");
wordTracker([
  "is the",

  "first",
  "sentence",
  "Here",
  "is",

  "another",
  "the",
  "And",
  "finally",
  "the",

  "the",
  "sentence",
]);
