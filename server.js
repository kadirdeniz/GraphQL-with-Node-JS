const express = require("express")
const app = express()
const {graphqlHTTP} = require("express-graphql") // Graphql request need to convert

require('dotenv').config()
require("./db")()

const schema = require("./graphQL/index")
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(process.env.PORT,()=>console.log(`Server Started At ${process.env.PORT}`))