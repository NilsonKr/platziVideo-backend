const express = require('express');
const MovieApi = require('../services/movieApi');

function routes(app) {
	const router = express.Router();
	app.use(router);

	const MoviesApi = new MovieApi();

	router.get('/api/movies', async (req, res, next) => {
		try {
			const data = await MoviesApi.getList();

			res.status(200).json({
				data: data,
				message: 'Movies Listed',
			});
		} catch (error) {
			next('Bad Request! ' + error);
		}
	});

	router.get('/api/movies/:movieId', async (req, res, next) => {
		const { movieId } = req.params;

		try {
			const data = await MoviesApi.getMovie(movieId);

			res.status(200).json({
				data: data,
				message: 'Movie Retrieved',
			});
		} catch (error) {
			next('Bad Request! ' + error);
		}
	});

	router.post('/api/movies/', async (req, res, next) => {
		const { body: newMovie } = req;

		try {
			const data = await MoviesApi.createMovie(newMovie);

			res.status(200).json({
				data: data,
				message: 'Movie Created',
			});
		} catch (error) {
			next('Bad Request! ' + error);
		}
	});

	router.put('/api/movies/:movieId', async (req, res, next) => {
		const { movieId } = req.params;

		try {
			const data = await MoviesApi.updateMovie(movieId, req.body);

			res.status(200).json({
				data: data,
				message: 'Movie Updated',
			});
		} catch (error) {
			next('Bad Request! ' + error);
		}
	});

	router.delete('/api/movies/:movieId', async (req, res, next) => {
		const { movieId } = req.params;

		try {
			const data = await MoviesApi.removeMovie(movieId);

			res.status(200).json({
				data: data,
				message: 'Movie Removed Succesfully',
			});
		} catch (error) {
			next('Bad Request! ' + error);
		}
	});
}

module.exports = routes;
