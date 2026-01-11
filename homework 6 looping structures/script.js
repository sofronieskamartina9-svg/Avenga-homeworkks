// This function makes full names from two arrays
function getFullNames(firstNames, lastNames) {

  var fullNames = [];

  for (var i = 0; i < firstNames.length; i++) {

    // Create one full name with a number in front
    var fullName = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];

    // Add it to the array
    fullNames.push(fullName);
  }

  return fullNames;
}

// Example arrays
var first = ["Bob", "Jill"];
var last = ["Gregory", "Wurtz"];

// Call the function
var result = getFullNames(first, last);

// Show the result
console.log(result);
alert(result);
