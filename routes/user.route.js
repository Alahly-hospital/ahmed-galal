const express= require("express")
const router = express.Router()
const userControl = require("../controllers/user.control")
const auth = require("../middlewares/auth")

router.route("/data")
    .get(auth.authentication,userControl.getUser)


module.exports = router