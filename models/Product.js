const mongoose = require('mongoose')


let ProductSchema = new mongoose.Schema({
    Status:{ type: String, default: 'none' },
    SKU:{ type: String, default: 'none' },
    Condition:{ type: String, default: 'none' },
    Brand:{ type: String, default: 'none' },
    ModelNumber:{ type: String, default: 'none' },
    Dimensions:{ type: String, default: 'none' },
    Weight:{ type: String, default: 'none' },
    Quantity:{ type: Number, default: 0 },
    Title:{ type: String, default: 'none' },
    Category:{ type: String, default: 'none' },
    Description:{ type: String, default: 'none' },
    Images:{ type: [String], default: [] },
    ListedPrice:{ type: Number, default: 0 },
    SellingPrice:{ type: Number, default: 0 },
    Reserve:{ type: Number, default: 0 },
    Location:{ type: String, default: 'none' },
    PaymentMethod:{ type: String, default: 'none' },
    TransactionDetails:{ type: String, default: 'none' },
    AmountReceived:{ type: String, default: 'none' },    
    ClientCode:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
})

ProductSchema.methods.PaymentMethodHandle = (type) =>  {
    this.PaymentMethod = type
   return this.save()
}

ProductSchema.methods.SKUHandle = (number) => {
    this.SKU = number
    return this.save()
}

ProductSchema.methods.AmountReceivedHandle = (amount) => {
    this.AmountReceived = amount
    return this.save()
}


ProductSchema.methods.StatusHandle = (state) => {
    this.Status = state
    return this.save()
}

ProductSchema.methods.clientHandle = function(id){
    this.ClientCode = id
    return this.save()
}

ProductSchema.methods.SKUHandle = function(number) {
    this.SKU = number
    return this.save()
}

module.exports = mongoose.model('Product', ProductSchema)