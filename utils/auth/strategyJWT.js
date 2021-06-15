const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

const boom = require('@hapi/boom');
const UsersServices = require('../../services/usersApi');
const { config } = require('../../config/index');

passport.use(
	new Strategy(
		{
			secretOrKey: config.authJwtSecret,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		async (tokenPayload, cb) => {
			const usersApi = new UsersServices();

			try {
				const user = await usersApi.getUsers(tokenPayload.email);

				if (!user) {
					return cb(boom.unauthorized(), false);
				}

				delete user.password;

				return cb(false, { ...user, scopes: tokenPayload.scopes, apiToken: tokenPayload.apiToken });
			} catch (error) {
				return cb(err, false);
			}
		}
	)
);
