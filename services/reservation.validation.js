const Joi = require('joi');

function reservationValidation(data) {
    const userSchema = Joi.object({
        name: Joi
            .string()
            .required(),
        email: Joi
            .string()
            .required(),
        age: Joi
            .number()
            .required(),
        gender: Joi
            .string()
            .required(),
        phone: Joi
            .number()
            .required(),
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