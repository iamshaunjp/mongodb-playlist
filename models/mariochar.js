<<<<<<< HEAD
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

var MarioChar = mongoose.model("mariochar", MarioCharSchema);
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);
>>>>>>> master

module.exports = MarioChar;
