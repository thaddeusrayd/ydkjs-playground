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

// with references, two or more variables point to the same value,
//  so modifications to the shared value will be reflected in all of its references
// only object values (arrays, objects, functions, etc.) are treated as references

var myAddress = {
  street: "123 JS Blvd",
  city: "Austin",
  state: "Texas",
};

var yourAddress = myAddress;
console.log(yourAddress.street); // 123 JS Blvd

// time to move!
myAddress.street = "456 TS Ave";
console.log(yourAddress.street); // 456 TS Ave

// myAddress holds an object, so the value is held by reference, and yourAddress is a copy of that reference
