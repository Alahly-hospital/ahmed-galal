const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reservatioSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId ,
        ref :"user" ,
        required: true
    },
    name:{
        type:String,
        trim:true,
        required:true,
    },
    phone:{
        type:Number,
        trim:true,
        required:true,
    },
    email:{
        type:String,        
        trim:true,
        required:true,
    },
    age:{
        type:Number,
        trim:true,
        required:true,
    },
    gender:{
        type:String,
        trim:true,
        required:true,
    },
    date : {
        type: String ,
        trim  : true
    },
    notes:{
        type:String,
        trim:true
    },
    status:{
        type:String,
        enum:["waiting" , "confirmed"],
        default:"waiting",
    }
})

const Reservation = mongoose.model("reservation",reservatioSchema)
module.exports = Reservation