var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function () {
  console.log('Connection to database was succesfull!');
}).on('error', function (error) {
  console.log('Connection error:', error);
});
