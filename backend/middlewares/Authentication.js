const { verify } = require("jsonwebtoken")

const Authenticate = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        res.status(403).json({ error: "Unauthorized" })
        return
    }

    const token = authorization.split(" ")[1]
    const user = verify(token, process.env.TOKEN_ACCESS)

    if(!user) {
        res.status(400).json({ error: "Invalid Token" })
        return
    }

    req.user = user
    next()
}

module.exports = Authenticate