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
// the first argument to Object.create() specifies an object to link the new object to, then returns the new linked object
// otherHomework  ---[[prototype]]--->  homework (topic: JS)  ---[[prototype]]--->  Object.prototype (toString())

// TIP: if an object is created using Object.create(null), it isn't prototype linked to anything

// Consider:
console.log(homework.topic); // JS
console.log(otherHomework.topic); // JS

otherHomework.topic = "Math";
console.log(otherHomework.topic); // Math

console.log(homework.topic); // JS

// the assignment of <<topic>> creates a property directly on otherHomework, and there's no effect on <<homework>>
// when we access the topic property of otherHomework, we now get the non-delegated value

//
// <<this>> revisited
// true importance shines when considering how it powers prototype-delegated function calls
// one of the main reasons it supports dynamic context based on how the function is called
//  is so that method calls on objects which delegate through the prototype chain still
//  maintain the expected <<this>>
// consider:
var homework = {
  study() {
    console.log(`Please study ${this.topic}`);
  },
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study(); // Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study(); // Please study Math
// the two homework objects each prototype link to <<homework>>, which holds study()
// js and math are each given their own topic prop
