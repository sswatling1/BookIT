var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
    fName:String,
    mName:String,
    lName:String,
    email:String,
    password:String,
    books:[]
});

module.exports = mongoose.model('profile', profileSchema); 