// ACTIVITY 2: BUILDING SENTENCES WITH CODE
// Topics: operators, string concatenation, template literals

// PART 1: GROUP DISCUSSION

// 1. The + for maths vs the + for joining strings
// The + operator does two different jobs. JavaScript looks at what is on both
// sides: if EITHER side is a string, it turns the other one into a string and
// joins them. If both are numbers, it adds. Every other operator (-, *, /, %)
// has no string meaning, so it converts strings to numbers instead. That is why
// "10" - 5 gives 5 but "10" + 5 gives "105".

// 2. Concatenation vs template literal
//    "Hello, " + name + "! You are " + age + " years old."
//    `Hello, ${name}! You are ${age} years old.`
// Our group preferred the template literal. The sentence still reads like a
// sentence, you can see the spaces instead of hiding them inside quotes, and
// there are no + signs to forget. But we still need to know concatenation,
// because plenty of code out there is written that way.

// 3. What happens with 5 + "5"?
//  It is actually "55". The number is converted to text and
// joined.

// 4. Why backticks instead of normal quotes?
// Backticks give the language a third type of quote that it can treat
// differently, without breaking all the old code that already uses ' and ".
// Inside backticks, ${ } is special and you are allowed to break the line.

// ACTIVITY 2: BUILDING SENTENCES WITH CODE

//  PART 2: PREDICT THE OUTPUT

//  Snippet A
let a = 10;
let b = "5";
console.log(a + b); // 105  -> + joins when one side is text
console.log(a - b); // 5    -> - has no text meaning, so it converts

//  Snippet B
let price = 20;
let quantity = 3;
console.log(`Total cost: $${price * quantity}`); // Total cost: $60
// The first $ is plain text. The second $ starts ${ }.

// Snippet C
let x = 4;
let y = 2;
console.log("Result: " + x + y); // Result: 42  -> left to right
console.log("Result: " + (x + y)); // Result: 6   -> brackets add first

// PART 3: DEBUGGING CHALLENGE
// Broken code 1:
//   let fullName = firstName + " " lastName;   <- missing +
//   console.log("Welcome, " + fullname + "!"); <- fullname vs fullName
//
// Broken code 2:
//   let itemPrice = "15";
//   let total = itemPrice + 5;     <- "15" + 5 gives "155", not 20
//
// Fix: add the +, match the capitals, and convert the string
// to a number with Number() before doing maths.

//  Part 3 (fixed)
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;
console.log("Welcome, " + fullName + "!"); // Welcome, Tunde Okafor!

let itemPrice = "15";
let itemTotal = Number(itemPrice) + 5;
console.log(`Your total is $${itemTotal}`); // Your total is $20

//  PART 4: RECEIPT GENERATOR
// Plan: get the item, price and quantity -> convert the two
// numbers -> total = price x quantity -> print one line.

let item = prompt("Item name?");
let itemPrice2 = Number(prompt("Price?"));
let itemQuantity = Number(prompt("How many?"));

//  PART 5: EXTENSION - DISCOUNT CODE
let discount = 1.5; // set this to 0 for no discount

if (isNaN(itemPrice2) || isNaN(itemQuantity)) {
  // Number("free") gives NaN, which would spoil every calculation.
  console.log("Price and quantity must be numbers.");
} else {
  let subtotal = itemPrice2 * itemQuantity;
  let finalTotal = subtotal - discount;

  // toFixed(2) always shows two decimal places, so money
  // prints as 7.50 instead of 7.5.
  console.log(`${itemQuantity} x ${item} @ $${itemPrice2.toFixed(2)}`);
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Discount: -$${discount.toFixed(2)}`);
  console.log(`Total to pay: $${finalTotal.toFixed(2)}`);
}
