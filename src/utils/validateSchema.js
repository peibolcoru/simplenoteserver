
const validateSchema = async (schema, data) => {
    try {
        await schema.validateAsync(data);
    } catch (err) {
        err.hhtpStatus = 400;
        throw err
    }    
}

module.exports = validateSchema;