// ACTIVITY 9: FUNCTION EXPRESSIONS AND ARROW FUNCTIONS
// Topics: anonymous functions, arrow functions

// PART 1: GROUP DISCUSSION

// 1. What makes a function "anonymous", and how does JavaScript know when to
//    run it?
// It is written without a name after the word function. JavaScript does not
// need the name, it needs a REFERENCE. Storing it in a variable gives you
// that reference, so square2(5) runs it. Anonymous functions are also handed
// straight to other functions to be called later.

function square(num) {
  return num * num;
}

const square2 = function (num) {
  return num * num;
};

const square3 = (num) => {
  return num * num;
};

console.log(square(5), square2(5), square3(5)); // 25 25 25
// What is different:
//   -  you can call square above the line where it is written. The other two only exist from their line downwards.
//   - the two variable versions end with a semicolon, because they are assignments, not declarations.
//   - only the way they are written changes. The result is identical.

// 2. Why choose an arrow function? Any downside?
// They are shorter and much easier to read when you pass them into another
// function.
// when you make them too short they become hard for a beginner to read.

// 3. How do you call an anonymous function stored in a variable?
// Through the variable, like any other function: square2(5).

// 4. What happened to the braces and the word "return" in (num) => num * num?
// When there are no braces, the arrow returns the value automatically. It is
// called an implicit return. Careful: num => { num * num; } returns undefined,
// because once you add braces you must write return yourself. This one cost
// us about twenty minutes.
const square4 = (num) => num * num;
console.log(square4(5)); // 25

// PART 2: PREDICT THE OUTPUT

// Snippet A
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12

// Snippet B
const double = (num) => num * 2;
console.log(double(6)); // 12
console.log(double(0)); // 0

// Snippet C
const introduce = (name, age) => {
  console.log(`My name is ${name} and I am ${age} years old.`);
};
introduce("Zainab", 22); // My name is Zainab and I am 22 years old.
// One parameter can go without brackets, but two must have them.

// PART 3: DEBUGGING CHALLENGE
// Block 1: greetuser("Emeka") does not match greetUser -> ReferenceError:
//          greetuser is not defined. Case sensitivity.
// Block 2: it actually printed 6, because JavaScript added the missing
//          semicolons itself. We still wrote them, since an arrow function
//          inside a const is an assignment and should end with one.

// Part 3 (fixed)
const greetUser = (name) => {
  console.log("Welcome, " + name);
};
greetUser("Emeka"); // Welcome, Emeka

const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // 6

// PART 4: MATH HELPER TOOLKIT
// Each helper does exactly one small job and RETURNS its answer, so whoever
// calls it decides how to display it.
const percentToDecimal = (percent) => percent / 100;
const rectangleArea = (length, width) => length * width;
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

// PART 5: EXTENSION - CONVERT BACK AGAIN
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log("25% as a decimal: " + percentToDecimal(25)); // 0.25
console.log("Area of 4 x 9: " + rectangleArea(4, 9)); // 36
console.log("Area of 10 x 5: " + rectangleArea(10, 5)); // 50
console.log("35 C = " + celsiusToFahrenheit(35) + " F"); // 95
console.log("100 C = " + celsiusToFahrenheit(100) + " F"); // 212

// Do the two conversions undo each other?
console.log("95 F back to C: " + fahrenheitToCelsius(95)); // 35
console.log("212 F back to C: " + fahrenheitToCelsius(212)); // 100

// Step 8: writing these as arrow functions felt natural because each one is a single line of maths.
