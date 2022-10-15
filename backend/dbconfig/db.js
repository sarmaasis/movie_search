const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/movie_search';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;