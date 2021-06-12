a='C:\\Users\\The Ryu\\node_modules\\'
const express     = require(a+'express')
const ejs         = require(a+'express-ejs-layouts')
const app         = express()
const port        = process.env.PORT || 3000
const user        = require('./root/user')
const {connect,
      connection} = require(a+'mongoose');

require(a+'dotenv').config()

connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

connection.once('open',()=>{
    console.log('Database connected')
})

app.set('view engine','ejs')
app.set('viwes',__dirname+'/viwes')
app.set('layout','index')

app.use(ejs)
app.use(express.static('public'))
app.use(express.urlencoded({ limit:'10mb',extended: false }))
app.use('/',user)


app.listen(port,()=>{
    console.log(`App started at ${new Date().toString().split(' ')[4]} in port ${port}`)
})