const User = require('./../models/User')


module.exports = {

    AddUser:(req,res,next) => {
        const Name  = 'collins'
        new User({Name}).save((err,user)=>res.send(user))
    },


    getUser:(req,res,next) => {
      const id = req.query.id

      User.findById(id,function(err,user){
          if(err){
              res.status(500).send({status:'error'})
          }else if(!user){
            res.send({status:'User not found'})
          }else{
              res.send({
                  status:"ok",
                  user
              })
          }
      })
    }
}