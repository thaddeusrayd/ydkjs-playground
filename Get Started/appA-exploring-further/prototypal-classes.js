// we've shown how we can link objects through the prototype chain
// before ES6, there was another way - prototypal classes

// NOTE: this isn't used often, but comes up a lot in job interviews

// recall Object.create() style:
var Classroom = {
  welcome() {
    console.log("Welcome, students!");
  },
};

var mathClass = Object.create(Classroom);

mathClass.welcome(); // Welcome, students!
