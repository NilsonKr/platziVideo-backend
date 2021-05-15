const { config } = require('../config/index');
const { MongoClient, ObjectId } = require('mongodb');

const dbUser = encodeURIComponent(config.dbUser);
const dbPassword = encodeURIComponent(config.dbPassword);
const dbName = config.dbName;

const mongoURI = `mongodb+srv://${dbUser}:${dbPassword}@${config.dbHost}/${dbName}?retryWrites=true&w=majority`;

class MongoLib {
	constructor() {
		this.client = new MongoClient(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

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

					console.log('[db] connected!');
					resolve(this.client.db(this.dbName));
				});
			});
		}

		//Return Static Variable
		return MongoLib.connection;
	}

	getAll(collection, query) {
		return this.connect().then(db => {
			return db.collection(collection).find(query).toArray();
		});
	}

	get(collection, id) {
		return this.connect().then(db => {
			return db.collection(collection).findOne({ _id: ObjectId(id) });
		});
	}

	create(collection, data) {
		return this.connect()
			.then(db => {
				return db.collection(collection).insertOne(data);
			})
			.then(result => result.insertedId);
	}

	update(collection, id, data) {
		return this.connect()
			.then(db => {
				return db
					.collection(collection)
					.updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
			})
			.then(result => result.upsertedId || id);
	}

	remove(collection, id) {
		return this.connect()
			.then(db => {
				return db.collection(collection).deleteOne({ _id: ObjectId(id) });
			})
			.then(() => id);
	}
}

module.exports = MongoLib;
