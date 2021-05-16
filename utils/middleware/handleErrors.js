const { config } = require('../../config/index');

//Print with detail info or not depend of the enviroment
function setStack(err, stack) {
	if (config.dev) {
		return { err, stack };
	}

	return err;
}

//Structure of a error middleware
function logError(err, req, res, next) {
	console.log(err);
	next(err);
}

function handleError(err, req, res, next) {
	res.status(err.status || 500);
	res.json(setStack(err.message, err.stack));
}

module.exports = {
	logError,
	handleError,
};
