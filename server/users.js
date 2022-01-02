const express = require('express')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/signup', (req, res) => {
    const { username, password } = req.body
    const salt = crypto.randomBytes(64).toString('hex')
    const hash = crypto.createHmac('sha512', salt).update(password).digest('hex')

    req.app.locals.db.collection('users').findOne({ username: username }, (err, fullUser) => {
        if (err) {
            res.status(500)
            res.json({ message: err })
        }
        else if (fullUser) {
            res.status(400)
            res.json({ message: 'a user already exists with that name' })
        }
        else {
            req.app.locals.db.collection('users').insertOne({ username, salt, hash }, (err, result) => {
                if (err) {
                    res.status(500)
                    res.json({ message: err })
                }
                else {
                    result.message = 'signup successful'
                    res.json(result)
                }
            })
        }
    })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    req.app.locals.db.collection('users').findOne({ username: username }, (err, fullUser) => {
        if (err) {
            res.status(500)
            res.json({message: err})
        }
        const hash = crypto.createHmac('sha512', fullUser.salt).update(password).digest('hex')
        if (hash === fullUser.hash) {
            res.status(201)
            const signedUser = {username: fullUser.username}
            jwt.sign(signedUser, process.env.SECRET, {expiresIn: process.env.EXPIRES_IN}, (err, token) => {
                if (err) {
                    res.sendStatus(403)
                } else {
                    res.status(201)
                    res.json({token})
                }
            })
        }
        else {
            res.status(403)
            res.json({message: 'invalid credentials'})
        }
    })
})

module.exports = router