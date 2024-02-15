const express= require("express")
const router = express.Router()
const authRouter= require("./auth.route")
const userRouter= require("./user.route")
const reservationRouter= require("./reservation.route")
const blogRouter = require("./blogs.route")
const {limiter} = require("../services/security")
const subscribtionRouter = require("./subscribe.route")
const blogContentRouter = require("./blogContent.route")

router.use(limiter)
router.use("/auth",authRouter)
router.use("/user",userRouter)
router.use("/reservation",reservationRouter)
router.use("/subscribtion",subscribtionRouter)
router.use("/blogs",blogRouter)
router.use("/blog-content",blogContentRouter)


module.exports = router