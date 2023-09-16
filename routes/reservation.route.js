const express= require("express")
const router = express.Router()
const reservationController = require("../controllers/reservation.control")
const auth = require("../middlewares/auth")

router.route("/")
    .post(auth.authentication,reservationController.addReservation)
    .patch(auth.adminAuthorization,reservationController.updateReservation)
    .get(auth.authentication,reservationController.getUserReservations)

router.post("/user",auth.authentication,reservationController.addUserReservation)

router.delete("/:id" ,auth.authentication, reservationController.deleteReservation)

router.get("/waiting",auth.adminAuthorization,reservationController.getAllReservations)
router.get("/confirmed",auth.adminAuthorization,reservationController.getAllConfirmedReservations)

router.post("/confirm" ,auth.adminAuthorization,reservationController.acceptUserReservation)

module.exports = router     