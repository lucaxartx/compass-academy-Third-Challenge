

export const userInputValidation = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    confirmPassword: Joi.string().min(5).required(),
    birthDate: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
});