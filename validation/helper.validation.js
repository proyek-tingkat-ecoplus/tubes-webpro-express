
const Joi = require('joi');

exports.validateHelper = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        detail: Joi.string().min(3).required()
    });

    return schema.validate(data);
}