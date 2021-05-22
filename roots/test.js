const {database} = require('../functions/save')

const Database = new database('../database','user') 

async function save(){
    await Database.save({data:'dasracl'})
    console.log(Database.data)
}
save()
