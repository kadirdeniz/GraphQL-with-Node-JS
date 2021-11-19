const mongoose = require("mongoose")

exports.connect = async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTIONSTRING)
        console.log("Db Connection Succes")
    }catch(err){
        console.log(err)
    }
}