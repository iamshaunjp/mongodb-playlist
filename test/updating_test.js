<<<<<<< HEAD
var assert = require("assert");
var MarioChar = require("../models/mariochar");

//Create test
describe("Updating records in the database", function() {
  //Global var
  var char;
  //Create record to database to delete
  beforeEach(function(done) {
    char = new MarioChar({
      name: "Mario",
      weight: 50
    });

    char.save().then(function() {
=======
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(function(){
>>>>>>> master
      done();
    });
  });

<<<<<<< HEAD
  //Delete test
  it("Update one record in the database", function(done) {
    MarioChar.findOneAndUpdate(
      { name: "Mario" },
      { name: "Mike" }
    ).then(function() {
      MarioChar.findOne({ _id: char._id }).then(function(result) {
        assert(result.name === "Mike");
        done();
      });
    });
  });

  //Update/Increment weight by 1
  it("Increment weight by 5", function(done) {
    MarioChar.update({}, { $inc: { weight: 5 } }).then(function() {
      MarioChar.findOne({ name: "Mario" }).then(function(record) {
        assert(record.weight === 55);
        done();
      });
    });
  });
=======
  // Create tests
  it('Updates the name of a record', function(done){
      MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
          MarioChar.findOne({_id: char._id}).then(function(result){
              assert(result.name === 'Luigi');
              done();
          });
      });
  });

 it('Adds 1 to the weight of every record', function(done){
    MarioChar.update({}, { $inc: { weight: 1 } }).then(function(){
        MarioChar.findOne({name: 'Mario'}).then(function(record){
            assert(record.weight === 51);
            done();
        });
    });
 });


>>>>>>> master
});
