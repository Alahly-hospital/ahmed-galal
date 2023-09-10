const express= require("express")
const router = express.Router()
const reservationController = require("../controllers/reservation.control")
const auth = require("../middlewares/auth")

router.route("/")
    .post(auth.authentication,reservationController.addReservation)
    .patch(auth.adminAuthorization,reservationController.updateReservation)
    .get(auth.authentication,reservationController.getUserReservations)

router.delete("/:id" ,auth.adminAuthorization, reservationController.deleteReservation)

router.get("/all",auth.adminAuthorization,reservationController.getAllReservations)

module.exports = router     