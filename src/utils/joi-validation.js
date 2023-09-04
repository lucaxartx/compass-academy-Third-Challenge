const Joi = require('joi')

const userInputValidation = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    confirmPassword: Joi.string().min(5).required(),
    birthDate: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
});

const loginInputValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
});

const eventCreatingValidation = Joi.object({
    description: Joi.string().min(5).required(),
    dayOfWeek: Joi.string().required(),
});

module.exports = {userInputValidation, loginInputValidation, eventCreatingValidation}