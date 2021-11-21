const {
    GraphQLObjectType,
    GraphQLString,
} = require("graphql")

exports.AuthorType = new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        age:{type:GraphQLString},
    })
})