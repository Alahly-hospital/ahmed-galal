const express= require("express")
const router = express.Router()
const authRouter= require("./auth.route")
const userRouter= require("./user.route")
const reservationRouter= require("./reservation.route")
const blogRouter = require("./blogs.route")
const {limiter} = require("../services/security")

router.use(limiter)
router.use("/auth",authRouter)
router.use("/user",userRouter)
router.use("/blogs",blogRouter)
router.use("/reservation",reservationRouter)


module.exports = router