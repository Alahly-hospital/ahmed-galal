const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reservatioSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId ,
         ref :"user" ,
          required: true
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