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
//
