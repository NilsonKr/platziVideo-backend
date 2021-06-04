const boom = require('@hapi/boom');

function validateScopes(allowedScopes) {
	return (req, res, next) => {
		if (!req.user || !req.user.scopes) {
			next(boom.unauthorized());
		}

		const scopesList = allowedScopes.map(scope => req.user.scopes.includes(scope));

		if (scopesList.includes(false)) {
			next(boom.unauthorized('Missing Scopes Authorized'));
		}

		next();
	};
}

module.exports = validateScopes;
