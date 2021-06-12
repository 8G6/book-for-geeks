const {hash}      = require('bcrypt')
const passport    = require('passport') 
const flash       = require('express-flash')
const session     = require('express-session')
const override    = require('method-override')
const ums         = require('express').Router()

const user        = require('../scheme/user')
const reg         = require('../functions/user_manage')
const init        = require('../functions/pass.config')
const {authed}    = require('../functions/auth_check')

ums.use(flash())
ums.use(session({
       secret:'secret',
       resave: false,
       saveUninitialized:false
}))
ums.use(passport.initialize())
ums.use(passport.session())
ums.use(override('_bye'))

let error=' '

init(passport,                                                  //../functions/pass.config
     async(email)=> {return await user.findOne({email:email}).exec()}, //../scheme/user 
     async(Id)   => {return await user.findById(Id).lean()}
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
       if(req.user!=undefined){
              USER=`<form action="/logout?_bye=DELETE" method="POST">${req.user.name} | <button type="submit">Logout</button></form>`  
       } 
       else{USER=''}
       res.render('index',{body:'',name:USER})
})

ums.get('/register',authed,(req,res)=>{
       res.render('user/register',{error:error,name:''})
})

ums.get('/t',authed,(req,res)=>{
       res.render()
})
ums.get('/login',authed,(req,res)=>{
       res.render('user/login',{error:error,name:''})
})

    //########## DEL ##############

ums.delete('/logout',(req,res)=>{
   req.logOut()
   res.redirect('/login')
})

module.exports = ums