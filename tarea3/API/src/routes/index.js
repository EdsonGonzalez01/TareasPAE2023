const express = require('express')
const router = express.Router();

const login = require('./login')
const advertisement = require('./advertisment')
const barter = require('./barter')
const user = require('./user')

router.get('', (req, res) => {
    res.send('API Works');
});

router.use('', express.json())

router.use('/login',  login);
router.use('/ad', advertisement);
router.use('/barter', barter);
router.use('/user', user);

module.exports = router