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

//
// Coercive Comparisons
// coercion is when a value of one type is converted into its respective representation in another type
// core pillar of JS

// == ("loose equality")
// == works the same as === when the values have the same type, but it differs in that it allows coercion *first*
// a better term = "coercive equality"

42 == "42" // true
1 == true // true
// "42" and true are converted to their number values: 42 and 1
// NOTE: == prefers primitive number comparisons
// Problem with just using === all the time to avoid coercion comparison: relational comparison (>, <, <=, >=) also allow coercion
// Example:
var arr = ["1", "10", "100", "1000"];
for (let i = 0; i<arr.length && arr[i] > 500; i++) {
    // will run three times
}
// i<arr.length is safe from coercion because i and arr.length are always numbers
// arr[i] > 500, however, is not. Because all of the array items are strings.
// the loop stops at "1000" because the item is coerced to its number representation (1000) and compared to 500

// relational operators typically use numeric comparisons, unless the items being compared are already strings, 
// in which case they use alphabetical (dictionary-like) comparison of strings:
x = "10"
y = "9"

x < y // true // "10" character code in ASCII is less than "9" character code


