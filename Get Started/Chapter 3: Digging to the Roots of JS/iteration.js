"use strict";

// Iteration
// programs are built to process data and make decisions on that data
// patterns used to step through data have a big impact on readability
// iterator pattern suggests a standardized approach for processing a collection of data progressively,
//  one chunk at a time, rather than all at once
// imagine a data structure that represents a relational database << SELECT >> query, which organizes results as rows.
//  if it just had a couple rows, you could process an entire result at once, assigning each row to a local variable,
//  and perform operations on that data
// however, if the query has 100 or 1,000 or more rows, you'll need iterative processing to handle the data (usually a loop)
// the iterator pattern defines a data structure called an "iterator" that has a reference to an underlying data source
//  (like the query result rows from our example) which exposes a method like next(). Calling next() returns the next piece of data,
//  like the record or row from our example
