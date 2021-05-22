const {writeFile,
      existsSync,
      writeFileSync} = require('fs')
const util           = require('util')
const write          = util.promisify(writeFile)

const p = (e) => JSON.stringify(e)
let Json=async(data,dir,id)=>{
    let json=require(`${dir}/${id}.json`)
    if(!p(json).match(p(data))){
    json.push(data)
    try{
        await write(`${dir}/${id}.json`,p(json))
    }
    catch(e){
        console.log(e)
    }
    }
    else{
    console.log('same data found')
    }
}
class  database{
    constructor(dir,id){
        this.id=id
        this.dir=dir
    }
    save=async(data)=>{
        if(!existsSync(`${this.dir}/${this.id}.json`)){
            await writeFileSync(`${this.dir}/${this.id}.json`,'[]')
            await Json(data,this.dir,this.id)
        }
        else{
            await Json(data,this.dir,this.id)
        }
        this.data=require(`${this.dir}/${this.id}.json`)
    }
    
}


module.exports = {database:database}

