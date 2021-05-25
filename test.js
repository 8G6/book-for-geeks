const {Schema} = require('mongoose');
const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected!!');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});


const scheme = new Schema({
    name: { 
        type: String,
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    }

});

let user  = mongoose.model('user',scheme);

async function save(){
    const data = new user({
        name:'devadut',
        password:'sdd'
    })
    await data.save()
    data.forEach((n)=>{
     console.log(n.name)
    })
    let h=await data.find({ password:'sdd'})
    console.log(h)
}
save()