const express = require('express');
const app     = express();

let port=process.env.PORT || 3000

app.use(express.static('public'))
app.set('view-engine','ejs')
app.set('layout','layouts/layout')

const root = require('./roots/index')

app.use('/',root)
app.listen(3000,()=>console.log(`Server started at ${port}`))