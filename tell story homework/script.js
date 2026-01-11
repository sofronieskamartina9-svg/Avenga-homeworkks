function tellStory(infoArray) {
  var name = infoArray[0];
  var mood = infoArray[1];
  var activity = infoArray[2];

  return "This is " + name + ". " + name + " is a nice person. Today they are " + mood + ". They are " + activity + " all day. The end.";
}

var story = tellStory(["Martina", "happy", "learning JavaScript"]);

console.log(story);
alert(story);
