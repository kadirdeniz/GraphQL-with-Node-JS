const mongoose = require("mongoose")

module.exports = async ()=>{
    try{
        await mongoose.connect(process.env.connectionString)
        console.log("Db Connection Succes")
    }catch(err){
        console.log(err)
    }
}