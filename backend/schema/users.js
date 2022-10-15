
//Import the necessary Modules
const mongoose = require('mongoose');

// DB schema for user creation with fields { username, email, password }

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }
});


module.exports = mongoose.model('User',UserSchema)