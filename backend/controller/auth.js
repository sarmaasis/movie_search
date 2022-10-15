
const jwt = require("jsonwebtoken");

const Auth = async(req,res,next) => {
    const token = req.header('token');
    if(!token){
        return res.status(401).json({message: "Authentication Error"});
    }
    try{
        jwt.verify(token,"randomString");
        next()
    }catch(err){
        res.status(500).send({message: "Invaild Token"})
    }
}

module.exports = {Auth}