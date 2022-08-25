const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    team:{
        type: String,
        require: true
    },
    stack:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    }

})

const userDB= mongoose.model('participants', schema)

//exporting the variable
module.exports= userDB