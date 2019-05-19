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

router.post('/send', (req, res) => {
    console.log('post ', req.body);
    users.push({ name : req.body.name });
    return res.redirect('/users');
});

module.exports = router;