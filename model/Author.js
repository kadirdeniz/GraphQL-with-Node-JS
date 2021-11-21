const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Author = new Schema({
    name:String,
    age:String,
})

const AuthorSchema = mongoose.model("Author",Author)

exports.create = async (author)=>{
    try{
        const {name,age} = author
        const _author = new AuthorSchema({name,age})
        const response = await _author.save()
        return response
    }catch(err){
        return err
    }
}

exports.findOne = async (authorId)=>{
    try{
        return await AuthorSchema.findById(authorId)
    }catch(err){
        return err
    }
}

exports.findAll = async ()=>{
    try{
        return await AuthorSchema.find({})
    }catch(err){
        return err
    }
}

exports.remove = async (authorId) => {
    try{
        return await AuthorSchema.findByIdAndRemove(authorId)
    }catch(err){
        return err
    }
}

exports.update = async (authorId,author)=>{
    try{
        const {name,age} = author
        return await AuthorSchema.findByIdAndUpdate(authorId,{
            $set:{
                name,
                age
            }
        })
    }catch(err){
        return err
    }
}