const Subscribtion = require("../model/subscribtion.model")
const loggerEvent = require("../services/logger")
const logger = loggerEvent("subscribtion")

const subscribeController = {
    addSubscribtion :async(req,res)=>{
        try {
            // logger.info(`${req.user.firstName} | ${req?.body?.category}`)
            let oldSubscription = await Subscribtion.findOne({ user: req.user._id });
            let email = req?.user?.email;
        
            if (oldSubscription) {
              await Subscribtion.findOneAndUpdate({ user: req.user._id }, {
                ...req.body,
                email
              });
              return res.send({
                message: "Subscribed successfully !!"
              });
            }

            let newSubscription = new Subscribtion({
              user: req?.user._id,
              email,
              category: req?.body?.category,
            });
            await newSubscription.save();
            res.send({
              message: "Subscribed successfully !!"
            });
        } catch (error) {
            logger.error(error.meesage)
            res.status(500).send({
                message:error.message
            })
        }
    },
    geAllSubscribtion:async (req,res)=>{
        try {
            let data = await Subscribtion.find({})
            res.send(data)
        } catch (error) {
            logger.error(error.meesage)
            res.status(500).send({
                message:error.message
            })
        }
    }
}

module.exports = subscribeController