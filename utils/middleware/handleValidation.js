const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(content, schema) {
	//Validate Joi Schema
	if (schema.type !== 'object') {
		schema = joi.object(schema);
	}

	const { error } = schema.validate(content);

	return error;
}

function handleValidations(schema, check = 'body') {
	return function (req, res, next) {
		const isError = validate(req[check], schema);

		isError ? next(boom.badRequest(isError)) : next();
	};
}

module.exports = handleValidations;
