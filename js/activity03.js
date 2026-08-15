// ACTIVITY 3: THE TYPE DETECTIVE AGENCY
// Topics: data type conversions, string methods

// PART 1: GROUP DISCUSSION

// 1. prompt() always returns text. Why is that a problem?
// Because "25" + 1 gives "251" instead of 26. Even comparing goes wrong:
// "9" > "10" is true, because text is compared letter by letter and 9 comes
// after 1. The fix is to convert immediately at the point of collecting:
// let age = Number(prompt("Age?")); Then the rest of the program will see it as a number, not text.

// 2. Number() vs parseInt() vs parseFloat()
// Number() is the strictest, so it is best when the whole thing must be a
// valid number.
// parseInt() is for whole numbers, or for pulling a number off
// the front of something like "42px".
// parseFloat() is for when the decimal matters, like a price. Always write parseInt(value, 10) - the 10 means
// count in base 10.

// 3. Does .toUpperCase() change the original variable?
// No. We tested it and the original stayed the same. Strings in JavaScript
// cannot be changed, so every string method hands you a NEW value and leaves
// the old one alone. If you want to keep it you must store it:
// word = word.toUpperCase();

// 4. Why check the length of a string?
// Validation. A password that is too short, a name field somebody left empty,
// a phone number with the wrong number of digits. Also for cutting long text
// down so it fits on the screen.

// 5. A real-life situation where conversion matters
// Any online form. A quantity box on a shopping site gives you "3" but the
// total needs 3. And going the other way: a phone number like 08031234567
// must be kept as a STRING, because as a number JavaScript would throw away
// the leading zero. Same for account numbers.

// PART 2: PREDICT THE OUTPUT

// Snippet A
let input = "42";
let converted = Number(input);
console.log(input + 8); // 428 -> text joined
console.log(converted + 8); // 50 -> numbers added
// Same digits on the screen, completely different behaviour.

// Snippet B
let spacedName = "  Chidinma   ";
console.log(spacedName.trim()); // Chidinma
console.log(spacedName.length); // 13 -> 8 letters plus the 5 spaces
// This one surprised us. trim() returned a new string, so spacedName itself
// still has all its spaces, and that is what length counted.

// Snippet C
let word = "javascript";
console.log(word.toUpperCase()); // JAVASCRIPT
console.log(word); // javascript -> still small letters

// PART 3: DEBUGGING CHALLENGE
// Broken code 1:
//   let userAge = prompt("Enter your age:");  <- this is a string
//   let nextYearAge = userAge + 1;            <- so "25" + 1 = "251"
//   console.log("... " + nextyearAge);        <- nextyearAge does not exist
//
// Broken code 2:
//   let city = "lagos"
//   console.log(city.ToUpperCase());  <- capital T. It is toUpperCase()
// Error message was: city.ToUpperCase is not a function.

// Part 3 (fixed)
let ageText = Number(prompt("Enter your age:"));
let nextYearAge = ageText + 1;
console.log("Next year you will be " + nextYearAge);

let city = "lagos";
console.log(city.toUpperCase()); // LAGOS

// PART 4: USERNAME GENERATOR
// Plan in plain English:
//   1. Collect the first name and the favourite number.
//   2. Remove the spaces and make the name small letters.
//   3. Convert the number properly.
//   4. Join them together to form the username.

let personName = prompt("First name?");
let favouriteNumber = prompt("Favourite number?");

// Step 8 asked whether we should trim. Yes we should. People type extra
// spaces all the time, especially on phone keyboards, and a username with a
// space inside it is useless.
let cleanName = personName.trim().toLowerCase();

// PART 5: EXTENSION - CUT LONG NAMES TO 8 CHARACTERS
if (cleanName.length > 8) {
  cleanName = cleanName.slice(0, 8);
}

// parseInt throws away the decimal part, so 3.5 becomes 3. We do not want a
// dot inside a username.
let cleanNumber = parseInt(favouriteNumber, 10);

let username = cleanName + cleanNumber;
console.log("Your username is: " + username);
