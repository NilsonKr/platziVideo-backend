// DEBUG=app:* node scripts/seedUsers.js
const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');

const MongoLib = require('../lib/mongoDb');
const bcrypt = require('bcryptjs');
const { config } = require('../config/index');

const users = [
	{
		name: 'NilsonAdmin',
		email: 'nilson908@undifined.sh',
		password: config.defaultAdminPassword,
		isAdmin: true,
	},
	{
		name: 'Minari',
		email: 'minari900@undifined.sh',
		password: config.defaultUserPassword,
	},
	{
		name: 'Nayeonnie',
		email: '23nayeon@undifined.sh',
		password: config.defaultUserPassword,
	},
];

async function createUser(mongo, user) {
	const { name, email, password, isAdmin } = user;

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUserId = await mongo.create('users', {
		name,
		email,
		password: hashedPassword,
		isAdmin: Boolean(isAdmin),
	});

	return newUserId;
}

async function seedUsers() {
	const mongoDB = new MongoLib();

	try {
		const usersPromises = users.map(async user => {
			const userId = await createUser(mongoDB, user);

			debug(chalk.green(`${userId} Has been created!`));
		});

		await Promise.all(usersPromises);

		process.exit(1);
	} catch (error) {
		debug(chalk.bgRed(`Cannot Seed movies , something wrong! `) + error);
		process.exit(2);
	}
}

seedUsers();
