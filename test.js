const mongoose = require('mongoose');
const express  = require('express');
const server   = '127.0.0.1:27017'; // REPLACE WITH YOUR OWN SERVER
const database = 'bfg';          // REPLACE WITH YOUR OWN DB NAME
 
const app = express();

mongoose.connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected!!');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

const schema = new mongoose.Schema({
    //1)Name of the book
    name: { 
        type: String,
        required: true 
    },
    //2)Name of Author
    author: { 
        type: String, 
        required: true 
    },
    //3)Name of Author
    language: {
        type: String,
        required: true
    },
    //4)Name of Author
    cover_image: {data: 
        Buffer,
        contentType: String
    },
    //5)Name of Author
    isbn: { 
        type: String, 
        unique: true 
    },
    //6)Name of Author
    details: { 
        type: String, 
        required: true
    },
    //7)Name of Author
    link:{ 
         type: String,
         required: true
    },
    //8)Name of Author
    year:{ 
        type: Number, 
        required: true
    },
    //9)Name of Author
    genre:{ 
        type: String, 
        required: true
    }
});

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs');
app.set('viwes'.__dirname+'/viwes')
app.set('layout','layout')

app.get('/',(req, res)=>{
    res.render('catagories')
})

app.listen(8080,()=>console.log('statted '+new Date()))