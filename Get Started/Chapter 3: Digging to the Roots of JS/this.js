"use strict";

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
