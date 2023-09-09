const Reservation = require("../model/reservation.model")
const loggerEvent = require("../services/logger")
const logger = loggerEvent("reservation")
const {reservationValidation} = require("../services/reservation.validation")

const reservationController={
    addReservation : async(req,res)=>{
        try {
            let valid = reservationValidation(req.body)
            if(valid){
                return res.status(400).send({
                    message:valid
                })
            }
            logger.info(req.body)
            let newReservation = new Reservation({
                ...req.body,
                user: req.user._id
            })

            await newReservation.save()
            res.status(201).send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    },
    updateReservation: async(req,res)=>{
        try {
            logger.info(req.body)
            await Reservation.findByIdAndUpdate(req.body._id,req.body)
            res.status(201).send()
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    },
    deleteReservation : async(req,res)=>{
        try {
            logger.info(req.body)
            let {id} = req.params

            await Reservation.findByIdAndDelete(id)
            res.send({message:"Reservatio deleted !!"})

        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    },
    getUserReservations: async(req,res)=>{
        try {
            let id = req.user._id
            let reservations = await Reservation.find({user: id})
            res.send(reservations)
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    },
    getAllReservations : async (req,res)=>{
        try {
            let reservations = await Reservation.find()
            res.send(reservations)
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    }
}

module.exports =reservationController