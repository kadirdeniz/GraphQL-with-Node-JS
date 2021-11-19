const express = require("express")
const app = express()

require('dotenv').config()

const {graphqlHTTP} = require("express-graphql") // Graphql request need to convert
const schema = require("./schema/schema")

const db = require("./db")
db.connect()

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(process.env.PORT,()=>console.log(`Server Started At ${process.env.PORT}`))