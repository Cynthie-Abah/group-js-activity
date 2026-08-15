// ACTIVITY 8: REUSABLE MACHINES
// Topics: what are functions, function declarations, functions with parameters

// PART 1: GROUP DISCUSSION

// 1. How is a function like a vending machine?
// You put in money and press a selection (the ARGUMENTS), something happens inside that you cannot see (the function body), and a snack comes out (the RETURN value). You do not need to know how the machine works to use it, and the same machine serves everybody. That is exactly reuse.

// 2. Parameter vs argument
// The PARAMETER is the name written in the declaration - a placeholder.
// The ARGUMENT is the actual value you pass when calling it.
//   function greet(name) { }   <- name is the parameter
//   greet("Ifeoma");           <- "Ifeoma" is the argument
// the parameter is the label on the box, the argument is what you put inside it.

// 3. Why write a function instead of repeating the code?
// You write it once and call it anywhere. If there is a bug you fix it in one place and every call is fixed. And the name explains what is happening - calculateTip(5000, 10) reads better than the raw arithmetic.

// 4. What if a function is declared but never called?
// Nothing happens. No error, no output. Declaring only stores the recipe. The body only runs when you call it.

// 5. Can a function have more than one parameter?
// Yes, as many as you need. And if you forget one when calling, JavaScript does NOT complain - the missing one becomes undefined, which is how you end up with NaN.

// PART 2: PREDICT THE OUTPUT

// Snippet A
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Ifeoma"); // Hello, Ifeoma!
greet("David"); // Hello, David!
// One declaration, two calls.

// Snippet B
function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(4, 7); // 11
addNumbers(10); // NaN
// b is undefined, and 10 + undefined is NaN (Not a Number). JavaScript gives
// no warning at all.

// Snippet C
function sayHi() {
  console.log("Hi there!");
}
console.log("Before calling function");
sayHi();
console.log("After calling function");
// Before calling function / Hi there! / After calling function
// Declaring a function does not run it. Only the call runs it.

// PART 3: DEBUGGING CHALLENGE
// calculateArea was never closed with }, so displayMessage and both calls got
// swallowed inside its body and the file ended in the middle of a function.
// Error: SyntaxError: Unexpected end of input.
// After fixing the brace, CalculateArea(5, 10) with a capital C gave
// ReferenceError, because the function is calculateArea.

// Part 3 (fixed)
function calculateArea(length, width) {
  console.log(length * width);
}

function displayMessage(msg) {
  console.log(msg);
}

displayMessage("Area calculator ready");
calculateArea(5, 10); // 50

// PART 4: TIP CALCULATOR TOOLKIT
//   calculateTip -> does the maths and RETURNS a number, prints nothing
//   displayBill  -> does no maths, only formats and prints
// Keeping them separate means we can change the wording of the receipt
// without touching the calculation, and the tip function can be reused
// inside the split function below.

function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

function displayBill(billAmount, tipPercentage) {
  let tip = calculateTip(billAmount, tipPercentage);
  let totalToPay = billAmount + tip;
  console.log(
    "Bill ₦" +
      billAmount.toFixed(2) +
      " + " +
      tipPercentage +
      "% tip (₦" +
      tip.toFixed(2) +
      ") = ₦" +
      totalToPay.toFixed(2),
  );
}

// PART 5: EXTENSION - SPLIT THE BILL BETWEEN PEOPLE
function splitBill(billAmount, tipPercentage, people) {
  let totalToPay = billAmount + calculateTip(billAmount, tipPercentage);
  let share = totalToPay / people;
  console.log(people + " people pay ₦" + share.toFixed(2) + " each.");
}

let bill = Number(prompt("What was the bill?"));
let tipPercent = Number(prompt("What tip percentage?"));
let people = Number(prompt("How many people are sharing it?"));

displayBill(bill, tipPercent);
splitBill(bill, tipPercent, people);

// Also tested with fixed values:
displayBill(5000, 10); // Bill ₦5000.00 + 10% tip (₦500.00) = ₦5500.00
splitBill(5000, 10, 4); // 4 people pay ₦1375.00 each.
