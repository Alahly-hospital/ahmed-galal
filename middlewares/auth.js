const loggerEvent=require("../services/logger")
const logger= loggerEvent("auth")
let jwt = require("jsonwebtoken")
let User = require("../model/user.model")

const authentication = async (req,res,next)=>{
    try {
        console.log(req.cookies);
        let token= req?.cookies?.access_token?.split(" ")[1]

        if(!token) return res.status(401).send({message:"not allowed user"})

        let secretKey = process.env.ACCESS_TOKEN
        let decrypt = await jwt.verify(token,secretKey)

        let user =await User.findById(decrypt._id)

        if(!user) return res.status(401).send({message:"No user found"})
        if(!user.tokens.includes(token)) return res.status(401).send({message:"not allowed user"})

        req.user= user        

        next()
    } catch (error) {
        logger.error(error.message)
        return res.status(500).send({
            message:error.message
        })        
    }
}
const adminAuthorization = async (req,res,next)=>{
    authentication(req,res,()=>{
        if(!req.user.isAdmin){
            return  res.status(401).send({message:"Route is only for admins"})
        }else{
            next()
        }
    })
}
module.exports= {
    authentication,
    adminAuthorization,

}