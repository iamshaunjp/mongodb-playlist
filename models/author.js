var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  pages: Number
});

var AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

var Author = mongoose.model("author", AuthorSchema);

module.exports = Author;
