const router = require("express").Router()
const blogsController = require("../controllers/blogs.control")
const auth = require("../middlewares/auth")
const {blogPhotoUpload} = require("../middlewares/imageUpload")

router.route("/")
    .post(auth.authentication,blogPhotoUpload.single("image"),blogsController.createBlog)
    .get(blogsController.getBlogs)
    .patch(auth.adminAuthorization,blogsController.updateBlog)

router.delete("/:id" , auth.adminAuthorization , blogsController.deleteBlog)

module.exports = router               