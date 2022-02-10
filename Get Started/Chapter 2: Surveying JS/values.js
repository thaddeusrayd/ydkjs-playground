"use strict";

// example: greeting("My name is Thad");
// "My name is Thad" - primitive string literal
// Quotes are delimiters

const firstName = "Thad";
console.log(`My name is ${firstName}.`); // My name is Thad.
console.log("My name is ${firstName}."); // My name is ${ firstName }.
// Using backticks as delimiter works the same, but allows for interpolation with template literals (${firstName} is a variable expression)

// Other primitive literals - booleans and numbers
while (false) {
  console.log(3.141592);
}
// boolean as the condition for the while loop, number as the value printed to the console
// will never print because always false; a condition of true would print pi forever
// number variations - Math.PI and bigint primitive type (for arbitrarily large numbers)

// numbers usually used for counting steps, as in loops, or for accessing info by position, as in arrays
const names = ["Kara", "Thad", "Bob", "Renee"];
console.log(`My name is ${names[1]}.`);

// Other primitive literals - undefined and null - emptiness
let value;
while (value != undefined) {
  console.log("Still got something!");
}

// Final primitive literal - symbol - hidden unguessable value
// example: hitchhikersGuide[Symbol("meaning of life")];

// Arrays and Objects
// Other value type besides primitive is object
// Arrays are actually objects comprised of an ordered and numerically indexed list of data
console.log(names.length); // 4
console.log(names[0]); // Kara
console.log(names[1]); // Thad
