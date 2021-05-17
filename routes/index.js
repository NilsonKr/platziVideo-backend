const express = require('express');
const MovieApi = require('../services/movieApi');
//Middlewares
const validationHandler = require('../utils/middleware/handleValidation');
const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schemas/movies');

function routes(app) {
	const router = express.Router();
	app.use(router);

	const MoviesApi = new MovieApi();

	router.get('/api/movies', async (req, res, next) => {
		const { tags } = req.query;

		try {
			const data = await MoviesApi.getList(tags);

			res.status(200).json({
				data: data,
				message: 'Movies Listed',
			});
		} catch (error) {
			next(error);
		}
	});

	router.get(
		'/api/movies/:movieId',
		validationHandler({ movieId: movieIdSchema }, 'params'),
		async (req, res, next) => {
			const { movieId } = req.params;

			try {
				const data = await MoviesApi.getMovie(movieId);

				res.status(200).json({
					data: data,
					message: 'Movie Retrieved',
				});
			} catch (error) {
				next(error);
			}
		}
	);

	router.post('/api/movies/', validationHandler(createMovieSchema), async (req, res, next) => {
		const { body: newMovie } = req;

		try {
			const data = await MoviesApi.createMovie(newMovie);

			res.status(200).json({
				data: data,
				message: 'Movie Created',
			});
		} catch (error) {
			next(error);
		}
	});

	router.put(
		'/api/movies/:movieId',
		validationHandler({ movieId: movieIdSchema }, 'params'),
		validationHandler(updateMovieSchema),
		async (req, res, next) => {
			const { movieId } = req.params;

			try {
				const data = await MoviesApi.updateMovie(movieId, req.body);

				res.status(200).json({
					data: data,
					message: 'Movie Updated',
				});
			} catch (error) {
				next(error);
			}
		}
	);

	router.delete(
		'/api/movies/:movieId',
		validationHandler({ movieId: movieIdSchema }, 'params'),
		async (req, res, next) => {
			const { movieId } = req.params;

			try {
				const data = await MoviesApi.removeMovie(movieId);

				res.status(200).json({
					data: data,
					message: 'Movie Removed Succesfully',
				});
			} catch (error) {
				next(error);
			}
		}
	);
}

module.exports = routes;
