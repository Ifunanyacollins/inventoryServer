const mongoose = require('mongoose')


let SkuSchema = new mongoose.Schema({
  sku:String
})



module.exports = mongoose.model('Sku', SkuSchema)