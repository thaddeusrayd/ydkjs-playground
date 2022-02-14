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
