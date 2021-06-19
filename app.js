//If running in a local server
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//external
const express     = require('express')
const ejs         = require('express-ejs-layouts')
const {connect,
      connection} = require('mongoose');

//internal
const user        = require('./root/user_manage/service')
const book        = require('./root/user_interface/book')

const app         = express()
const port        = process.env.PORT || 3000

connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

connection.once('open',()=>{
    console.log('Database connected')
})

//settings
app.set('view engine','ejs')
app.set('viwes',__dirname+'/viwes')
app.set('layout','nav/home')

//middlewares
app.use(ejs)
app.use(express.static('public'))
app.use(express.urlencoded({ limit:'10mb',extended: false }))

//custom
app.use('/',user)
app.use('/dashboard',book)

//Start express on the given port
app.listen(port,()=>{
    let time=new Date().toString().split(' ')[4]
    console.log(`App started at ${time} in port ${port}`)
})