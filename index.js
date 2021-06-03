const express = require('express');
const app = express();
const { config } = require('./config/index');

const moviesRoutes = require('./routes/movies');
const userMoviesRoutes = require('./routes/userMovies');
const authRoutes = require('./routes/auth');

const { logErrors, wrapBoomError, handleErrors } = require('./utils/middleware/handleErrors');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//Parse And routes
app.use(express.json());

authRoutes(app);
moviesRoutes(app);
userMoviesRoutes(app);
//Catch 404
app.use(notFoundHandler);

//Error Middlewares
app.use(logErrors);
app.use(wrapBoomError);
app.use(handleErrors);

app.listen(config.port, () => {
	console.log(`Magic Happens on http://localhost:${config.port}`);
});
