
const {model} = require('mongoose')

user = model('user',{
    name: { 
        type:String,
        unique:false
    },
    email: { 
        type: String,
        unique: true
    },
    password: { 
        type: String,
        unique:false
    }
})

module.exports = user