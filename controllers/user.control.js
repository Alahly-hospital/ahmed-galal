const User = require("../model/user.model")
const auth = require("../middlewares/auth")
const loggerEvent = require("../services/logger")
const logger = loggerEvent("user")

const authController ={
    getUser:async(req,res)=>{
        try {
            logger.info(`name : ${req.user.firstName} ${req.user.lastName} , user id : ${req.user._id}`)
            let user = await User.findOne({_id : req.user._id})
            res.status(200).send(user);
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})   
        }
    }
}

module.exports = authController