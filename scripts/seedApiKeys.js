// DEBUG=app:* node scripts/mongo/seedApiKeys.js
const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');
const crypto = require('crypto');

const MongoLib = require('../lib/mongoDb');

//Authorization
const adminScopes = [
	'signin:auth',
	'signup:auth',
	'read:movies',
	'create:movies',
	'update:movies',
	'delete:movies',
	'read:user-movies',
	'create:user-movies',
	'delete:user-movies',
];

const publicScopes = [
	'signin:auth',
	'signup:auth',
	'read:movies',
	'read:user-movies',
	'create:user-movies',
	'delete:user-movies',
];

const genRandomToken = () => {
	return crypto.randomBytes(32).toString('hex');
};

const ApiTokens = [
	{
		token: genRandomToken(),
		scopes: adminScopes,
	},
	{
		token: genRandomToken(),
		scopes: publicScopes,
	},
];

//Insert Tokens in mongo
async function seedApiTokens() {
	const mongoDB = new MongoLib();

	try {
		const tokensPromises = ApiTokens.map(async token => {
			await mongoDB.create('api-tokens', token);
		});

		await Promise.all(tokensPromises);

		debug(chalk.bgGreen('Tokens Public and Admin Generate!'));
		process.exit(1);
	} catch (error) {
		debug(chalk.bgRed('Something Came out Wrong!', error));
		process.exit(2);
	}
}

seedApiTokens();
