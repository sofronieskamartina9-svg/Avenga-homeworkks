// ------------------------------
// ATM PROGRAM
// ------------------------------

// Hardcoded account balance
let balance = 500;

/**
 * Withdraw money from ATM
 * @param {number} amount - Amount to withdraw
 * @returns {string}
 */
function atmWithdraw(amount) {

  console.log("---------- ATM ----------");
  console.log(`Requested amount: ${amount}`);

  // Validate input
  if (typeof amount !== "number" || isNaN(amount)) {
    console.log("Invalid input. Please enter a valid number.");
    return "Invalid input";
  }

  if (amount <= 0) {
    console.log("Amount must be greater than zero.");
    return "Invalid amount";
  }

  // Not enough balance
  if (amount > balance) {
    console.log("Not enough money");
    return "Not enough money";
  }

  // Withdraw money
  balance -= amount;

  console.log(`Amount withdrawn: ${amount}`);
  console.log(`Money left in account: ${balance}`);

  return `Withdrawn: ${amount}, Left: ${balance}`;
}


// ------------------------------
// TEST CALLS
// ------------------------------
atmWithdraw(100);
atmWithdraw(600);
atmWithdraw(50);


// ------------------------------
// BONUS WITH PROMPT
// ------------------------------
const userInput = prompt("Enter the amount you want to withdraw:");
const amountFromPrompt = Number(userInput);
atmWithdraw(amountFromPrompt);
