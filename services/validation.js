const Joi = require('joi');

function userValidation(data) {
    const userSchema = Joi.object({
        firstName: Joi.string()
            .required(),
        lastName: Joi.string()
            .required(),
        phone: Joi.number()
            .required(),
        age: Joi.number()
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .required(),
        address: Joi.string()
            .required(),
        isAdmin:Joi.boolean()
    });

    const { error } = userSchema.validate(data);
    
    if (error) {
        return error.details[0].message; // Return the first error message
    }

    return null; // No validation error
}

function userSignin(data) {
    const userSchema = Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .required(),
    });

    const { error } = userSchema.validate(data);
    
    if (error) {
        return error.details[0].message; // Return the first error message
    }

    return null; // No validation error
}

module.exports = {userValidation,userSignin}