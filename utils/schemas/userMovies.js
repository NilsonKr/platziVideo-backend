const joi = require('@hapi/joi');

const { movieIdSchema } = require('./movies');
const { userIdSchema } = require('./users');

const userMovieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);

const userMovieSchema = joi.object({
	movieId: movieIdSchema.required(),
	userId: userIdSchema.required(),
});

module.exports = {
	userMovieIdSchema,
	userMovieSchema,
};
