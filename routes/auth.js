const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const ApiTokensService = require('../services/apiTokens');
const { config } = require('../config/index');
const boom = require('@hapi/boom');

//Basic Strategy passport authentication

require('../utils/auth/basicStrategy');

function authRoutes(app) {
	const router = express.Router();
	app.use('/api/auth', router);

	const apiTokens = new ApiTokensService();

	router.post('/sign-in', async (req, res, next) => {
		const { apiToken } = req.body;

		if (!apiToken) {
			next(boom.unauthorized('apiToken is Required'));
		}

		passport.authenticate('basic', (error, user) => {
			if (error || !user) {
				next(boom.unauthorized());
			}

			try {
				req.login(user, { session: false }, async error => {
					if (error) {
						next(boom.unauthorized());
					}

					const apiKey = await apiTokens.getApiToken(apiToken);

					if (!apiKey) {
						next(boom.unauthorized());
					}

					//Build JWT
					const { _id, name, email } = user;

					const payload = {
						sub: _id,
						name,
						email,
						scopes: apiKey.scopes,
					};

					const newJwt = jwt.sign(payload, config.authJwtSecret, {
						expiresIn: '15m',
					});

					res.status(200).json({
						token: newJwt,
						user: { id: _id, name, email },
					});
				});
			} catch (error) {
				next(error);
			}
		})(req, res, next);
	});
}

module.exports = authRoutes;
