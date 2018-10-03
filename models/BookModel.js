import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let bookModel = new Schema({
    title: { type: String},
    author: { type: String},
    genere: { type: String},
    read: { type: Boolean, default: false}
});

module.exports = mongoose.model('BookModel', bookModel);