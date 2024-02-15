const router = require("express").Router()
const blogsController = require("../controllers/blogContent..control")
const auth = require("../middlewares/auth")
const {blogPhotoUpload} = require("../middlewares/imageUpload")

router.route("/")
    .post(auth.authentication,blogPhotoUpload.single("image"),blogsController.createBlog)
    .patch(auth.adminAuthorization,blogsController.updateBlog)
    
    router.route("/:id")
    .delete(auth.adminAuthorization , blogsController.deleteBlog)
    .get(blogsController.getBlogs)

module.exports = router               