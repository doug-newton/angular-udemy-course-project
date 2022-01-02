const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
    const arr = req.body
    req.app.locals.db.collection('recipes').insertMany(arr, function(err, result) {
        if (err) {
            res.status(500)
            res.json({msg:err})
        }
        else {
            res.json(result)
        }
    })
})

router.put('/', (req, res) => {
    const arr = req.body

    const bulkOperations = []

    for (let obj of arr) {
        if (!('_id' in obj)) {
            bulkOperations.push({
                insertOne: {
                    document: obj
                }
            })
        }
        else {
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
    }

    req.app.locals.db.collection('recipes').bulkWrite(bulkOperations)
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.status(500)
        res.json({ msg: err })
    })
})

router.get('/', (req, res) => {
    req.app.locals.db.collection('recipes').find({}).toArray((err, result) => {
        if (err) {
            res.status(500)
            res.json({msg: err})
        }
        else {
            res.json(result)
        }
    })
})

router.delete('/', (req, res) => {
    req.app.locals.db.collection('recipes').deleteMany({}, (err, result) => {
        if (err) {
            res.status(500)
            res.json({msg: err})
        }
        else {
            res.json(result)
        }
    })
})

module.exports = router