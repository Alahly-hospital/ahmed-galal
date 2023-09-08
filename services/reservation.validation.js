const Joi = require('joi');

function reservationValidation(data) {
    const userSchema = Joi.object({
        notes: Joi.string(),
        date: Joi.string(),
        status: Joi.string().valid('waiting', 'confirmed')
    });

    const { error } = userSchema.validate(data);
    
    if (error) {
        return error.details[0].message; // Return the first error message
    }

    return null; // No validation error
}

module.exports = {reservationValidation}