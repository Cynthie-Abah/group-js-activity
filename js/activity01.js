// ACTIVITY 1: THE DIGITAL MEMORY BOX
// Topics: console.log(), alert(), prompt(), confirm(),
//         variables, data types
// Part 1

// 1. How does a variable help a program remember a name?**
// A variable is a labelled box in memory. `let userName = prompt("Your name?")` puts the typed text in a box called `userName`, and every later line can open that box by name. Without it the value is used once and lost, so the program could never greet the user on a later line.

// 2. console.log() vs alert() vs prompt() vs confirm()

// console.log(): Prints to the developer console. Debugging and checking values — it doesn't interrupt the user.
// alert(): Pop-up with a message and OK Telling the user something they must acknowledge.
// prompt(): Pop-up with a text box; returns what was typed (a string), or `null` on Cancel Collecting a piece of input
// confirm(): Pop-up with OK/Cancel; returns true or false. A yes/no decision, e.g. "Do you want to delete this order?"

// 3. let vs const
// let allows reassignment later; const does not — reassigning it throws `TypeError: Assignment to constant variable`. We choose const on purpose because it's less flexible. It doesnt allow a value to be reassigned. only use let only when the value genuinely has to change.

// 4. Why several data types?
// The type tells JavaScript what operations make sense. 5 + 5 should be 10, "5" + "5" should be "55" — same operator, different meaning, decided by type.
// Types also let each value be stored properly and let the engine catch nonsense.

// 5. Two names for the same thing (`userName` vs `name1`)
// Whoever reads the code later has to hold both names in their head and guess whether they mean the same thing. It causes real bugs (updating one and reading the other), makes merging in Git painful, and makes 'name1' meaningless six months on. The fix is a naming convention agreed before coding: descriptive, camelCase, one name per concept.
// imaging working on a team of 10 people, and each person has their own name for the same variable. It would be chaos.

// PART 2
// SNIPPET A: VARIABLES AND DATA TYPES
let age = 25;
console.log(age); // 25
age = "twenty-five";
console.log(age); // twenty-five
// let allows the value to be replaced, and a variable can
// even hold a different data type later on.

// Snippet B
const isRaining = true;
console.log("Is it raining? " + isRaining); // Is it raining? true
// The boolean is turned into text so it can join the string.

// Snippet C
let favoriteNumber;
console.log(favoriteNumber); // undefined
// Declared but never given a value.

// ---------- PART 3: DEBUGGING CHALLENGE ----------
// The broken code:
//
//   let userName = "Amara"        <- missing semicolon
//   console.log(username);        <- wrong capitals
//   Const favoriteColor = "blue"; <- Const should be const
//   console.log(favoriteColor);
//
// "Const" with a capital C is a SyntaxError, so NOTHING in
// the file will run. And username is not the same as userName,
// because JavaScript is case sensitive.

// Part 3 (fixed)
let userName = "Amara";
console.log(userName); // Amara

const favoriteColor = "blue";
console.log(favoriteColor); // blue

// ---------- PART 4: WELCOME PROGRAM ----------
// Plan in plain English:
//   1. Get the user's name.
//   2. Get the user's age as a number.
//   3. Birth year = this year - age.
//   4. Show a greeting with the name and the birth year.

//   Part 4: Welcome Program
let name = prompt("What is your name?");
let userAge = Number(prompt("How old are you?"));

let currentYear = 2026;
let birthYear = currentYear - userAge;

// ---------- PART 5: EXTENSION - ADD A HOBBY ----------
// A hobby is stored as a string, because it is text we
// display and never do maths with.
let hobby = prompt("What is your favourite hobby?");
let hobby = "football";

let greeting =
  "Welcome, " +
  name +
  "! You were born in about " +
  birthYear +
  ". Enjoy your " +
  hobby +
  "!";

console.log(greeting);

// Test case 2
name = "Bola";
userAge = 45;
birthYear = currentYear - userAge;
console.log("Welcome, " + name + "! You were born in about " + birthYear + ".");
