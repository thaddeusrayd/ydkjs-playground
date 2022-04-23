// how primitives and objects are passed around
// if you assign/pass a value itself, the value is copied:

var myName = "Kyle";
var yourName = myName;

// because the value is primitive,
//  yourName has a separate copy of the string "Kyle" from the value stored in myName
// primitives are always assigned or passed as value copies

console.log(myName); // Kyle

myName = "Frank";

console.log(myName); // Frank
console.log(yourName); // Kyle

// yourName was unaffected by the reassignment because it holds a copy
