const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000
const layout   = require('express-ejs-layouts')
const Root     = require('./roots/index')


app.set('view engine','ejs');
app.set('viwes'.__dirname+'/viwes')
app.set('layout','layout')

app.use(layout);
app.use(express.static('public'));
app.use('/',Root)

app.listen(port,()=>console.log(`Server started at ${port}`))