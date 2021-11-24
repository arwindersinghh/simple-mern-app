const mongoose = require('mongoose');
const Schema = mongoose.Schema

const authorSchema = new Schema({
    name : {
        type: String,
        required: true
    }    
}, { toJSON : { virtuals: true }})

//we are setting virtuals to true for this boilerplate purpose so we can see our data, normally we wont do this.
//Generally, you want the child schema to have a pointer to the parent, and the parent schema being able to query data
//through virtuals. It is not good to have a pointer both ways.
//a virtual not stored in the database, just for mongoose
//to be able to figure out which books an author has
authorSchema.virtual('books', {
    ref: 'Book',
    localField: '_id',
    foreignField: 'author'
})

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;