// ACTIVITY 4: TEXT AND NUMBERS
// Topics: string methods, Math methods

// PART 1: GROUP DISCUSSION

// 1. Why would a program need Math.random()?
// Anything that must not be predictable: games,picking a random question in a quiz, choosing a raffle winner, generating a temporary code. It gives a decimal from 0 up to (but never reaching) 1.

// 2. Checking if text contains something like "@"
// .includes("@") gives back true or false. There is also .indexOf() which
// gives the position or -1, plus .startsWith() and .endsWith().

// 3. .slice() vs .split()
// .slice(start, end) gives back ONE shorter string, a piece cut out of theoriginal.
// .split(separator) gives back an ARRAY of all the pieces.
//   "Learning to code".slice(0, 8)  ->  "Learning" (a string)
//   "Learning to code".split(" ")   ->  ["Learning","to","code"]  (an array)

// PART 2: PREDICT THE OUTPUT

// Snippet A
console.log(Math.round(4.5)); // 5 -> nearest number, and .5 goes up
console.log(Math.floor(4.9)); // 4 -> floor always goes down
console.log(Math.ceil(4.1)); // 5 -> ceiling always goes up
// Easy way to remember: floor is the ground, ceiling is the roof.

// Snippet B
let phrase = "I love JavaScript";
console.log(phrase.includes("love")); // true
console.log(phrase.split(" ")); // ["I", "love", "JavaScript"]

// Snippet C
let num = 7;
console.log(Math.max(num, 10, 3)); // 10
console.log(Math.min(num, 10, 3)); // 3

// PART 3: DEBUGGING CHALLENGE
// Broken code:
//   let rounded = Math.Round(score);        <- capital R. It is Math.round
//   console.log("Rounded score: " rounded); <- missing + sign
//   let firstWord = sentence.split(" ")[0]
//   console.log(firstword);                 <- firstword vs firstWord
// Four things in one small block. The missing + is a SyntaxError so nothing
// runs

// Part 3 (fixed)
let score = 87.6;
let rounded = Math.round(score);
console.log("Rounded score: " + rounded); // Rounded score: 88

let sentence = "Learning to code is fun";
let firstWord = sentence.split(" ")[0];
console.log(firstWord); // Learning

// PART 4: GRADE ROUNDER AND REPORTER
// Plan in plain English:
//   1. Collect the student name and the exact score.
//   2. Clean the name and make it capital letters.
//   3. Round the score.
//   4. Print a message with both.

let studentName = prompt("Student name?");
let studentScore = Number(prompt("Exact score?"));

// Step 8: trim BEFORE uppercase. toUpperCase() does nothing to spaces, so
// "  Bisi  " would come out as "  BISI  " and the report looks broken.
let displayName = studentName.trim().toUpperCase();

// PART 5: EXTENSION - RANDOM BONUS POINT BETWEEN 0 AND 5
// Math.random() gives something like 0.7342. Times 6 gives 0 to 5.999 and
// Math.floor cuts off the decimal, leaving 0, 1, 2, 3, 4 or 5.
let bonus = Math.floor(Math.random() * 6);

let finalScore = Math.round(studentScore + bonus);

// A bonus should not push anybody past 100.
finalScore = Math.min(finalScore, 100);

console.log(displayName + " scored " + finalScore + " out of 100.");
console.log("(exact score " + studentScore + " plus a bonus of " + bonus + ")");

// Test cases: "grace" 89.5, "Chuka" 100, " Bisi " 59.3
// Run it more than once - the bonus changes every time.
