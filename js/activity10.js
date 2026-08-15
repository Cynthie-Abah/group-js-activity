// ACTIVITY 10: BUILD-A-PROGRAM CHALLENGE
// Topics: everything from the whole course

// PART 1: GROUP DISCUSSION

// 1. Which concept connects to the most other concepts?
// Variables. Every other topic either creates a value to store or reads one: operators combine them, conditionals test them, loops update them, functions receive and return them. Functions came second, because that is where all the other pieces end up being packaged.

// 2. Explaining the whole course to a friend who has never coded
// JavaScript lets you tell the computer to remember information, make decisions about it, repeat work, and show a result. You write the instructions once and the machine runs them for any input, a thousand times, without getting tired. It is what makes a web page actually do something instead of just sitting there.

// 3. Why break a big program into small functions?
// Each piece can be understood and tested on its own, the names make the program readable from top to bottom, repeated logic lives in one place, and different people in the group can work on different functions without clashing on Git.

// 4. What a bug taught us about debugging
// Read the error message first - it usually tells you the line and the problem. Almost all our bugs were three types: a typo in a name (capital letters), a type surprise (a string where we expected a number), or a missing bracket. Printing the value with console.log beats staring at the screen guessing.

// 5. Confident vs still shaky
// Confident: conditionals with ternaries, and loops with functions.
// Still shaky: type conversion edge cases, especially how NaN spreads quietly through a calculation, and remembering that string methods return a new value instead of changing the original one.

// PART 2: PREDICT THE OUTPUT

// Snippet A
const getDiscount = (total) => (total >= 100 ? total * 0.1 : 0);

let orderTotal = 120;
let orderDiscount = getDiscount(orderTotal);
console.log(`Discount: $${orderDiscount}`); // Discount: $12
console.log(`Final total: $${orderTotal - orderDiscount}`); // Final total: $108
// An arrow function, a ternary and a template literal all in four lines.

// Snippet B
function classifyNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
  }
}
classifyNumbers(4); // 1 is odd, 2 is even, 3 is odd, 4 is even
// % gives the remainder. If dividing by 2 leaves nothing, the number is even.

// Snippet C
const formatName = (name) => name.trim().toUpperCase();

let rawInput = "  kelechi  ";
console.log(`Welcome, ${formatName(rawInput)}!`); // Welcome, KELECHI!
// Two methods chained together - trim() hands its result straight to
// toUpperCase().

// PART 4: ORDER CHECKOUT PROGRAM
// Everything the program must do, in order:
//   1. Collect the item name, price and quantity.
//   2. Convert the price and quantity from text into numbers.
//   3. Reject anything that is not a usable number.
//   4. Subtotal = price x quantity (its own function).
//   5. Free delivery above 20000 naira, otherwise a flat 1500.
//   6. Print the receipt with template literals.

// Step 8 said to look for repeated logic. The "₦" + amount.toFixed(2) line
// appeared four times, so we pulled it into money(). Now if we ever change
// the currency we only change one line. We also gave the two delivery rules
// proper names instead of leaving loose numbers inside the code.
const FREE_DELIVERY_FROM = 20000;
const DELIVERY_FEE = 1500;

const calculateSubtotal = (price, quantity) => price * quantity;
const money = (amount) => "₦" + amount.toFixed(2);

function checkout(itemName, rawPrice, rawQuantity) {
  let item = itemName.trim();
  let price = Number(rawPrice);
  let quantity = parseInt(rawQuantity, 10);

  if (isNaN(price) || isNaN(quantity) || quantity < 1) {
    console.log("Price must be a number and quantity must be at least 1.");
    return; // stop here, there is nothing to sell
  }

  let itemsTotal = calculateSubtotal(price, quantity);
  let delivery = itemsTotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;
  let grandTotal = itemsTotal + delivery;

  console.log(`Item:       ${item}`);
  console.log(`Unit price: ${money(price)}`);
  console.log(`Quantity:   ${quantity}`);
  console.log(`Subtotal:   ${money(itemsTotal)}`);
  console.log(`Delivery:   ${delivery === 0 ? "FREE" : money(delivery)}`);
  console.log(`TOTAL:      ${money(grandTotal)}`);
}

let orderItem = prompt("What are you buying?");
let orderPrice = prompt("Price per item?");
let orderQuantity = prompt("How many?");

checkout(orderItem, orderPrice, orderQuantity);

checkout("Backpack", 12000, 2); // 24000, free delivery
checkout("Pen", 150, 20); // 3000 plus 1500 delivery
checkout("Mystery box", "free", 1); // caught by the isNaN check
