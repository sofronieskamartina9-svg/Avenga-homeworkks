function validateNumber(num) {
  // checks if num is really a number
  if (isNaN(num)) {
    return false;
  }
  return true;
}

function sumArray(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (!validateNumber(numbers[i])) {
      return "Error: One of the values is not a valid number!";
    }

    sum = sum + numbers[i];
  }

  return sum;
}

// Example array
var result = sumArray([2, 5, 10, 3, 7]);

console.log(result);
alert(result);