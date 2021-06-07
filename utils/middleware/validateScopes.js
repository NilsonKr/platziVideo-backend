const boom = require('@hapi/boom');

function validateScopes(allowedScopes) {
	return (req, res, next) => {
		if (!req.user || !req.user.scopes) {
			next(boom.unauthorized());
		}

		const validScopes = allowedScopes.map(scope => req.user.scopes.includes(scope));

		if (validScopes.includes(false)) {
			next(boom.unauthorized('Missing Scopes'));
		}

		next();
	};
}

module.exports = validateScopes;
