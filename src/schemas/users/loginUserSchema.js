const joi = require('joi');

const loginUserSchema = joi.object({email: joi.string().email().required().messages({
    'string.email': 'The email is not valid',
    'any.required': 'Email is required'
}),
password: joi.string().required().messages({
    'any.required': 'password is required',
})


})

module.exports = loginUserSchema;