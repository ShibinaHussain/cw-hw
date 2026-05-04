// Store the number of items sold
let tShirtCount = 5;
let capCount = 3;

// Store the initial prices
let tShirtPrice = 400;
let capPrice = 150;

// Calculate the initial total earnings
let totalEarnings = (tShirtCount * tShirtPrice) + (capCount * capPrice);
console.log("Initial Total Earnings: ₹" + totalEarnings);

// Update the price of t-shirts
tShirtPrice = 450;

// Recalculate the total earnings
totalEarnings = (tShirtCount * tShirtPrice) + (capCount * capPrice);

// Display the updated total
console.log("Updated Total Earnings: ₹" + totalEarnings);
