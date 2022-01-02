const { MongoClient, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { auth } = require('./auth')
require('dotenv').config()

const app = express()
const users = require('./users')
const recipes = require('./recipes')

app.use(cors())
app.use(express.json({limit: '64mb'}));

const apiRouter = express.Router()

apiRouter.use('/recipes', auth, recipes)
apiRouter.use('/users', users)

app.use('/api', apiRouter)

function gracefulShutdown() {
    app.locals.db_connection.close(() => {
        console.log("mongodb connection is closed")
        process.exit()
    })
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGKILL', gracefulShutdown);

MongoClient.connect(process.env.MONGO_URI, (err, db) => {
    if (err) throw err;

    app.locals.db_connection = db;
    app.locals.db = db.db(process.env.DB_NAME);

    app.listen(process.env.PORT, () => {
        console.log(`serving on port ${process.env.PORT}`)
    })
})