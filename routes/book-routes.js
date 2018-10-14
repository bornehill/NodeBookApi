import express from 'express';
import Book from '../models/BookModel';

const routes = () => {
    const bookRouter = express.Router();
    
    bookRouter.route('/')
    .post((req, resp) => {
        const book = new Book(req.body);
        book.save();
        resp.status(201).send(book);
    })
    .get((req, resp) => {
        const query = req.query;
        Book.find(query, (err, books) => {
            if(err)
            {
                resp.status(500).send(err);
            }
    
            resp.json(books);
        });
    });
    
    bookRouter.route('/:bookId')
    .get((req, resp) => {
        Book.findById(req.params.bookId, (err, book) => {
            if(err)
            {
                resp.status(500).send(err);
            }
    
            resp.json(book);
        });
    });

    return bookRouter;
};

module.exports = routes;