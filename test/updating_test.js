var assert = require("assert");
var MarioChar = require("../models/mariochar");

//Create test
describe("Updating records in the database", function() {
  //Global var
  var char;
  //Create record to database to delete
  beforeEach(function(done) {
    char = new MarioChar({
      name: "Mario"
    });

    char.save().then(function() {
      done();
    });
  });

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
});
