const nav         = require('express').Router()
const gen_html    = require('../../functions/user/gen_user')

nav.get('/',(req,res)=>{
    console.log(gen_html(req)[0]+' is user')
    res.render('nav/home',{body:'',name:gen_html(req)[0]})
})

nav.get('/about',(req,res)=>{
     res.render('nav/about',{name:gen_html(req)[0]})
})

nav.get('/contact',(req,res)=>{
    res.render('nav/contact',{name:gen_html(req)[0]})
})

module.exports = nav 