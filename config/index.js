require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT || 3000,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
	defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
	authJwtSecret: process.env.AUTH_JWT_SECRET,
	admingApiToken: process.env.ADMING_API_TOKEN,
	publicApiToken: process.env.PUBLIC_API_TOKEN,
};

module.exports = { config };
