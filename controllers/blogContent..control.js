const Blogs  = require("../model/blogContent.model.js")
const loggerEvent = require("../services/logger.js")
const logger = loggerEvent("blogs")


  
const blogsController = {
    createBlog : async (req,res)=>{
        try {
            logger.info(req.body)
            let newBlog = new Blogs({...req.body})
            let file = req.file
            if(file){
                let fileName = `/api/blogs/${file.filename}`
                newBlog.image = fileName
            }

            await newBlog.save()
            // .then(()=>res.send())
            res.send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})   
        }
    },
    getBlogs: async(req,res)=>{
        try {
            let {id} = req.params 
            let blogs =await Blogs.find({blog:id})
            res.send(blogs)
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message}) 
        }
    },
    getAllBlogs: async(req,res)=>{
        try {
            let {id} = req.params 
            let blogs =await Blogs.find({blog:id}).populate("blog")
            res.send(blogs)
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message}) 
        }
    },
    updateBlog: async(req,res)=>{
        try {
            let image = req.body.image
            if(req.file){
                image = `/api/blogs/${req.file.fileName}`
            }
            await Blogs.findByIdAndUpdate(req.body._id , {...req.body,image})
            res.send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message}) 
        }
    },
    deleteBlog:async(req,res)=>{
        try{
            let {id} =req.params
            await Blogs.findByIdAndDelete(id)
            res.send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message}) 
        }
}
}
module.exports = blogsController