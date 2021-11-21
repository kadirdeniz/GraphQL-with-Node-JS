const { GraphQLSchema } = require("graphql");
const {Mutation} = require("./mutation");
const {RootQuery} = require("./query");

const schema = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})

module.exports = schema