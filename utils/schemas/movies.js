const Joi = require('@hapi/joi');

//Data Schemas
const titleSchema = Joi.string().max(80);
const yearSchema = Joi.number().min(1888).max(2077);
const coverSchema = Joi.string().uri();
const descriptionSchema = Joi.string().max(300);
const durationSchema = Joi.number().min(1).max(300);
const contentRatingSchema = Joi.string().max(5);
const sourceSchema = Joi.string().uri();
const tagsSchema = Joi.array().items(Joi.string().max(50));

const movieIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}/);

const createMovieSchema = Joi.object({
	title: titleSchema.required(),
	year: yearSchema.required(),
	cover: coverSchema.required(),
	description: descriptionSchema.required(),
	duration: durationSchema.required(),
	contentRating: contentRatingSchema.required(),
	source: sourceSchema.required(),
	tags: tagsSchema.required(),
});

const updateMovieSchema = Joi.object({
	title: titleSchema,
	year: yearSchema,
	cover: coverSchema,
	description: descriptionSchema,
	duration: durationSchema,
	contentRating: contentRatingSchema,
	source: sourceSchema,
	tags: tagsSchema,
});

module.exports = {
	movieIdSchema,
	createMovieSchema,
	updateMovieSchema,
};
