const mongoose = require('mongoose');
const Schema = mongoose.Schema

let Register = new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
}, {
    collation: 'Register'
})

module.exports = mongoose.model('Register', Register);