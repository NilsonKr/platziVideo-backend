const assert = require('assert');
const responseMsgs = require('../utils/responseMsgs');

describe.only('response messages - movies', function () {
	describe('POST/ movies - response message', function () {
		it('Should Response with the respective message in past', function () {
			const result = responseMsgs('Movie', 'create');
			const expect = 'Movie created';

			assert.strictEqual(result, expect);
		});
	});

	describe('GET/ movies - response messaage', function () {
		it('Should Response with plural entity and respective action', function () {
			const result = responseMsgs('Movie', 'list');
			const expect = 'Movies listed';

			assert.strictEqual(result, expect);
		});
	});
});
