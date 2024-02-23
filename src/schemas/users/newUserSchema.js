//dependencias
const joi = require('joi');

//Esquema

const newUserSchema = joi.object({
    username: joi.string().min(3).max(45).required().messages({
        'string.min': 'The name cannot be less than 3 characters',
        'string.max': 'The name cannot be more than 45 characters',
        'any.required': 'The name is required'
    }),
    email:joi.string().email().required().messages({
        'string.email': 'The email is not valid',
        'any.required': 'Email is required'
    }),
    password:joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/).min(8).max(30).required().messages({
        'string.pattern.base': 'The password must contain at least one uppercase letter, one lowercase letter, and a number',
        'any.required': 'Password is required'
    })
});

module.exports = newUserSchema