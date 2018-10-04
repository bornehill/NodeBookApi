import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let bookModel = new Schema({
    title: { type: String},
    author: { type: String},
    genre: { type: String},
    read: { type: Boolean, default: false}
});

module.exports = mongoose.model('Book', bookModel);

//db.Book.insertOne({_id: "54fb9534e04553b47ecaf59a", title: "War an Peace", genre: "Historical Fiction", author: "Lev Nikolayevich", read: false});
//db.Book.insertOne({_id: "54fb9534e04553b47ecaf59b", title: "Origen", genre: "Historical Fiction", author: "Dan Brown", read: false});