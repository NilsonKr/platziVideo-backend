const assert = require('assert');
const proxyquire = require('proxyquire');

const { movies, filteredMovies } = require('../utils/mocks/movies');
const { getAllStub, MongoLibMock } = require('../utils/mocks/mongoLib');

describe('services - movies', function () {
	//Mocking Mongo real Lib
	const MoviesServices = proxyquire('../services/movieApi.js', {
		'../lib/mongoDb': MongoLibMock,
	});

	const movieApi = new MoviesServices();

	describe('Call MongoLib Actions', function () {
		it('Should call the getAll Action from mongoLib', async function () {
			await movieApi.getList();
			assert(getAllStub.called, true);
		});
	});

	describe('Return a list of movies', function () {
		it('Should Return a movie list from mongoLib', async function () {
			const response = await movieApi.getList();
			const expected = movies;
			assert.deepStrictEqual(response, expected);
		});
	});

	describe('Return By tags filter', function () {
		it('Should Return Data filtered by tags', async function () {
			const result = await movieApi.getList(['Drama']);
			const expected = filteredMovies(['Drama']);

			assert.deepStrictEqual(result, expected);
		});
	});
});
