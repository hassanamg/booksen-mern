const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const http = require('http')
dotenv.config({ path: "../config.env" });

const app = require('./app')

const DB = process.env.DATABASE_LOCAL

mongoose.connect(DB, { useNewUrlParser: true }).then(() => console.log("DB connection successfully"))

const PORT = process.env.PORT || 3000

const server =  http.createServer(app)
async function  startServer() {

    

    server.listen(PORT, () => {

        console.log(`App listening on port ${PORT}`)

    })
}

startServer()

