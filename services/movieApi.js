const mockData = require('../utils/mocks/movies');

class MovieApi {
	async getList() {
		try {
			const data = await Promise.resolve(mockData);

			return data || [];
		} catch (error) {
			throw new Error(error);
		}
	}

	async getMovie(id) {
		try {
			const movie = await Promise.resolve(mockData[0]);

			return movie;
		} catch (error) {
			throw new Error(error);
		}
	}

	async createMovie(newMovie) {
		try {
			const movie = await Promise.resolve(mockData[0].id);

			return { id: movie, ...newMovie };
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateMovie(id, newBody) {
		try {
			const movie = await Promise.resolve(mockData[0]);

			return movie;
		} catch (error) {
			throw new Error(error);
		}
	}

	async removeMovie(id) {
		try {
			const movie = await Promise.resolve(mockData[0]);

			return movie;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = MovieApi;
