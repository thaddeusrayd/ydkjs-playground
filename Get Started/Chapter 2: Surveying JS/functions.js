"use strict";

// "functions" are "procedures"
// procedure - collection of statements that can be invoked one or more times, may be provided some inputs,
// and may give back one or more inputs
// an early example of a JS function:
function awesomeFunction(coolThings) {
  // ..
  return amazingStuff;
}
// this is called a function declaration because it is its own statement, not an expression of another
// the association between awesomeFunction (the identifier) and the function value happens during compile phase, before execution

// in contrast to Function Declaration, here's a Function Expression:

// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function (coolThings) {
  // ..
  return amazingStuff;
};
// this function is an *expression* that is assigned to the *variable* awesomeFunction.
// a function *expression*, unlike a function *declaration*, isn't associated with its identifier until executed at runtime

//              IMPORTANT: in JS, functions are *values* that can be *assigned* and *passed around*
//                  they are a special kind of object value type. This is essential to support
//                  the Functional Programming (FP) pattern. Not all languages do this.

//
// Parameters
// JS functions can receive parameter input:
function greeting(myName) {
  console.log(`Hello, ${myName}!`);
}

greeting("Thad");
// myName is a parameter - a local variable inside a function
// functions can be designed to receive any number of parameters, including none at all
// parameters are assigned the value given to them in their respective positions in the call - in this case, "Thad"
