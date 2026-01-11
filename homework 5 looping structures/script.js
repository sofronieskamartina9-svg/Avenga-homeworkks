// This function finds the min, max and their sum
function minMaxSum(numbers) {
  var min = numbers[0];
  var max = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }

    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  var sum = min + max;

  return "Max: " + max + ", Min: " + min + ", Sum: " + sum;
}

// Example array
var result = minMaxSum([3, 5, 6, 8, 11]);

console.log(result);
alert(result);
