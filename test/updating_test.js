const assert = require('assert');
const MarioChar = require('../models/mariochar');
	// Describe tests
describe('Updating records',function(){

var char;

beforeEach(function(done){
 char = new MarioChar({
		name : 'Mario',
		weight:50
	});



	char.save().then(function(){

done();
	});
});

// Create tests

	it('Update on one  record from the database',function(done){
	
MarioChar.findOneAndUpdate({name : 'Mario'},{name:'Luigi'}).then(function(){
	MarioChar.findOne({_id:char._id}).then(function(result){
assert(result.name === 'Luigi');
done();
	});
});
	});
	

it('Increments the weight by 1',function(done){
	
MarioChar.update({},{$inc:{weight:1}}).then(function(){
MarioChar.findOne({name:'Mario'}).then(function(record){
assert(record.weight === 51);
done();
});
});
	});
		
});



