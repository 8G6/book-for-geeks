if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express     = require('express')
const root        = express.Router();
const {authed}    = require('../functions/init')


root.get('/dashboard/add',authed,(req,res)=>{
        res.render('add',{name:req.user.name})
})
    
