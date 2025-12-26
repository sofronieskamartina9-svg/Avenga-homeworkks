// Convert human years → dog years
function humanToDogYears(humanYears) {
  const dogYears = humanYears * 7;
  console.log(`${humanYears} human years = ${dogYears} dog years`);
  return dogYears;
}

// BONUS: Convert dog years → human years
function dogToHumanYears(dogYears) {
  const humanYears = dogYears / 7;
  console.log(`${dogYears} dog years = ${humanYears} human years`);
  return humanYears;
}

// Test examples
humanToDogYears(6);   // 6 human = 42 dog
dogToHumanYears(21);  // 21 dog = 3 human
