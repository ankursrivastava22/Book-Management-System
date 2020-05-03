const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ankur94527:94505440@cluster0-a6bs6.mongodb.net/bookstore?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,});
var conn =mongoose.Collection;
var passcatSchema =new mongoose.Schema({
    passord_category: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

    date:{
        type: Date, 
        default: Date.now }
});

var passCateModel = mongoose.model('password_categories', passcatSchema);
module.exports=passCateModel;