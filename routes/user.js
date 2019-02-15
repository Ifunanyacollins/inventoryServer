const userController = require('./../controllers/user.ctrl')

module.exports = (router) => {
  
    router.route('/getuser').get(userController.getUser)
   
}