var assert = require('assert');
var MarioChar = require('../models/mariochar');

//Create test
describe('Find records in the database', function () {
  //Create record to database to find
  beforeEach(function (done) {
    var char = new MarioChar({
      name: "Mario"
    });
  });

  char.save().then(function () {
    assert(char.isNew === false);
    done();
  });

  //Find test
  it('Find ine record in the database', function () {
    MarioChar.findOne({ name: "Mario" }).then(function (result) {
      assert(result.name === "Mario");
      done();
    });
  });
});