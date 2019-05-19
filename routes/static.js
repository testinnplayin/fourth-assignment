'use strict';

const express = require('express');
const router = express.Router();

const users = [
    { name : 'John Doe' }
];

router.get('/', (req, res) => {
    return res.render('index', { title : 'User Form' });
});

router.get('/users', (req, res) => {
    return res.render('user-list', {
        title : 'User List',
        users : users
    })
});

module.exports = router;