const jwt = require('jsonwebtoken')

module.exports.auth = function(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]
    if (token) {
        req.token = token
        jwt.verify(req.token, process.env.SECRET, (err, signedUser) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.locals.user = signedUser
                next()
            }
        })
    } else {
        res.sendStatus(403)
    }
}