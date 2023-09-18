const mongoose= require("mongoose")
const Schema = mongoose.Schema

const subscribeSchema = new Schema({
    user :{
        type: mongoose.Types.ObjectId,
        ref:"user"
    },
    category:[{
        type:String,
        trim:true,
        required:true
    }]
})

const Subscribtion =mongoose.model("subscribtion",subscribeSchema)
module.exports = Subscribtion