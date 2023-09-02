const express= require("express")
const router = express.Router()
const authRouter= require("./auth.route")
const userRouter= require("./user.route")
const reservationRouter= require("./reservation.route")

router.use("/auth",authRouter)
router.use("/user",userRouter)
router.use("/reservation",reservationRouter)


module.exports = router