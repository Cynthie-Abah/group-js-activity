// ACTIVITY 5: DECISION MAKERS
// Topics: control flow, conditional statements

// PART 1: GROUP DISCUSSION

// 1. What does it mean for a program to make a decision?
// It tests a condition and runs one block of code instead of another. Real life example: if it is raining, carry an umbrella, otherwise wear your cap.
//   if (isRaining) { carryUmbrella(); } else { wearCap(); }

// 2. The difference between =, == and ===
// =   assigns a value. if (x = 5) does not compare anything
// ==  compares AFTER converting the types, so 5 == "5" is true and 0 == false is also true.
// === compares the value AND the type, so 5 === "5" is false.

// 3. With if, else if and else, can more than one block run?
// No. JavaScript checks from the top and runs only the FIRST condition that is true, then skips everything else in the chain. If you want two separate things to happen you must write two separate if statements.

// 4. How do && and || change a condition?
// && (AND) needs both sides to be true. || (OR) needs at least one.
// Everyday sentences: "you may enter if you are 18 AND you have your ID" but
// "you get a discount if you are a student OR a senior citizen".

// PART 2: PREDICT THE OUTPUT

// Snippet A
let temperature = 15;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 15) {
  console.log("It's warm.");
} else {
  console.log("It's cool."); // this is the one that runs
}
// 15 is not GREATER than 15. It would need >= to count as warm.

// Snippet B
let visitorAge = 20;
let hasID = false;
if (visitorAge >= 18 && hasID) {
  console.log("You may enter.");
} else {
  console.log("Entry denied."); // && needs BOTH sides, and the ID is missing
}

// Snippet C
let password = "1234";
if (password === "0000") {
  console.log("Password changed!");
} else {
  console.log("No change.");
}

// PART 3: DEBUGGING CHALLENGE
// The first if block was never closed. The } before "else if" is missing, so JavaScript meets the word else while it still thinks it is inside the if. Error: SyntaxError: Unexpected token 'else'. Nothing runs at all.
// The last console.log was also missing its semicolon.

// Part 3 (fixed)
let hour = 14;
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!"); // hour is 14, so this one
} else {
  console.log("Good evening!");
}

// PART 4: MOVIE TICKET PRICER
// Our pricing rules in plain English:
//   under 13      -> 1500 naira
//   65 and above  -> 2000 naira
//   13 to 17      -> 2500 naira
//   everybody else-> 3000 naira
//   any weekday   -> 500 naira off

let customerAge = Number(prompt("How old are you?"));
let day = prompt("Weekday or weekend?");

let ticketPrice;
if (customerAge < 13) {
  ticketPrice = 1500;
} else if (customerAge >= 65) {
  ticketPrice = 2000;
} else if (customerAge < 18) {
  ticketPrice = 2500;
} else {
  ticketPrice = 3000;
}

// This is a separate if, not an else if, because the weekday discount applies
// on top of whichever ticket type was chosen above.
if (day.toLowerCase() === "weekday") {
  ticketPrice = ticketPrice - 500;
}

console.log("Age " + customerAge + ", " + day + ": ₦" + ticketPrice);
