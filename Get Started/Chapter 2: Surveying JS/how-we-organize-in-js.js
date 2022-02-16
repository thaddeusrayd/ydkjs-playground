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
function Publication(title, author, pubDate) {
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

function Book(bookDetails) {
  var pub = Publication(
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

function BlogPost(title, author, pubDate, URL) {
  var pub = Publication(title, author, pubDate);

  var publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    },
  };

  return publicAPI;
}
