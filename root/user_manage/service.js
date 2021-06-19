//extranal 
const {hash}      = require('bcrypt')
const passport    = require('passport') 
const flash       = require('express-flash')
const session     = require('express-session')
const override    = require('method-override')
const ums         = require('express').Router()
//internal
const user        = require('../../schemes/user')
const reg         = require('../../functions/user/register')
const init        = require('../../functions/passport/pass.config')
const {authed}    = require('../../functions/passport/auth_check')
const gen_html    = require('../../functions/user/gen_user')
const nav         = require('../nav/nav')
const secure      = require('../../functions/secure/Random_Key_Gen')

//middlewares
ums.use(flash())
ums.use(session({
       secret:secure,
       resave: false,
       saveUninitialized:false
}))
ums.use(passport.initialize())
ums.use(passport.session())
ums.use(override('_bye'))
ums.use('/',nav)

let error=' '

console.log(secure)

init(passport,                                                          //../functions/pass.config
     async(email) => {return await user.findOne({email:email}).exec()}, //../scheme/user 
     async(Id)    => {return await user.findById(Id).lean()}
)    

     //########## POST ###############

ums.post('/register',async(req,res)=>{
       let data = req.body
       error=await reg(user,data,res,hash) // ../functions/user_manage ,  ../scheme/user
       if(error){console.log(error)}
})

ums.post('/login',passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/login',
       failureFlash: true
}))

     //########## GET ###############

ums.get('/',(req,res)=>{
       res.render('nav/home',{name:gen_html(req)[0]})
})

ums.get('/register',authed,(req,res)=>{
       res.render('user_manage/register',{error:error,name:''})
})


ums.get('/login',authed,(req,res)=>{
       res.render('user_manage/login',{error:error,name:''})
})

    //########## DEL ##############

ums.delete('/logout',(req,res)=>{
   req.logOut()
   res.redirect('/login')
})

module.exports = ums