const mongoose= require("mongoose")
const Schema= mongoose.Schema

    const subscribtionSchema = new Schema({
    email:{type:String, required:true, trim:true },
    user :{type : mongoose.Types.ObjectId , ref:"user" , requried:true},
    category:[{type:String , required:true , trim:true}],
})

const Subscription = mongoose.model("subscribtion",subscribtionSchema)
module.exports = Subscription