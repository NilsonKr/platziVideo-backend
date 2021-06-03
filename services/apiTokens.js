const MongoLib = require('../lib/mongoDb');

class ApiTokensService {
	constructor() {
		this.collection = 'api-tokens';
		this.mongoDB = new MongoLib();
	}

	async getApiToken(token) {
		try {
			const [apiToken] = await this.mongoDB.getAll(this.collection, { token });

			return apiToken;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = ApiTokensService;
