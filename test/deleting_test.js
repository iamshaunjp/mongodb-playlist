<<<<<<< HEAD
var assert = require('assert');
var MarioChar = require('../models/mariochar');

//Create test
describe('Delete records in the database', function () {
  //Global var
  var char;
  //Create record to database to delete
  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario"
    });

    char.save().then(function () {
      done();
    });

  });

  
  //Delete test
  it('Delete one record in the database', function (done) {
    MarioChar.findOneAndRemove({ name: "Mario" }).then(function () {
      MarioChar.findOne({ name: "Mario" }).then(function (result) {
        assert(result == null);
=======
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Deletes a record from the database', function(done){
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
>>>>>>> master
        done();
      });
    });
  });

<<<<<<< HEAD
});
=======
});
>>>>>>> master
