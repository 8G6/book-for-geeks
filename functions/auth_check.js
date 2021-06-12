let authed=(req,res,next)=>{
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    return next()
}

let notAuth=(req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }
    return res.redirect('/login')
}

module.exports = {
    authed:authed,
    notAuth:notAuth
}
