const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){

  // Add a character to the db before each tests
  beforeEach(function(done){
    const char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(function(){
      done();
    })
  });

  // Create tests
  it('Finds a record from the database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });

  });

});
