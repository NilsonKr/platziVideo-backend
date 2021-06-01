const MongoLib = require('../lib/mongoDb');

class UserMovieApi {
	constructor() {
		this.mongoDB = new MongoLib();
		this.collection = 'userMovies';
	}

	async getMovies({ userId }) {
		try {
			const userMovies = await this.mongoDB.getAll(this.collection, { userId: userId });

			return userMovies;
		} catch (error) {
			throw new Error(error);
		}
	}

	async addMovie(movie) {
		try {
			const userMovieId = await this.mongoDB.create(this.collection, movie);

			return userMovieId;
		} catch (error) {
			throw new Error(error);
		}
	}

	async deleteMovie(movieId) {
		try {
			const removedId = this.mongoDB.remove(this.collection, movieId);

			return removedId;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = UserMovieApi;
