const Joi = require("joi");
const imgSchema = require("./imgSchema");

const newNoteSchema = Joi.object({
    title : Joi.string().required().max(30).messages({
        'any.required': 'Title is required',
        'string.max': 'The title must not exceed 30 characters',
    }),
    text : Joi.string().max(400).allow(``),
    labelId : Joi.number().required().messages({
        'any.required': 'The label is required',
    }),
    status : Joi.string().required().messages({
        'any.required': 'Status is required',
    }),
    wallId : Joi.number().required().messages({
        'any.required': 'The wall is required',
    }),
    image: imgSchema.unknown(true).optional()
    })

module.exports = newNoteSchema;