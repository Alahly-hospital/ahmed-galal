const router = require("express").Router()
const blogsController = require("../controllers/blogs.control")
const auth = require("../middlewares/auth")
const upload = require("../middlewares/imageUpload")
router.route("/")
    .post(auth.adminAuthorization,upload.single("image"),blogsController.createBlog)
    .get()
    .patch()

module.exports = router               