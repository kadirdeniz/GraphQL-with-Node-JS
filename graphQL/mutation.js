const Book = require("../model/Book")
const Author = require("../model/Author")
const {BookType} = require("./schemas/book")
const {AuthorType} = require("./schemas/author")

const {
    GraphQLObjectType,
    GraphQLString,
} = require("graphql")

exports.Mutation = new GraphQLObjectType({
    name:"Mutation",

    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name:{type:GraphQLString},
                age:{type:GraphQLString}
            },
            resolve(parent,args){
                return Author.create(args)
            }
        },
        deleteAuthor:{
            type:AuthorType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parent,args){
                return Author.remove(args.id)
            }
        },
        updateAuthor:{
            type:AuthorType,
            args:{
                id:{type:GraphQLString},
                name:{type:GraphQLString},
                age:{type:GraphQLString}
            },
            resolve(parent,args){
                return Author.update(args.id,{name:args.name,age:args.age})
            }
        },
        



        addBook:{
            type:BookType,
            args:{
                name:{type:GraphQLString},
                genre:{type:GraphQLString},
                author:{type:GraphQLString}
            },
            resolve(parent,args){
                return Book.create(args)
            }
        },
        deleteBook:{
            type:BookType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parent,args){
                return Book.remove(args.id)
            }
        },
        updateAuthor:{
            type:BookType,
            args:{
                id:{type:GraphQLString},
                name:{type:GraphQLString},
                genre:{type:GraphQLString}
            },
            resolve(parent,args){
                return Book.update(args.id,{name:args.name,genre:args.genre})
            }
        }




    }
})
