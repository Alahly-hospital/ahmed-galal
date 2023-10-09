const subscribeController = require("../controllers/subscribtion.control")
const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")

router.route("/")
    .post(auth.authentication,subscribeController.addSubscribtion)
    .get(auth.adminAuthorization,subscribeController.geAllSubscribtion)

module.exports = router