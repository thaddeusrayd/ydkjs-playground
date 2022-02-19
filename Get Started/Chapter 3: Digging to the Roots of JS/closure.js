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
// the greeting() outer function is called first, which creates an instance of the inner function who()
// who() closes over the variable msg, which is the parameter of the outer scope of greeting()
// when who() returns, its reference is assigned to the hello variable in the outer scope
// then we call greeting() a second time, creating a new inner function instance,
//  with a new closure over msg, which returns that reference to be assigned to howdy()

// when greeting() finishes running, msg doesn't go away, because of closure
// the msg variables persist because the inner function *instances* are assigned to hello and howdy - closure.
// these closures are not a snapshot of the msg variable's value; they are a direct link and preservation of the variable itself
// because of this, closures can observe or make changes to these variables over time:
function counter(step = 1) {
  var count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

console.log(incBy1()); // 1
console.log(incBy1()); // 2
console.log(incBy3()); // 3
console.log(incBy3()); // 6
console.log(incBy3()); // 9
// each instance of the inner increaseCount() function is closed over both the << count >> and << step >> variables
//  from the scope of counter(), the outer function
// << step >>, from the outer scope, remains the same over time, but << count >> is updated with each invocation of increaseCount()
// since closure is over variables, and not just snapshots, the updates are preserved
