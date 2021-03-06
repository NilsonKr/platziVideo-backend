const MongoLib = require('../lib/mongoDb');
const bcrypt = require('bcryptjs');

class UsersApi {
	constructor() {
		this.mongoDB = new MongoLib();
		this.collection = 'users';
	}

	async getUsers(email) {
		try {
			const [result] = await this.mongoDB.getAll(this.collection, { email });

			return result;
		} catch (error) {
			throw new Error(error);
		}
	}

	async createUser({ name, email, password }) {
		try {
			const passwordHashed = await bcrypt.hash(password, 10);
			const userCreatedID = await this.mongoDB.create(this.collection, {
				name,
				email,
				password: passwordHashed,
			});

			return userCreatedID;
		} catch (error) {
			throw new Error(error);
		}
	}

	async getOrCreateUser(user) {
		try {
			const queriedUser = await this.getUsers(user.email);

			if (queriedUser) {
				return queriedUser;
			}

			await this.createUser(user);

			return user;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = UsersApi;
