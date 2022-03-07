"use strict";

// where <<this>> is a characteristic of function execution, a *prototype* is a characteristic of an *object*
// specifically, resolution of a property access

// a prototype is a linkage between two objects, hidden behind the scenes, though there are ways to expose and observe it
// the linkage occurs when an object is created, and it's linked to another object that already exists

// a series of objects linked together via prototypes is called the *prototype chain*

// the purpose of this is so that accesses against the second object for props/methods that it *does not have* will be
//  delegated to the first object to handle
// this delegation of props/methods allows two or more objects to to cooperate with each other

// consider defining an object as a normal literal:
var homework = {
  topic: "JS",
};
// <homework> only has a single prop on it
// however, its default prototype linkage connects to the <<Object.prototype>> object, which holds the common built-in object methods
// observe:
console.log(homework.toString()); // [object Object]
// this works even though <homework> doesn't have a <toString> method -- it defaults to the Object.prototype object

//
// Object Linkage
// to define an object prototype linkage, use the Object.create() utility:
var otherHomework = Object.create(homework);

console.log(otherHomework.topic); // JS
