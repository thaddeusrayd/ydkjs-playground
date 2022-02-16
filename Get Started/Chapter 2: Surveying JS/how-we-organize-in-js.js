"use strict";

// two major patterns for organizing code in JS: classes and modules
// not mutually exclusive -- many programs use one, both, or neither
// these patterns are very different, but they are also two sides of the same coin

//
// Classes
// a definition of a "type" of custom data structure that includes both data and behaviors that operate on that data
// define how that data structure works, but classes are NOT concrete values
// to get a concrete value to be used in a program, a class must be *instantiated* at least once with the << new >> keyword

// Example:
class Page {
  constructor(text) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }
}

class Notebook {
  constructor() {
    this.pages = [];
  }

  addPage(text) {
    var page = new Page(text);
    this.pages.push(page);
  }

  print() {
    for (let page of this.pages) {
      page.print();
    }
  }
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");

mathNotes.print();

// in the Page class, the DATA is a string of text stored in a this.text member property
// the BEHAVIOR is print(), which logs the text to the console
// in the Notebook class, the DATA is an array of pages (instances of the Page class)
// the BEHAVIORS are
//      addPage(text), which creates a new Page and pushes it to the pages array
//      and
//      print(), which loops through the pages array and prints each page
// mathNotes = new Notebook() (line 41) creates an instance of the Notebook class,
// and page = new Page(text) (line 30) creates a new instance of the Page class
// BEHAVIORS can only be called on *instances*, not the classes themselves (mathNotes.addPage(..) and page.print())
// The << class >> mechanism allows packaging data (<< text >> and << pages >>)
// to be organized together with their behaviors (addPage(..) and print())

//
// Class inheritance (or "polymorphism")
// Ex:
class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  print() {
    console.log(`
        Title: ${this.title}
        By: ${this.author}
        ${this.pubDate}
    `);
  }
}
// Publication defines a set of common behaviors that any publication may need
// More specific types of publications:
class Book extends Publication {
  constructor(bookDetails) {
    super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }

  print() {
    super.print();
    console.log(`
        Publisher: ${this.publisher}
        ISBN: ${this.ISBN}
    `);
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }

  print() {
    super.print();
    console.log(this.URL);
  }
}
// both Book and BlogPost uses << extends >> clause to extend the definition of Publication to include additional behavior
// super(..) delegates the parent (Publication) class constructor for its work, and then adds things based on publication type
// these extentions are called sub-classes or child classes

// Example usage of these child classes:
var YDKJS = new Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789",
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
//
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = new BlogPost(
  "For and Against Let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and Against Let
// By: Kyle Simpson
// October 27, 2014
//
// https://davidwalsh.name/for-and-against-let

// notice that both child classes have their own print() method, which overrides the parent print
// therefore we use << super >> to invoke the parent print()
// POLYMORPHISM - the fact that both the inherited and overridden methods can have the same name and coexist

//
// Modules
// pattern that has essentially the same goal as classes - *group data and behavior into logical units*
// also like classes, modules can include or access data and behavior from other modules
// one of the major differences - syntax

// Classic Modules
// ES6 added a specific native syntax for modules, but they've been used since the early days
// key hallmarks of classic modules: outer function - runs at least once
// and returns an instance of the module with one or more functions exposed that can operate on the module's hidden data
// a module of this form is just a function, and calling it produces an instance of it - known as "module factories"
// classic module example of the Publication, Book, and BlogPost classes from above:
function ModulePublication(title, author, pubDate) {
  var publicAPI = {
    print() {
      console.log(`
        Title: ${title}
        By: ${author}
        ${pubDate}
      `);
    },
  };

  return publicAPI;
}

function ModuleBook(bookDetails) {
  var pub = ModulePublication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.publishedOn
  );

  var publicAPI = {
    print() {
      pub.print();
      console.log(`
        Publisher: ${bookDetails.publisher}
        ISBN: ${bookDetails.ISBN}
      `);
    },
  };

  return publicAPI;
}

function ModuleBlogPost(title, author, pubDate, URL) {
  var pub = ModulePublication(title, author, pubDate);

  var publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    },
  };

  return publicAPI;
}
// comparing classic module and class forms:
// 1a. class stores data and methods in object form, which must be accessed by << this >>
// 1b. in modules, data and methods are accessed as identifier variables in scope, without << this >>
// 2a. with classes, an instance's "API" is implicit in the class definition, and everything is public
// 2b. with module, you explicitly create and return an object with any public methods,
//  and any data or methods not referenced remain private - inside the factory function

// forms you may run across - Asynchronous Module Definition (AMD), Universal Module Definition (UMD),
//  and CommonJS (classic Node.js-style modules) -- the variations are minor, but they rely on the same principles
// Example of instantiation:
var moduleYDKJS = ModuleBook({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789",
});

moduleYDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
//
//
// Publisher: O'Reilly
// ISBN: 123456-789

var moduleForAgainstLet = ModuleBlogPost(
  "For and Against Let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);

moduleForAgainstLet.print();
// Title: For and Against Let
// By: Kyle Simpson
// October 27, 2014
//
// https://davidwalsh.name/for-and-against-let

//
// the only observable difference here is the lack of using << new >> and calling the module factories like functions

//
// ES Modules
//
