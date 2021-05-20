const local  = require('passport-local').Strategy;
const bcrypt = require('bcrypt')

init = async(passport) => {
 const auth = (email,data,password,done) => {
    let user = data.find(data=>data.email===email)
    if(user==null){
        return done(null,false,'No user found')
    }
    try{
        if(await bcrypt.compare(password,user.password)){
            return done(null,user)
        }
        else{
            return done(null,false,'Password Mismatch')
        }
    }
    catch(e){
        return done(e,)
    }
 }

 passport.use(new local({usernameField:'email'}),auth)
 passport.serializeUser((user,done)=>{})
 passport.deserializeUser((id,done)=>{})
 
}

module.exports = init
