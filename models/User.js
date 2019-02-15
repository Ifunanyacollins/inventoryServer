const mongoose = require('mongoose')


let UserSchema = new mongoose.Schema({
    Name:String,
    Products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
})




module.exports = mongoose.model('User', UserSchema)