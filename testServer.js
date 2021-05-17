const supertest = require('supertest');
const express = require('express');

function testServer(router) {
	const app = express();
	router(app);

	return supertest(app);
}

module.exports = testServer;
