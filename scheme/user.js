a='C:\\Users\\The Ryu\\node_modules\\'
const {model} = require(a+'mongoose')

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