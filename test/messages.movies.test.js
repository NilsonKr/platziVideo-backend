const assert = require('assert');
const responseMsgs = require('../utils/responseMsgs');

describe('response messages - movies', function () {
	describe('POST/ movies - response message', function () {
		it('Should Response with the respective message in past', function () {
			const result = responseMsgs('Movie', 'create');
			const expect = 'Movie created';

			assert.strictEqual(result, expect);
		});
	});

	describe('GET/ movies - response message', function () {
		it('Should return with action in past and entity in plural', function () {
			const result = responseMsgs('Movie', 'list');
			const expected = 'Movies listed';

			assert.strictEqual(result, expected);
		});
	});
});
