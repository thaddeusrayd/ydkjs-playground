/*
NOTES


organization of variables into units of scope are fundamental to how programs behave in any language

scopes: buckets
variables: marbles
scope model: rule that help you determine which marbles go in which matching bucket

scopes nest
only varibles at that level of nesting or above/outer are accesible
lexical scope - unit boundaries are determined at parsing (compilation)

JS is lexically scoped 
others say it isn't because
    1. hoisting - all variables in a scope are treated like they were declared at the beginning
    2. var-declared variables variables are function-scoped, even if they're in a block

let/const have Temporal Dead Zone (TDZ), where variables are observable but inaccesible

closure is a natural result of functions being first-class values, as in JS
when a function can access a variable from an outer scope, and then the function is passed around, it still accesses the variable - closure

closure drives many important programming patterns, like modules

*/
