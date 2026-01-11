// This variable will store the final text
var result = "";

// Loop from 1 to 20
for (var i = 1; i <= 20; i++) {

  // Add the current number to result
  result = result + i;

  // Check if the number is even
  if (i % 2 === 0) {
    result = result + "\n"; // New line for even numbers
  } else {
    result = result + " "; // Space for odd numbers
  }
}

// Print the result
console.log(result);
alert(result);
