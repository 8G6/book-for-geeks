const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000
k=10
app.use(express.static('public'))
app.set('view-engine','ejs')
app.set('layout','layouts/layout')

const root = require('./roots/index')

app.use('/',root)
app.listen(port,()=>console.log(`Server started at ${port}`))