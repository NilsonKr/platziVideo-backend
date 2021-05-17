const boom = require('@hapi/boom');
const { config } = require('../../config/index');

//Print with detail info or not depend of the enviroment
function setStack(err, stack) {
	if (config.dev) {
		return { ...err, stack };
	}

	return err;
}

//Structure of a error middleware
function logErrors(err, req, res, next) {
	console.log(err);
	next(err);
}

function wrapBoomError(err, req, res, next) {
	if (!err.isBoom) {
		next(boom.badImplementation(err));
	}

	next(err);
}

function handleErrors(err, req, res, next) {
	const {
		output: { statusCode, payload },
	} = err;

	res.status(statusCode || 500);
	res.json(setStack(payload, err.stack));
}

module.exports = {
	logErrors,
	wrapBoomError,
	handleErrors,
};
