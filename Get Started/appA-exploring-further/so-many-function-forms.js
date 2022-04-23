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
