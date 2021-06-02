const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const UserServices = require('../../services/usersApi');
const bcrypt = require('bcryptjs');
const boom = require('@hapi/boom');

passport.use(
	new BasicStrategy(async (email, password, cb) => {
		const usersApi = new UserServices();

		//Validate user
		try {
			const user = await usersApi.getUsers(email);

			if (!user) {
				return cb(boom.unauthorized(), false);
			}

			const passwordValid = await bcrypt.compare(password, user.password);

			if (!passwordValid) {
				return cb(boom.unauthorized(), false);
			}

			delete user.password;

			return cb(false, user);
		} catch (error) {
			cb(error, false);
		}
	})
);
