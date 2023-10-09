const User = require("../model/user.model")
const auth = require("../middlewares/auth")
const loggerEvent = require("../services/logger")
const logger = loggerEvent("user")
const fs =require("fs")
const bcrypt = require("bcryptjs")

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
    },
    updateUser: async(req,res)=>{
        try {
            logger.info(`update name : ${req.user.firstName} ${req.user.lastName} , user id : ${req.user._id}`)
            
            let image = req.body.image
            if(req.file){
                image =`/api/user/${req.file.filename}`
                if(req?.user?.image){
                    let fileName = req?.user?.image?.split("/")[3]
                    try {
                        await fs.unlinkSync(`./uploads/user/${fileName}`)
                    } catch (error) {
                        console.log(error.message);                        
                    }
                }   
            }

            await User.findByIdAndUpdate(req.user._id,{...req.body,image})
            res.send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})   
        }
    },
    updatePassword:async (req,res)=>{
        try {
            console.log(req.body)
            let user = await User.findById(req.user._id)
            let validPassword = await bcrypt.compare(req.body.oldPassword,user.password)

            if(!validPassword){
                return res.status(403).send({message:"Invalid old password"})
            }

            user.password = req.body.newPassword
            await user.save()
            res.status(201).send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})  
        }
    },
    getAllUsers:async (req,res)=>{
        try {
            let data = await User.find({isAdmin:false})
            res.send(data)
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message}) 
        }
    }
}

module.exports = authController