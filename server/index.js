const { MongoClient, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')

const mongoUrl = "mongodb://localhost:27017"
const dbName = "angular-udemy-course-project"
const port = 8080

const app = express()

app.use(cors())
app.use(express.json({limit: '64mb'}));

const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
    res.json({msg: 'hello world'})
})

apiRouter.post('/posts', (req, res) => {
    const obj = req.body
    req.app.locals.db.collection('posts').insertOne(obj, function(err, dbRes) {
        if (err) {
            res.status(500)
            res.json({msg:err})
        }
        else {
            res.json({msg: 'document inserted', _id: dbRes.insertedId})
        }
    })
})

apiRouter.put('/posts', (req, res) => {
    const arr = req.body

    const bulkOperations = []

    for (let obj of arr) {
        const id = obj._id
        delete obj._id
        bulkOperations.push({
            updateOne: {
                filter: {
                    _id: new ObjectId(id)
                },
                update: {
                    '$set': obj
                }
            }
        })
    }

    req.app.locals.db.collection('posts').bulkWrite(bulkOperations)
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.status(500)
        res.json({ msg: err })
    })
})

apiRouter.get('/posts', (req, res) => {
    req.app.locals.db.collection('posts').find({}).toArray((err, result) => {
        if (err) {
            res.status(500)
            res.json({msg: err})
        }
        else {
            res.json(result)
        }
    })
})

apiRouter.delete('/posts', (req, res) => {
    req.app.locals.db.collection('posts').deleteMany({}, (err, result) => {
        if (err) {
            res.status(500)
            res.json({msg: err})
        }
        else {
            res.json(result)
        }
    })
})

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

MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;

    app.locals.db_connection = db;
    app.locals.db = db.db(dbName);

    app.listen(port, () => {
        console.log(`serving on port ${port}`)
    })
})
