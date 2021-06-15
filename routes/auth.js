const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/index');

const UserServices = require('../services/usersApi');
const ApiTokensService = require('../services/apiTokens');

const validationHandler = require('../utils/middleware/handleValidation');
const { createUserSchema } = require('../utils/schemas/users');
const boom = require('@hapi/boom');

//Basic Strategy passport authentication

require('../utils/auth/basicStrategy');

//JWT Strategy passport

require('../utils/auth/strategyJWT');

function authRoutes(app) {
	const router = express.Router();
	app.use('/api/auth', router);

	const apiTokens = new ApiTokensService();
	const userApi = new UserServices();

	router.post('/sign-in', async (req, res, next) => {
		const { apiToken } = req.body;

		if (!apiToken) {
			next(boom.unauthorized('apiToken is Required'));
		}

		//Custom Callback
		passport.authenticate('basic', (error, user) => {
			if (error || !user) {
				next(boom.unauthorized());
			}

			try {
				req.login(user, { session: false }, async error => {
					if (error) {
						next(error);
					}

					//Build JWT
					const { _id, name, email } = user;

					const payload = {
						sub: _id,
						name,
						email,
						apiToken: apiToken,
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

	router.post('/sign-up', validationHandler(createUserSchema), async (req, res, next) => {
		try {
			const userIdCreated = await userApi.createUser(req.body);

			res.status(201).json({
				data: userIdCreated,
				message: 'User Created',
			});
		} catch (error) {
			next(error);
		}
	});

	//OAuth Provider
	router.post('/sign-provider', async (req, res, next) => {
		const { apiToken, ...user } = req.body;

		try {
			const queriedUser = await userApi.getOrCreateUser(user);
			const apiKey = await apiTokens.getApiToken(apiToken);

			if (!apiKey) {
				next(boom.unauthorized());
			}

			const { _id: id, name, email } = queriedUser;

			const payload = {
				sub: id,
				name,
				email,
				scopes: apiKey.scopes,
			};

			const newJwt = jwt.sign(payload, config.authJwtSecret, {
				expiresIn: '1h',
			});

			res.status(200).json({ token: newJwt, user: { id, name, email } });
		} catch (error) {
			next(error);
		}
	});

	//Get Authorization Token

	router.post(
		'/authorizate',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			const { _id: id, name, email, apiToken } = req.user;

			try {
				const apiKey = await apiTokens.getApiToken(apiToken);

				if (!apiKey) {
					return next(boom.unauthorized());
				}

				const payload = {
					sub: id,
					name,
					email,
					scopes: apiKey.scopes,
				};

				const authJWT = jwt.sign(payload, config.authJwtSecret, {
					expiresIn: '1h',
				});

				res.status(200).json(authJWT);
			} catch (error) {
				next(error);
			}
		}
	);
}

module.exports = authRoutes;
