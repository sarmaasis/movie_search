
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const port = "8000"
const mongoose = require('mongoose');
const router = require('./router/route');
const db = require('./dbconfig/db');

const app = express()
app.use(cors())


app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(db.dbUrl, (err) => {
    if(err){
        console.log(err)
    }
});


app.use('/api', router)



app.listen(port,() =>{
    console.log("Server Listning to port: ",port)
})