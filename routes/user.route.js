const express= require("express")
const router = express.Router()
const userControl = require("../controllers/user.control")
const auth = require("../middlewares/auth")
const {userPhotoUpload} = require("../middlewares/imageUpload")

router.use(auth.authentication)

router.route("/data")
    .get(userControl.getUser)
    .patch(userPhotoUpload.single("image"),userControl.updateUser)
    
router.patch("/password",userControl.updatePassword)
router.get("/users" ,auth.adminAuthorization ,userControl.getAllUsers)

module.exports = router;