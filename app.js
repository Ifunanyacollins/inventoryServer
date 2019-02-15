/** require dependencies */
const express = require("express")
const routes = require('./routes/index')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')


const app = express()
const router = express.Router()




/** connect to MongoDB datastore */
try {
   console.log(process.env.user)
    var uri = `mongodb://${process.env.user}:${process.env.password}@ds127995.mlab.com:27995/listinghippo`;
      mongoose.connect(uri,{ useNewUrlParser: true })    
} catch (error) {
    
}

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())


app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});