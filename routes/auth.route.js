const express= require("express")
const router = express.Router()
const authControler=require("../controllers/auth.control")

router.post("/login",authControler.signin)
router.post("/register",authControler.register)
router.post("/logout",authControler.logout)

module.exports = router