const  root     = require('express').Router();
const {notAuth} = require('../../functions/auth_check')
const gen_html  = require('../../functions/gen_user')


root.post('/add',notAuth,(req,res)=>{
    if(req.body){
        res.redirect('/dashboard')
        console.log(req.body)

    }
})

root.get('/',notAuth,(req,res)=>{
    name=gen_html(req)
    res.render('user_interface/dashboard',{name:name[0],user:name[1]})
})

root.get('/add',notAuth,(req,res)=>{
    name=gen_html(req)
    res.render('user_interface/books/add',{name:name[0],user:name[1]})
})

module.exports = root