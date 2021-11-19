const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Book = new Schema({
    name:String,
    genre:String,
    author:Schema.Types.ObjectId
})

const BookSchema = mongoose.model("Book",Book)

exports.create = async (book)=>{
    try{
        const _book = new BookSchema(book)
        const response = await _book.save()
        return response
    }catch(err){
        return err
    }
}

exports.findOne = async (bookId)=>{
    try{
        return await BookSchema.findById(bookId)
    }catch(err){
        return err
    }
}

exports.findAll = async ()=>{
    try{
        return await BookSchema.find({})
    }catch(err){
        return err
    }
}

exports.remove = async (bookId) => {
    try{
        return await BookSchema.findByIdAndRemove(bookId)
    }catch(err){
        return err
    }
}

exports.update = async (bookId,book)=>{
    try{
        const {name,genre} = book
        return await BookSchema.findByIdAndUpdate(bookId,{
            $set:{
                name,
                genre
            }
        })
    }catch(err){
        return err
    }
}