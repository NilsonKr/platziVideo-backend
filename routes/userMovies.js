const passport = require('passport');
const express = require('express');
const UserMoviesApi = require('../services/userMovieApi');

const validationHandler = require('../utils/middleware/handleValidation');

const { userMovieSchema, userMovieIdSchema } = require('../utils/schemas/userMovies');
const { userIdSchema } = require('../utils/schemas/users');

//JWT Strategy passport
require('../utils/auth/strategyJWT');

function userMovies(app) {
	const router = express.Router();
	const userMoviesApi = new UserMoviesApi();

	app.use('/api/userMovies', router);

	router.get(
		'/',
		passport.authenticate('jwt', { session: false }),
		validationHandler({ userId: userIdSchema }, 'query'),
		async (req, res, next) => {
			const { userId } = req.query;

			try {
				const result = await userMoviesApi.getMovies(userId);

				res.status(200).json({
					data: result,
					message: 'User Movies List',
				});
			} catch (error) {
				next(error);
			}
		}
	);

	router.post(
		'/',
		passport.authenticate('jwt', { session: false }),
		validationHandler(userMovieSchema),
		async (req, res, next) => {
			const userMovie = req.body;

			console.log(userMovie);

			try {
				const newMovieId = await userMoviesApi.addMovie(userMovie);

				res.status(201).json({
					data: newMovieId,
					message: 'Movie Added',
				});
			} catch (error) {
				next(error);
			}
		}
	);

	router.delete(
		'/:userMovieId',
		passport.authenticate('jwt', { session: false }),
		validationHandler({ userMovieId: userMovieIdSchema }, 'params'),
		async (req, res, next) => {
			const id = req.params.userMovieId;

			try {
				const movieRemovedId = await userMoviesApi.deleteMovie(id);

				res.status(200).json({
					data: movieRemovedId,
					message: 'Movie Removed Succesfully',
				});
			} catch (error) {
				next(error);
			}
		}
	);
}

module.exports = userMovies;
