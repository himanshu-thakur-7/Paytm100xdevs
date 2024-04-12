const mongoose = require("mongoose")
// create schema for users
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

// create model from schema
const user = mongoose.model('User', userSchema);

module.exports = {
    user
};