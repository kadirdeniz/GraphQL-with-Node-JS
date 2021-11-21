const {
    GraphQLObjectType,
    GraphQLString,
} = require("graphql")

const Author = require("../../model/Author")
const {AuthorType} = require("../schemas/author")

exports.BookType = new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                return Author.findOne(parent.author)
            }
        }
    })  
})
