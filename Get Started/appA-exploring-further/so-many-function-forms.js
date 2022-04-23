var awesomeFunction = function (coolThings) {
  // ..
  return amazingStuff;
};

// this function expression is an example of an *anonymous function expression*,
//  as it has no name identifier between the function keyword and the parameter list
// one point of confusion here is that ES6 performs a "name inference" on anonymous funcs:

awesomeFunction.name; // "awesomeFunction"

// the <name> prop of a function will reveal either its directly given name or its inferred name (if anon)
// this is generally used in dev tools when inspecting func value or reporting error stack trace

// anon funcs don't always get inferred names, only in limited cases, like when the func expression
//  is assigned (with =)
// e.g. if you pass a func expression as an argument to a func call, no name inference occurs -
//  the <name> prop will be an empty string, and dev console will usually report "anonymous function"

// even if a name is inferred, it's still anonymous
// inferred names are metadata string values, not available identifiers -- anon funcs can't refer to themselves

// compare the anon func expression to:

// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function someName(coolThings) {
  // ..
  return amazingStuff;
};

awesomeFunction.name; // "someName"

// this is a *named function expression*, since the identifier someName is directly associated with the
//  function expression at compile; the association with awesomeFunction doesn't happen until runtime
//  at the time of that statement
// they don't have to match -- sometimes it makes sense for them to, other times it doesn't

// the explicit function name someName takes precedence when assigning a name to the <name> property

//
// Other Function Declaration Forms

// generator function declaration:
function* two() {}

// async function declaration:
async function three() {}

// async generator function declaration:
async function* four() {}

// named function export declaration (ES6 modules):
export function five() {}

//
// Other Function Expression Forms

// IIFE
(function () {})();
(function namedIIFE() {})();

// async IIFE
(async function () {})();
(async function namedAIIFE() {})();

// arrow function expressions
var f;
f = () => 42;
f = (x) => x * 2;
f = (x) => x * 2;
f = (x, y) => x * y;
f = (x) => ({ x: x * 2 });
f = (x) => {
  return x * 2;
};
f = async (x) => {
  var y = await doSomethingAsync(x);
  return y * 2;
};
someOperation((x) => x * 2);
