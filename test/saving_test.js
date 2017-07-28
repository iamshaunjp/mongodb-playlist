var mocha = require('mocha');
var assert = require('assert');
var MarioChar = require('../models/mariochar');

//Describe test
describe('Saving records', function () {

  //Create test
  it('Saving records to database', function (done) {
    var char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
});
