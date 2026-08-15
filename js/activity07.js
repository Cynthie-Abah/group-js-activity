// ACTIVITY 7: REPEAT AFTER ME
// Topics: loops

// PART 1: GROUP DISCUSSION

// 1. Why use a loop instead of writing the same line many times?
// Most of the time you do not even know how many times it should run until the program is running (how many items are in the cart?). And if you write the line fifty times, then one day you have to change fifty lines and you will definitely miss one.

// 2. for loop vs while loop
// Use for when you know how many times, or you are counting through a range. Its three parts (start, condition, step) all sit on one line where you can see them together. Use while when you are waiting for something to become true, like "keep asking until the password is correct". Either one can do what the other does, it is about which one shows your intention.

// 3. What is an infinite loop?
// A loop whose condition never becomes false, so it runs until the browser freezes. Usually because you forgot to change the counter inside the loop, or you changed the wrong variable, or your step is moving the wrong way (i-- when the condition is i < 10). To debug it, print the counter inside the loop. If the same number keeps printing, that is your problem.

// 4. A loop that should run 5 times but runs 4? Check the condition first - it is almost always an off-by-one. i < 5 starting from 1 gives four rounds. i <= 5 gives five.

// 5. Something you do repeatedly in real life, as loop logic
// Fetching water: START with an empty drum, CONDITION is "the drum is not full yet", STEP is pour in one more bucket. Brushing teeth works the same way - start at the first tooth, keep going while there are dirty teeth, move to the next tooth.

// PART 2: PREDICT THE OUTPUT

// Snippet A
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1 2 3 4 5
}
// If it was i < 5 it would stop at 4.

// Snippet B
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`); // 3, then 2, then 1
  count--; // this single line is what eventually stops the loop
}
console.log("Liftoff!");

// Snippet C
for (let i = 0; i < 10; i = i + 2) {
  console.log(i); // 0 2 4 6 8
}
// The step does not have to be 1. And 10 never prints because 10 < 10 is false.

// PART 3: DEBUGGING CHALLENGE
// Block 1 was only missing a semicolon after "total = total + i".
//
// Block 2 is a real infinite loop:
//   let count = 5;
//   while (count > 0) {
//     console.log(count);   <- nothing here ever changes count,
//   }                          so count > 0 stays true forever
// The fix is count-- inside the loop.

// Part 3 (fixed)
let total = 0;
for (let i = 1; i <= 5; i++) {
  total = total + i;
}
console.log("Total: " + total); // Total: 15

let countdown = 5;
while (countdown > 0) {
  console.log(countdown); // 5 4 3 2 1
  countdown--; // the line the broken version forgot
}

// A LOOP DOING SOMETHING USEFUL
let table = Number(prompt("Which times table do you want? (1 to 12)"));

console.log("--- The " + table + " times table ---");
for (let n = 1; n <= 12; n++) {
  console.log(table + " x " + n + " = " + table * n);
}
