var mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

//Hooking events/Connect to database before test run
before(function (done) {
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function () {
    console.log('Connection to database was succesfull!');
    done();
  }).on('error', function (error) {
    console.log('Connection error:', error);
  });
});

//Drop db collection before each test
beforeEach(function (done) {
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});


