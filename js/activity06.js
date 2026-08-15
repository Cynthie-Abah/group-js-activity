// ACTIVITY 6: SHORTCUTS AND CHOICES
// Topics: ternary operators (with review of conditional statements)

// PART 1: GROUP DISCUSSION

// 1. Why is a ternary called a "shortcut" for if/else?
// The shape is:  condition ? valueIfTrue : valueIfFalse
// "Is age 18 or more? If yes 'Adult', if no 'Minor'." The difference is that an if is a STATEMENT (it does something) while a ternary is an EXPRESSION (it produces a value). That is why a ternary can sit inside a console.log or inside ${ } and an if cannot.

let myAge = 20;
if (myAge >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
// The same decision as a ternary:
console.log(myAge >= 18 ? "Adult" : "Minor");

// 2. Can a ternary replace an if/else if/else with three branches?
// Technically yes, by putting one ternary inside another, but it becomes hard to read and you start losing track of which : belongs to which ?. Our group
// rule: two outcomes use a ternary, three or more use if/else if/else.

// 3. When does a ternary make code harder to read?
// - when there are more than two possible outcomes
// - when a branch has to do several things, not just choose one value
// - when the condition itself is long, so the line runs off the screen and
//   nobody bothers reading it

// PART 2: PREDICT THE OUTPUT

// Snippet A
let examScore = 72;
let result = examScore >= 50 ? "Pass" : "Fail";
console.log(result); // Pass

// Snippet B
let cartTotal = 0;
let message = cartTotal > 0 ? "Proceed to checkout" : "Your cart is empty";
console.log(message); // Your cart is empty, because 0 is not greater than 0

// Snippet C
let stock = 5;
console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`);
// Stock status: Available
// This is the one that shows why a ternary is useful - you cannot put a full if statement inside ${ }.

// PART 3: DEBUGGING CHALLENGE
// Broken code:
//   let feeling = temperature > 25 ? "hot" "cold";  <- missing : between them
//   console.log(`Discount: ${discount}%);           <- the closing ` is missing
// Both are SyntaxErrors. The second one is wrong because JavaScript keeps reading to the end of the file looking for the backtick that never comes. Two semicolons were missing as well.

// Part 3 (fixed)
let roomTemperature = 28;
let feeling = roomTemperature > 25 ? "hot" : "cold";
console.log(feeling); // hot

let isMember = true;
let memberDiscount = isMember ? 10 : 0;
console.log(`Discount: ${memberDiscount}%`); // Discount: 10%

// COMPARING THE TWO STYLES WITH THREE OUTCOMES
let shoppingTotal = 60;

// as a nested ternary - it works, but look at it
let shippingShort =
  shoppingTotal >= 100 ? "Free" : shoppingTotal >= 50 ? "₦500" : "₦1000";

// as if/else if/else - longer, but anybody can read it
let shippingClear;
if (shoppingTotal >= 100) {
  shippingClear = "Free";
} else if (shoppingTotal >= 50) {
  shippingClear = "₦500";
} else {
  shippingClear = "₦1000";
}

console.log("nested ternary: " + shippingShort); // ₦500
console.log("if/else if/else: " + shippingClear); // ₦500
