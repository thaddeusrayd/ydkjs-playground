"use strict";

// values can appear as either literal or held in variables -- variables are containers for values
// variables must be declared as one of many "identifiers"

// var
var myNameVar = "Thad";
var ageVar;
// var declares a variable to be used in that scope and gives the option for initial assignment at declaration

// let
let myNameLet = "Thad";
let ageLet;
// let allows access to that variable ONLY in it's scope ("block scoping", as opposed to regular or function scoping)

// Example:
var adult = true;

if (adult) {
  var myName = "Thad";
  let age = 28;
  console.log("Shhh, this is a secret!");
}

console.log(myName); // Thad
// console.log(age); // Error // (commented out for section's terminal output)

// if we changed "let age" to "var age", we now have access,
// even though it's declared in the scope of the if statement:
if (adult) {
  var myName = "Thad";
  var age = 28;
  console.log("Shhh, this is a secret!");
}

console.log(myName); // Thad
console.log(age); // Error // (commented out for section's terminal output)
// this is because of let's ability to block scope,
// very useful for limiting how widespread variable declarations are in our programs,
// which helps prevent accidental overlap of their names.
// var is still useful, however, in that it communicates that the variable will be seen outside of its scope
// it's common to suggest that var should be thrown out since we have let and const (incoming),
// but the author believes this to be the overly restrictive result of a misunderstanding of scoping behavior
// and advocates that all available features be used when appropriate.

// const
// const works like let, but it MUST be a assigned a value at declaration and cannot be reassigned
const myBirthday = true;
let ageConstEx = 28;

if (myBirthday) {
  ageConstEx = ageConstEx + 1; // (this is fine)
  // myBirthday = false; // (this is not - consts cannot be reassigned) // (commented out for section terminal output)
}
// const variables are not unchangeable; they just can't be reassigned
// for this reason, it's not a great idea to assign object values to const variables
// Example:
const actors = ["Morgan Freeman", "Jennifer Anniston"];

actors[2] = "Tom Cruise"; // (this technically works)
// actors = []; // (this does not) // (commented out for terminal output)
// best semantic use for const is with primitive values, as with myBirthday above
// summation = const variables can be "mutated" but cannot be "reassigned" - to avoid confusion, use primitives
