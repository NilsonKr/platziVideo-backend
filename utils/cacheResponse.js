const { config } = require('../config/index');

const FIVE_MINUTES = 300;
const ONE_HOUR = 3600;

function cacheResponse(res, time) {
	if (!config.dev) {
		res.set('Cache-Control', `public, max-age=${time}`);
	}
}

module.exports = { cacheResponse, FIVE_MINUTES, ONE_HOUR };
