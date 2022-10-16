const user = require('../schema/users')
const bcrypt = require('bcrypt')
const saltRounds = 10


const Registration = async(req,res) => {
    // const newUser = new user({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    // });
    await user.findOne({ email: req.body.email })
        .then(async profile =>{
            if (!profile){
                bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
                    if (err) {
                      console.log("Error is", err.message);
                    } else {
                        const password = hash;
                        user.create({email: req.body.email, username: req.body.username,password: password}, (err) => {
                            if(err){
                                res.json(err)
                            }
                            res.status(200).json({msg: "User Created"})
                        })
                    }
                });
            }
            else{
                res.json({msg: "User already exists!!"})
            }
        }).catch((err)=>{
            res.json(err)
        })
};

module.exports = {Registration}