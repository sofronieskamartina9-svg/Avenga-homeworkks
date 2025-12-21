// Price of one phone
const phonePrice = 119.95;

// Number of phones
const quantity = 30;

// Tax rate (5%)
const taxRate = 0.05;

// Calculate total price without tax
const totalPrice = phonePrice * quantity;

// Calculate tax amount
const tax = totalPrice * taxRate;

// Calculate final price with tax
const finalPrice = totalPrice + tax;

// Print results in console
console.log("Total price without tax: $" + totalPrice.toFixed(2));
console.log("Tax amount: $" + tax.toFixed(2));
console.log("Final price with tax: $" + finalPrice.toFixed(2));

