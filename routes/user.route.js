const express= require("express")
const router = express.Router()
const userControl = require("../controllers/user.control")
const auth = require("../middlewares/auth")
const {userPhotoUpload} = require("../middlewares/imageUpload")

router.route("/data")
    .get(auth.authentication,userControl.getUser)
    .patch(auth.authentication,userPhotoUpload.single("image"),userControl.updateUser)


module.exports = router;