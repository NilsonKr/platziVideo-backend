// DEBUG=app:* node scripts/mongo/seedMovies.js
const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');

const MongoLib = require('../lib/mongoDb');
const { movies } = require('../utils/mocks/movies');

async function seedMovies() {
	const mongoDB = new MongoLib();

	try {
		const moviesPromise = movies.map(async movie => {
			await mongoDB.create('movies', movie);
		});

		await Promise.all(moviesPromise);

		debug(`${chalk.blueBright(moviesPromise.length)} ${chalk.magenta('Movies was added')}  `);
		process.exit(1);
	} catch (error) {
		debug(chalk.bgRed('Cannot Seed movies , something wrong!'));
		process.exit(2);
	}
}

seedMovies();
