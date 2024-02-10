const Blogs  = require("../model/blogs.model.js")
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
    getOneBlog:async(req,res)=>{ 
        try {
            const {id }= req.params
            const blog = await Blogs.findById(id)
            if (!blog){
                return res.status(404).send({message : `Not Found blog with id: ${id}`})
            }
            res.status(200).json({data : blog})
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})   
        }
            
     
        

    },
    getBlogs: async(req,res)=>{
        try {
            let blogs =await Blogs.find()
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