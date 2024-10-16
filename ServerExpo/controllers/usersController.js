const { Users } = require("../models/userModel");


async function userRegistration(req,res) {
    const {name, email, password} = req.body;
    if(!name || !password || !email){
        return res.status(400).send({message:"All the Fields are required"})
    }
    try {
        const newUser = await Users.create({
            name: name,
            password: password,
            email:email,
        });
        return res.status(200).json({message:'User Created Successfully',  newUser})
    } catch (err) {
        return res.status(500).json({message: 'error Occured In the User Creation', error:err})
    }
    
}

async function usertest(req,res) {
    try {
        res.status(200).send({message:'User Routes Created'})
    } catch (error) {
        res.status(500).send({message:'There is a Error in the User Routes Creation'})

    }
}

module.exports = {
    userRegistration,
    usertest
}