var assert = require('assert');
var MarioChar = require('../models/mariochar');

//Create test
describe('Find records in the database', function () {
  //Global var
  var char;
  //Create record to database to find
  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario"
    });

    char.save().then(function () {
      done();
    });

  });

  
  //Find test
  it('Find one record in the database', function (done) {
    MarioChar.findOne({ name: "Mario" }).then(function (result) {
      assert(result.name === "Mario");
      done();
    });
  });

  //Find one record in the databse by ID
  it('Find record by its ID', function (done) {
    MarioChar.findOne({ _id: char._id }).then(function (result) {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});