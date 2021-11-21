const Book = require("../model/Book")
const Author = require("../model/Author")
const {BookType} = require("./schemas/book")
const {AuthorType} = require("./schemas/author")

const {
    GraphQLObjectType,
    GraphQLString,
} = require("graphql")

exports.RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{

        allBooks:{
            type:BookType,
            resolve(parent,args){
                return Book.findAll()
            }
        },

        authorById:{
            type:AuthorType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return Author.findOne(args.id)
            }
        }
    }
})
