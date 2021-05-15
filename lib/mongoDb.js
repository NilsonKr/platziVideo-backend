const { config } = require('../config/index');
const { MongoClient, ObjectId } = require('mongodb');

const dbUser = encodeURIComponent(config.dbUser);
const dbPassword = encodeURIComponent(config.dbPassword);
const dbName = config.dbName;

const mongoURI = `mongodb+srv://${dbUser}:${dbPassword}@${config.dbHost}/${dbName}?retryWrites=true&w=majority`;

class MongoLib {
	constructor() {
		this.client = new MongoClient(mongoURI, { useNewUrlParser: true });
		this.dbName = dbName;
	}

	connect() {
		//Singleton Pattern
		if (!MongoLib.connection) {
			MongoLib.connection = new Promise((resolve, reject) => {
				this.client.connect(err => {
					if (err) {
						reject(err);
					}

					resolve(this.client.db(this.dbName));
				});
			});
		}

		//Return Static Variable
		return MongoLib.connection;
	}
}

module.exports = MongoLib;
