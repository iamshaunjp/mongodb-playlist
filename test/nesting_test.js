var assert = require("assert");
var mongoose = require("mongoose");
var Author = require("../models/author");

//Describe test
describe("Nesting record", function() {
  //Drop collection before every test
  beforeEach(function(done) {
    mongoose.connection.collections.authors.drop(function() {
      done();
    });
  });

  //Create test
  it("Creates Author with sub-documents", function(done) {
    var pat = new Author({
      name: "Edwin Grayson",
      books: [{ title: "Name of the Wind", pages: 500 }]
    });
    pat.save().then(function() {
      Author.findOne({ name: "Edwin Grayson" }).then(function(record) {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  //Add book to Author
  it("Added book to Author collection", function(done) {
    var pat = new Author({
      name: "Edwin Grayson",
      books: [{ title: "Name of the Wind", pages: 500 }]
    });
    pat.save().then(function() {
      Author.findOne({ name: "Edwin Grayson" }).then(function(record) {
        //add book to books array
        record.books.push({ name: "Wishes of the East", page: 700 });
        record.save().then(function() {
          Author.findOne({ name: "Edwin Grayson" }).then(function(result) {
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
