const assert = require('assert');
const proxyquire = require('proxyquire');

const { MoviesMockServices, movies } = require('../utils/mocks/movies');
const testServer = require('../testServer');

describe('Movies - Routes ', function () {
	//Replace real services for mock
	const routes = proxyquire('../routes/index.js', {
		'../services/movieApi': MoviesMockServices,
	});
	//Testing server
	const request = testServer(routes);

	describe('GET/movies-status', function () {
		it('Should Response with status 200', function (done) {
			request.get('/api/movies').expect(200, done);
		});
	});

	describe('GET/movies-list', function () {
		it('Should response with a list of movies', function (done) {
			request.get('/api/movies').end((err, res) => {
				assert.deepStrictEqual(res.body, {
					data: movies,
					message: 'Movies Listed',
				});

				done();
			});
		});
	});
});
