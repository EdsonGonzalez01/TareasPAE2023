const router = require('express').Router();

const controller = require('../controllers/news.controller')

router.get('', controller.list);

module.exports = router