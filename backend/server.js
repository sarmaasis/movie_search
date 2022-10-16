
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.port || 8000
const mongoose = require('mongoose');
const router = require('./router/route');
const db = require('./dbconfig/db');

const app = express()
app.use(cors())


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())

mongoose.connect(db.dbUrl, (err) => {
    if(err){
        console.log(err)
    }
});

app.get('/', (req,res)=>{
    res.json({message: "Hey"})
})

app.use('/api', router)



app.listen(port,() =>{
    console.log("Server Listning to port: ",port)
})