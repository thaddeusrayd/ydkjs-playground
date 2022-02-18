"use strict";

// Iteration
// programs are built to process data and make decisions on that data
// patterns used to step through data have a big impact on readability
// iterator pattern suggests a standardized approach for processing a collection of data progressively,
//  one chunk at a time, rather than all at once
// imagine a data structure that represents a relational database << SELECT >> query, which organizes results as rows.
//  if it just had a couple rows, you could process an entire result at once, assigning each row to a local variable,
//  and perform operations on that data
// however, if the query has 100 or 1,000 or more rows, you'll need iterative processing to handle the data (usually a loop)
// the iterator pattern defines a data structure called an "iterator" that has a reference to an underlying data source
//  (like the query result rows from our example) which exposes a method like next(). Calling next() returns the next piece of data,
//  like the record or row from our example
// you don't always know how many pieces of data there are, so the pattern usually indicates completion by some special
//  value or exception once it iterations through the entire selection and goes *past the end*
// the iterator pattern establishes a standardized way of processing data, rather than a different way for each source
// ES6 defines a next() method whose return is an object called an "iterator result", which has << value >> and << done >> properties,
//  where << done >> is a boolean that's << false >> until the iteration is complete

//
// Consuming Iterators
// ES6 includes several syntaxes and apis for standard consumption of iterators:

// << for..of >> loop
// example:
// given an iterator of some data source:
// var it = /*..*/; // (commented out for error avoidance)

// loop over its results one at a time // (commented out for execution)
// for (let val of it) {
//  console.log(`Iterator value: ${val}`);
//}
// Iterator value: ..
// Iterator value: ..
// ..

// << ... >> operator ("spread" and "rest") - "spread" is the iterator consumer
// to spread an iterator, you have to have something to spread into - an array or an argument list for a function call

// array spread example:
// spread an iterator into an array,
// with each iterated value occupying
// an array element position.
// var vals = [...it]; // (commented out for execution)

// function call spread example:
// spread an iterator into a function,
// call with each iterated value
// occupying an argument position
// doSomethingUseful(...it); // (commented out for execution)

//
// Iterables
// an iterable is a value that can be iterated over
// ES6 protocol automatically creates an iterator instance from an iterable, and consumes just that iterator instance to completion
// a single iterable can be iterated more than once, creating a new iterator instance each time
// so where do we find iterables?
// iterable data structures/collection types - strings, arrays, maps, sets, and others

// an array is an iterable:
var arr = [10, 20, 30];

for (let val of arr) {
  console.log(`Array value: ${val}`);
}
// Array value: 10
// Array value: 20
// Array value: 30

// since array are iterables, we can shallow-copy an array with spread:
var arrCopy = [...arr];
console.log(arrCopy); // [ 10, 20, 30]

// we can also iterate characters in a string:
var greeting = "Hello world!";
var chars = [...greeting];

console.log(chars); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]

// a << map >> data structure uses objects as keys, associating a value with that object
// maps have a different default iteration - not just iterating values, but *entries* instead
// an entry is a "tuple" (2-element array) including a key and a value
// Example:

// given two DOM elements, btn1 and btn2
var buttonNames = new Map();
buttonNames.set(btn1, "Button 1");
buttonNames.set(btn2, "Button 2");

for (let [btn, btnName] of buttonNames) {
  btn.addEventListener("click", function onClick() {
    console.log(`Clicked ${btnName}`);
  });
}
// in the for..of loop over the default map iteration, we use [btn, btnName] (array destructuring)
//  to break down each consumed tuple into their respective key/value pairs (btn1 / "Button 1" and btn2 / "Button 2")
// each of the built-in JS iterables has a default, but you can use a specific iteration if needed
// for example, if we only wanted to consume the values of buttonNames, we can call values() to get a values-only iterator:
for (let btnName of buttonNames.values()) {
  console.log(btnName);
}
// Button 1
// Button 2

// or if we wanted the index AND value of an array iteration, we can use entries() to create an entries iterator:
var arr = [10, 20, 30];
for (let [idx, val] of arr.entries()) {
  console.log(`[${idx}]: ${val}`);
}
// [0]: 10
// [1]: 20
// [2]: 30
