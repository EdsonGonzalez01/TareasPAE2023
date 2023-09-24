const express = require('express')
const router = express.Router();

const news = require('./news')

router.get('', (req, res) => {
    res.render('landing');
});

router.use('/news', news)

module.exports = router
