
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const port = "8000"
const mongoose = require('./dbconfig/db');
const router = require('./router/route');

const app = express()
app.use(cors())


app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api', router)



app.listen(port,() =>{
    console.log("Server Listning to port: ",port)
})