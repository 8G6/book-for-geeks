const local  = require('passport-local').Strategy;
const bcrypt = require('bcrypt')

init = async(passport,Find,idUser) => {
 const auth = async(email,pass,done) => {
    let user = Find(email)
    if(user==null){
        return done(null,false,'No user found')
    }
    try{
        console.log('this is in init')
        console.log(user)
        if(await bcrypt.compare(pass,user.pass)){
            return done(null,user)
        }
        else{
            return done(null,false,'Password is wrong')
        }
    }
    catch(e){
        return done(e)
    }
 }

 passport.use(new local({usernameField:'email'},auth))
 passport.serializeUser((user,done)=>done(null,user.id))
 passport.deserializeUser((id,done)=>{
     return done(null,idUser(id))
 })
 
}

let authed=(req,res,next)=>{
    if(req.isAuthenticated()){
        return res.redirect('/dashboard')
    }
    return next()
}
let notAuth=(req,res,next)=>{
    return res.redirect('/login')
}

module.exports = {
    init:init,
    authed:authed,
    notAuth:notAuth
}
