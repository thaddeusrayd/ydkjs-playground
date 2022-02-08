"use strict";

// greeting("My name is Thad");
// "My name is Thad" - primitive string literal
// Quotes are delimiters

const firstName = "Thad";
console.log(`My name is ${firstName}.`); // My name is Thad.
console.log("My name is ${ firstName }."); // My name is ${ firstName }.

// Using backticks as delimiter works the same, but allows for interpolation with template literals
