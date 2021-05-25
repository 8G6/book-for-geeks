if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express     = require('express')
const root        = express.Router();
const {hash}      = require('bcrypt')
const passport    = require('passport') 
const {init}      = require('../functions/passport')
const {authed,
       notAuth}   = require('../functions/middileware')
const flash       = require('express-flash')
const session     = require('express-session')
const override    = require('method-override')
const {writeFile} = require('fs')
const {promisify} = require('util')
const  write      = promisify(writeFile)
let    user      = require('../uplaods/userdata.json')


init(passport,
     email=>user.find(user=>user.email === email),
     id   =>user.find(user=>user.id    === id)
    )

///requirements/////// 

root.use(express.urlencoded({extended:false}))
root.use(flash())
root.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false
}))
root.use(passport.initialize())
root.use(passport.session())
root.use(override("_del"))

//\\\\\\\\\\\\\\\\\\\\GET//////////////////////\\

root.get('/login',authed,(req,res)=>{
    res.render('login')
})

root.get('/register',authed,(req,res)=>{
    res.render('register')
})

root.get('/dashboard',notAuth,(req,res)=>{
    console.log(req.user.name)
    res.render('dashboard',{name:req.user.name})
})

/////////////POST\\\\\\\\\\\\\\\\\\\\\\\////

root.post('/register',async(req,res)=>{
    try{
        console.log(req.body)
        let pass_enc = await hash(req.body.password,10) 
        let data={
            id:new Date().getTime(),
            name:req.body.name,
            email:req.body.email,
            pass:pass_enc
        } 
        user.push(data)
        console.log('user : ',user)
        await write('./uplaods/userdata.json',JSON.stringify(user))
        res.redirect('/login')
        console.log(det)
    }catch(e){
        console.log(e)
        res.redirect('/register')
    }
})

root.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}))
///////// \\\\\\\\\\\\\\\\\\\\\\\\

root.delete('/logout',(req,res)=>{
req.logOut()
res.redirect('/login')
})


module.exports = root