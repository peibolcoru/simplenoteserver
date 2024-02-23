// Importamos las dependencias.
const joi = require('joi');

// Creamos un esquema para validar imágenes. De esta forma podremos reutilizar este esquema
// en los esquemas de validación de los endpoints que requieran imágenes.
const imgSchema = joi
    .object({
        name: joi.string().required().messages({
            'any.required': 'Image name is required',
        }),
        mimetype: joi
            .string()
            .valid('image/jpeg', 'image/png')
            .required()
            .messages({
                'any.only': 'Only jpeg or png photos are allowed',
                'any.required': 'Image type is required',
            }),
        size: joi.number().max(5000000).required().messages({
            'number.max': 'The file must not exceed 5 MB',
            'any.required': 'Image size is required',
        }),
    })
    .unknown(true);

module.exports = imgSchema;
