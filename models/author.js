const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema model
const BookSchema = new Schema({
	name : String,
	pages: Number
});

const AuthorSchema = new Schema({
	name : String,
	Age: Number,
	books:[BookSchema]
});


const Author = mongoose.model('author',AuthorSchema);


module.exports = Author;

