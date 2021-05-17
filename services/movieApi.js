const MongoLib = require('../lib/mongoDb');

class MovieApi {
	constructor() {
		this.mongodb = new MongoLib();
		this.collection = 'moviesapi';
	}

	async getList(tags) {
		//Filter Mongo syntax
		const filter = tags && { tags: { $in: tags } };

		try {
			const data = await this.mongodb.getAll(this.collection, filter);

			return data || [];
		} catch (error) {
			throw new Error(error);
		}
	}

	async getMovie(id) {
		try {
			const movie = await this.mongodb.get(this.collection, id);

			return movie;
		} catch (error) {
			throw new Error(error);
		}
	}

	async createMovie(newMovie) {
		try {
			const movie = await this.mongodb.create(this.collection, newMovie);

			return movie;
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateMovie(id, newBody) {
		try {
			const movie = await this.mongodb.update(this.collection, id, newBody);

			return movie;
		} catch (error) {
			throw new Error(error);
		}
	}

	async removeMovie(id) {
		try {
			const movie = await this.mongodb.remove(this.collection, id);

			return movie;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = MovieApi;
