const product = require('./product')
const user = require('./user')

module.exports = (router) => {
    product(router)
    user(router)
}