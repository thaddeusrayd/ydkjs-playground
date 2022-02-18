"use strict";

// Closure
// fundamental and pervasive - VERY important to understand
// defined - when a function remembers and continues to access variables from outside its scope,
//  even when the function is executed in a different scope
// two important characteristics:
// 1. closure is part of the nature of a function -- objects don't get closures, functions do
// 2. to observe a closure, you must execute a function in a different scope than where that function was initially defined
// Example:
function greeting(msg) {
  return function who(name) {
    console.log(`${msg}, ${name}!`);
  };
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle"); // Hello, Kyle!
hello("Sarah"); // Hello, Sarah!
howdy("Grant"); // Howdy, Grant!
