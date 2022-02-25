// <<this>> - wildly powerful, wildly misunderstood
// a function's <<this>> does NOT refer to the function itself
// not does <<this>> point to the instance that a method belongs to

// when a function is defined, it's *attached* to its enclosing scope ('cause closure)
// scope - the set of rules that controls how references to variables are resolved

// functions have *another* characteristic that affects what they can access: EXECUTION CONTEXT
// execution context is exposed to the function via its <<this>> keyword

// scope is static, containing a fixed set of variables that are available at the moment and location of function *definition*
// execution is *dynamic*, entirely dependent on *how it is called* (regardless of where it is defined or called from)

// <<this>> is not a fixed characteristic of a function based on function definition, but a *dynamic* characteristic that's
//  determined each time the function is *called*

// one way to think about execution context:
// a tangible object whose properties are made available to a function *while it executes*
// compared to scope, also an object, except the scope object is *hidden inside the JS engine*
// thus, a scope is always the same for that function, and its props take the form of identifier variables inside the function:
function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`);
  };
}

var assignment = classroom("Kyle");
// the outer function, classroom(), makes no reference to a <<this>>, so it's just like any other function we've seen
// however, the inner function, study(), does reference a <<this>>, making it a "this-aware" function,
//  meaning it's dependent on its execution context
// NOTE: study() also closes over the <<teacher>> variable from the outer scope
assignment(); // Kyle says to study undefined // if using strict mode, it'll just error out
// assignment() is called as a normal function with no execution context
// without strict mode, context-aware functions like these default to the context of the global object (window in the browser)
// since there is no global <<topic>> variable, this.topic resolves to undefined
