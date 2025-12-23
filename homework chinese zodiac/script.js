// Ask the user to enter a year
let year = prompt("Enter a year:");

// Convert the input to a number
year = Number(year);

// Calculate the Chinese Zodiac value
let zodiac = (year - 4) % 12;

// Show the result
if (zodiac === 0) {
  alert("Chinese Zodiac: Rat");
} else if (zodiac === 1) {
  alert("Chinese Zodiac: Ox");
} else if (zodiac === 2) {
  alert("Chinese Zodiac: Tiger");
} else if (zodiac === 3) {
  alert("Chinese Zodiac: Rabbit");
} else if (zodiac === 4) {
  alert("Chinese Zodiac: Dragon");
} else if (zodiac === 5) {
  alert("Chinese Zodiac: Snake");
} else if (zodiac === 6) {
  alert("Chinese Zodiac: Horse");
} else if (zodiac === 7) {
  alert("Chinese Zodiac: Goat");
} else if (zodiac === 8) {
  alert("Chinese Zodiac: Monkey");
} else if (zodiac === 9) {
  alert("Chinese Zodiac: Rooster");
} else if (zodiac === 10) {
  alert("Chinese Zodiac: Dog");
} else if (zodiac === 11) {
  alert("Chinese Zodiac: Pig");
} else {
  alert("Invalid year");
}
