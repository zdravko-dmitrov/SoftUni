function countStringOccurrences(text, word) {
let tokens = text.split(' ');
let count = 0;
for(const token of tokens){
  if(token == word){
    count++;
  }
}
return count;

}
countStringOccurrences(["This is a word and it also is a sentence", "is"]);
