if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express     = require('express')
const root        = express.Router();
const {notAuth}     = require('../functions/init')


root.get('/dashboard/add',notAuth,(req,res)=>{
        console.log(req.user.name)
        res.render('add',{name:req.user.name})
})
    
module.exports=root