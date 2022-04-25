// conditional comparisons needing to make coercion-oriented comparisons

// if/ternary statements and while/for loops perform implicit value comparisons,
//  both "strictly" and "coercively"

var x = 1;

if (x) {
  // will run!
}

while (x) {
  // will run once!
  x = false;
}

// you *could* think of these expressions like this:
if (x == true) {
  // will run!
}

while (x == true) {
  // will run once!
  x = false;
}

// however, this mental model doesn't work more broadly than this case
// consider:
var x = "hello";

if (x) {
  // will run!
}

if (x == true) {
  // will not run!
}

// but why? here's the more accurate mental model:
if (Boolean(x) == true) {
  // will run!
}
// which is the same as...
if (Boolean(x) === true) {
  // will run!
}

// since Boolean() always returns a boolean value, == and === are irrelevant
// the important thing to see is that coercion occurs before the comparison, from x's type to boolean
