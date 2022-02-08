"use strict";

// greeting("My name is Thad");
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
