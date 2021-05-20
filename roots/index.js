const express  = require('express')
const root     = express.Router();
const {hash}   = require('bcrypt')
const passport = require('passport') 
const init     = require('../functions/init')
const flash    = require('express-flash')
const session  = require('express-session')

let user = [];

init(passport,
     email=>user.find(user=>user.email === email)
    )

root.use(express.urlencoded({extended:false}))
//GET

root.get('/login',(req,res)=>{
    res.render('login')
})

root.get('/register',(req,res)=>{
    res.render('reg')
})

//POST

root.post('/register',async(req,res)=>{
    try{
        console.log(req.body)
        let pass_enc = await hash(req.body.password,10)
        user.push({
            id:new Date().getTime(),
            Name:req.body.name,
            email:req.body.email,
            pass:pass_enc
        })
        res.redirect('/login')
        console.log(user)
    }catch(e){
        console.log(e)
        res.redirect('/register')
    }
})

module.exports = root