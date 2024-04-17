const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const verifyToken = (payload) => {
    return jwt.verify(payload, process.env.SECRET)
}

const signToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET)
}

const hashing = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
const compared = (password, comparePassword) => {
    return bcrypt.compareSync(password, comparePassword);
}



module.exports = { compared, hashing, verifyToken, signToken }