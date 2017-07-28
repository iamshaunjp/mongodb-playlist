<<<<<<< HEAD
var assert = require('assert');
var MarioChar = require('../models/mariochar');

//Describe test
describe('Saving records', function () {

  //Create test
  it('Saving records to database', function (done) {
    var char = new MarioChar({
      name: 'Mario'
    });

    //Save test using isNew() instance
    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
=======
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){

    const char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });

  });

>>>>>>> master
});
