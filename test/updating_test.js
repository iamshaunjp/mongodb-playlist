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
      done();
    });
  });

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


});
