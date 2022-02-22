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

// closure is most common when working with async code, such as with callbacks:
function getSomeData(url) {
  ajax(url, function onResponse(resp) {
    console.log(`Response (from ${url}): ${resp}`);
  });
}

getSomeData("https://some.url/wherever");
// Response (from https://some.url/wherever): ...

// the inner function onResponse(resp) is closed over <<url>>, and thus preserves and remembers it
//  until the ajax call returns and executes onResponse(resp)
// getSomeData() finishes right away, but the <<url>> parameter variable is kept alive as long as it has to

// the outer scope doesn't have to be a function, though it usually is
// * just that there has to be at least one variable in the outer scope that's accessed by the inner function *
// Ex:
for (let [idx, btn] of buttons.entries()) {
  btn.addEventListener("click", function onClick() {
    console.log(`Clicked on button (${idx})!`);
  });
}
// each iteration of this loop will get new block-scoped idx and btn variables because the loop uses <<let>> declarations
// it also creates a new inner onClick() function every time, which closes over idx, so idx is preserved as long as
//  the click handler is set on the btn
// when each button is clicked, its handler can print its associated index
// NOTE: this closure is not over the index *value*, but over the variable <<idx>> itself

// more on closures in Book 2: Scope & Closures
