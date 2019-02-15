const Product = require('./../models/Product')
const Sku = require('./../models/Sku')




const updateSku = (sku) => {
    Sku.findOneAndUpdate('5c608d3f32809810e896a351',{sku},function(err,sku){
        
    })
}



module.exports = {

AddProduct : (req,res,next) => {
    

         
            const prod =  req.body

             new Product(prod).save((err,product) =>{
                  if(err){
                      res.status(500).send({message:'An error occured'})
                  }else if(!product){
                      res.status(400).send({message:'Cant save product'})
                  }else{
                    Sku.findById('5c608d3f32809810e896a351',function(err,{sku}){
                        if(err){
                            res.status(500).send({message:'They was an error get SKU'})
                        }else if(!sku){
                            res.send(400)
                        }else{
                        const number = Number(sku) + 1
                        const pad = String(number).padStart(6,"0")
                        updateSku(pad)
                        product.SKUHandle(pad).then((_product)=> res.send(_product))
                        
                    }
                    })
                     
                  
                     
                  }
                

            })


        
         },






getAllProduct: function(req,res,next) {
  
    const Products = Product.find({},function(err,prods){
        if(err){
            res.status(500).send('Something broke!')
        }else{return res.send(prods)}
     
    })
                                 
},

updateProduct: function(req,res) {

    const id = req.query.id

    Product.findByIdAndUpdate(id,req.body,function(err,prod){
        res.send(prod)
    })
    
},

deleteProduct:function(req,res) {
    const id = req.query.id

    Product.findByIdAndDelete(id,function(err,prod){
        if(err){
            res.status(500).send({message:'something broke'})
        }else{
            res.send({message:'deleted',product:prod})
        }
    })
}



}





















  