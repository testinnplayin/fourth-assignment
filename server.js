'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

const staticRoutes = require('./routes/static');

const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', 'views'); // reiterated here so that I don't forget about it even though it's set by default

app.use('/', staticRoutes);

app.use('*', (req, res) => {
    return res.status(404).json({ error : 'Page not found' });
});

app.listen(PORT, () => {
    console.info('Server listening on port ', PORT);
});