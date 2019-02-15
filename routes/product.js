const productController = require('./../controllers/product.ctrl')
const userController = require('./../controllers/user.ctrl')

module.exports = (router) => {
  
    router.route('/addproduct').post(productController.AddProduct)
    router.route('/getallproduct').get(productController.getAllProduct)
    router.route('/update').post(productController.updateProduct)
    router.route('/delete').post(productController.deleteProduct)
    router.route('/getuser').get(userController.getUser)
   
}