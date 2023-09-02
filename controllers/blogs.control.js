const Blogs  = require("../model/blogs.model.js")
const loggerEvent = require("../services/logger.js")
const logger = loggerEvent("blogs")



const blogsController = {
    createBlog : async (req,res)=>{
        try {
            logger.info(req.body)
            
            let newBlog = new Blogs({...req.body})
            let file = req.file.filename
            if(file){
                let fileName = `/api/blogs/${file}`
                newBlog.image = fileName
            }

            await newBlog.save()
            // .then(()=>res.send())
            res.send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})   
        }
    }
}

module.exports = blogsController