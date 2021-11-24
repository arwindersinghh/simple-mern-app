const express = require('express');
const Author = require('../db/models/Author');
const Book = require('../db/models/Book');
const router = express.Router();

module.exports = router;


router.get('/', async(req, res) => {
    //get all authors, and populate the books they own through our virtual field.    
    const authors = await Author.find().populate('books').exec();
    res.send(authors);
})

router.get('/:id', async(req, res) => {
    //get single author
    const author = await Author.findById(`${req.params.id}`).populate('books').exec();
    res.send(author);
})

