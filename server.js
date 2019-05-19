'use strict';

const express = require('express');
const app = express();

const PORT = 3000;

app.use('*', (req, res) => {
    return res.status(404).json({ error : 'Page not found' });
});

app.listen(PORT, () => {
    console.info('Server listening on port ', PORT);
});