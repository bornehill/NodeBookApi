import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookModel = new Schema({
    title: { type: String},
    author: { type: String},
    genre: { type: String},
    read: { type: Boolean, default: false}
}, {collection : 'Book'});

module.exports = mongoose.model('Book', bookModel)

//db.Book.insertOne({title: "War an Peace", genre: "Historical Fiction", author: "Lev Nikolayevich", read: false});
//db.Book.insertOne({title: "Origen", genre: "Historical Fiction", author: "Dan Brown", read: false});