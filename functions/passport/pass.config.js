const {Strategy} = require('passport-local')
const {compare}  = require('bcrypt')

validate = async(password,user,done) => {
    try{
        if(await compare(password,user.password)){
            done(null,user)
        }
        else{
            done(null,false,{message:"Password Incorrect"})
        }
    }
    catch(e){
        done(e)
        console.log(e)
    }
}
let user;
init=(passport,Email,ID)=>{
    const auth = async(email,password,done)=>{
        user=await Email(email)
        if(user==null){
            done(null,false,{message:"You are not registred"})
        }
        else{
            validate(password,user,done)
        }
    }
    passport.use(new Strategy({usernameField:'email'},auth))
    passport.serializeUser((user,done)=>{return done(null,user.id)})
    passport.deserializeUser(async(id,done)=>{
        return done(null,await ID(id))
    })
}

module.exports = init