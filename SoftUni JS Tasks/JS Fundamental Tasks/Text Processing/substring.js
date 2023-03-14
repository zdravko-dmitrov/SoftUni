function substring(text, startIndex, count) {
  let endIdex = startIndex + count;
  let result = text.substring(startIndex, endIdex);
  console.log(result);
}
substring(["ASentence", 1, 8]);
