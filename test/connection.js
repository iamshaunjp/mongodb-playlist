const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {
  console.log("Connection to database was succesfull!");
}).on('error', (error) => {
  console.log("Connection error:", error);
});