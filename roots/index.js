const root = require('express').Router();

root.get('/d',(req,res)=>{
    res.send('hesssllo')
})

root.get('/login',(req,res)=>{
    res.render('login.ejs')
})

root.get('/register',(req,res)=>{
    res.render('reg.ejs')

})
module.exports = root