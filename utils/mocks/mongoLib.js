const sinon = require('sinon');
const { movies, filteredMovies } = require('./movies');

const getAllStub = sinon.stub();
const tagsFilter = { tags: { $in: ['Drama'] } };

getAllStub.withArgs('moviesapi').resolves(movies);
//With Filter
getAllStub.withArgs('moviesapi', tagsFilter).resolves(filteredMovies(['Drama']));

const createStub = sinon.stub().resolves(movies[0].id);

class MongoLibMock {
	getAll(collection, query) {
		return getAllStub(collection, query);
	}

	create(collection, data) {
		return createStub(collection, data);
	}
}

module.exports = { MongoLibMock, createStub, getAllStub };
