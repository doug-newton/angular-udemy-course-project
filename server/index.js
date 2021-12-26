const { MongoClient } = require('mongodb');
const express = require('express')
const cors = require('cors')

const mongoUrl = "mongodb://localhost:27017"
const dbName = "angular-udemy-course-project"
const port = 8080

const app = express()

app.use(cors())
app.use(express.json({limit: '64mb'}));

app.get('/api', (req, res) => {
    res.json({msg: 'hello world'})
})

function gracefulShutdown() {
    app.locals.db_connection.close(() => {
        console.log("mongodb connection is closed")
        process.exit()
    })
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGKILL', gracefulShutdown);

MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;

    app.locals.db_connection = db;
    app.locals.db = db.db(dbName);

    app.listen(port, () => {
        console.log(`serving on port ${port}`)
    })
})
