const express = require('express');
const app = express();

const { config } = require('./config/index');
const { logError, handleError } = require('./utils/middleware/handleErrors');
const routes = require('./routes/index.js');

//Parse And routes
app.use(express.json());
routes(app);
//Middlewares
app.use(logError);
app.use(handleError);

app.listen(config.port, () => {
	console.log(`Magic Happens on http://localhost:${config.port}`);
});
