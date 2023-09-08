const router = require("express").Router()
const blogsController = require("../controllers/blogs.control")
const auth = require("../middlewares/auth")
const {blogPhotoUpload} = require("../middlewares/imageUpload")
router.route("/")
    .post(auth.adminAuthorization,blogPhotoUpload.single("image"),blogsController.createBlog)
    .get()
    .patch()




module.exports = router