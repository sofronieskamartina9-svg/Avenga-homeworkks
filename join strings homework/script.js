function makeBigString(wordsArray) {
  // Join all strings into one big string with spaces
  var result = wordsArray.join(" ");
  return result;
}

// Example:
var story = makeBigString(["Hello", "my", "name", "is", "Martina", "!"]);

console.log(story);
alert(story);
