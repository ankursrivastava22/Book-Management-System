const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ankur94527:94505440@cluster0-a6bs6.mongodb.net/bookstore?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,});
var conn =mongoose.Collection;
var userSchema =new mongoose.Schema({
    username: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

	email: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },},
    password: {
        type:String, 
        required: true
    },
    date:{
        type: Date, 
        default: Date.now }
});

var userModel = mongoose.model('users', userSchema);
module.exports=userModel;