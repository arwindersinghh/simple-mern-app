
const express = require('express');
const router = express.Router();

module.exports = router;

//middleware for our router, directing our request to the correct route.
router.use('/author', require('./author'));
router.use('/book', require('./book'));