"use strict";

// equality vs. equivalency
// === means 'strict equality' -- MOST of the time, it indicates exact sameness

3 === 3.0; // true
"yes" === "yes"; // true
null === null; // true
false === false; // true

42 === "42"; // false
"hello" === "Hello"; // false
true === 1; // false
0 === null; // false
"" === null; // false
null === undefined; // false

// === does not allow type coercion, while others do
// === "lies" in two special cases: NaN and -0

NaN === NaN; // false
0 === -0; // true

// for NaN, it's best to use the Number.isNaN(..) utility
// for -0, it's best to use the Object.is(..) utility, which is like a "quadruple equals" comparison

// more complications arise when comparing object (or non-primitive) values:
[1, 2, 3] === [1, 2, 3]; // false
{ a: 42 } === { a: 42 }; // false
(x => x * 2) === (x => x * 2) // false
// content-aware comparison is known as "structural comparison"
// === is not "structural comparison", but "identity equality"
// in JS, all object values are held by *reference*, are assigned and passed by *reference-copy*, 
// and are compared by *reference (identity) equality*:
var x = [1,2,3];
// assignment is by reference-copy, so y references the SAME ARRAY as x, not another copy of it
var y = x;

y === x // true
y === [1,2,3] // false
x === [1,2,3] // false
// y === x because both variables hold references to the same array
// x/y !== [1,2,3] because both x and y are being compared to a *new* [1,2,3]
// content doesn't matter -- just the *identity*
// JS does not support structural equality for object values, only reference identity comparison
