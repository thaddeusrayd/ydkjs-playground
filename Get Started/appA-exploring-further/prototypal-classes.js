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

// here, mathClass is linked via prototype to a Classroom object, and welcome() is delegated

// the prototypal class pattern would have called this inheritance and would have defined it as...
function Classroom() {
  // ..
}

Classroom.prototype.welcome = function hello() {
  console.log("Welcome, students!");
};

var mathClass = new Classroom();

mathClass.welcome();

// all funcs by default reference an empty object at a property named <prototype>
// this is *not* the func's prototype, but rather the prototype object to link to when other objects
//  are created when calling the func with <new>

// we add a <welcome> prop on that empty object, pointing at the hello() func

// new Classroom() then creates a new object assigned to mathClass and prototype links it to the
//  Classroom.prototype object

// mathClass doesn't have a welcome() prop/func, so it delegates to Classroom.prototype.welcome()
