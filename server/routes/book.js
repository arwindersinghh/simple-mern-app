const express = require('express');
const Book = require('../db/models/Book');
const router = express.Router();

module.exports = router;


router.get('/', async(req, res) => {

    const books = await Book.find().populate('author').exec();

    res.send(books)
})


router.get('/:id', async(req, res) => {
    const book = await Book.findById(req.params.id).populate('author').exec();

    res.send(book);
})
