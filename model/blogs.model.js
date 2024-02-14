const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogsSchema = new Schema({
    title :{type : String , trim:true},
    content :{type : String },
    category :[{type : String ,trim:true}],
    image :{type : String ,trim:true},
    video :{type : String ,trim:true},
})

const Blogs = mongoose.model("blog" , blogsSchema)
module.exports = Blogs