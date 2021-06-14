reg = async(user,data,res,hash)=>{
    let msg='';
    let found=await user.findOne({email:data.email}).exec()
    if(found){
           msg="you are alredy member"
           res.redirect('login') 
    }
    else{
        try{
            data={
                name:data.name,
                email:data.email,
                password:await hash(data.password,10)
         }
         let new_user=new user(data)
         new_user.save(function(err, doc){
                if (err){console.error(err)};
                msg="registration succussfull!"
                res.redirect('login')
         });
        }
        catch(e){
            console.log(e)
            res.redirect('register')
        }
    }
    return msg
} 

module.exports = reg
