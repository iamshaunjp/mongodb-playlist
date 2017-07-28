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

  //Update/Increment weight by 1
  it("Increment weight by 5", function(done) {
    MarioChar.update({}, { $inc: { weight: 5 } }).then(function() {
      MarioChar.findOne({ name: "Mario" }).then(function(record) {
        assert(record.weight === 55);
        done();
      });
    });
  });
});
