if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express     = require('express')
const root        = express.Router();
const {authed,
      notAuth}    = require('../functions/middileware')
const  book    = require('../database/book')

root.get('/',notAuth,()=>{
    root.render('dashboard/index')
})

root.get('/add-book',notAuth,(req,res)=>{
    res.render('dashboard/add',{name:req.user.name,book:new book()})
})

root.post('/add-book',(req,res)=>{
    const data={
        book_name:req.body.book_name,
        aut_name:req.body.aut_name,
        country:req.body.country,
        lang:req.body.lang,
        cover:req.body.cover,
        ibn:req.body.ibn,
        info:req.body.info,
        link:req.body.link,
        year:req.body.year,
        genere:req.body.genere
    }
    const added = new book(data)
    added.save((err,add)=>{
        if(err){
            res.render('dashboard/add',{
                error:'Error creating the file',
                name:req.user.name
            })
            console.log(err)
        }
        else{
           res.send('Sucess')
        }
    })
    console.log(data)
})
    
module.exports=root

