const Reservation = require("../model/reservation.model")
const loggerEvent = require("../services/logger")
const { sendReservationMail } = require("../services/mail")
const logger = loggerEvent("reservation")
const {reservationValidation} = require("../services/reservation.validation")

const reservationController={
    addReservation : async(req,res)=>{
        console.log(req.body);
        if(!req.body.notes) delete req.body.notes
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
            let reservations = await Reservation.find({status:"waiting"})
            res.send(reservations)
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    },
    getAllConfirmedReservations : async (req,res)=>{
        try {
            let reservations = await Reservation.find({status:"confirmed"})
            res.send(reservations)
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    },
    acceptUserReservation:async(req,res)=>{
        try {
            await Reservation.findByIdAndUpdate(req.body.id,{status:"confirmed"})
            await reservationValidation(req.body.email)
            res.send({message:"Updated !!"})
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    },
    addUserReservation:async (req,res)=>{
        try {
            let {notes , date} = req.body
            let {gender , email , age , phone } = req.user
            if (!notes) return res.status(403).send({message:"Notes is required !!"})
            if (!date) return res.status(403).send({message:"Date is required !!"})
            
            let newReservation = new Reservation({
                user:req.user._id,
                notes,
                gender ,
                email ,
                age ,
                phone ,
                date,
                name:`${req.user?.firstName} ${req.user?.lastName}`
            })

            await newReservation.save()
            res.status(201).send({message:"Reservation submited !!"})

        } catch (error) {
            logger.error(error.message)
            res.status(500).send({
                message:error.message
            })
        }
    }
}

module.exports =reservationController