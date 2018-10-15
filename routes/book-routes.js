import express from 'express';

const routes = (Book) => {
    const bookRouter = express.Router();
    const bookController = require('../controllers/book-controller')(Book);
    
    bookRouter.route('/')
    .post(bookController.post)
    .get(bookController.get);
    
    bookRouter.use('/:bookId', (req, resp, next) => {
        Book.findById(req.params.bookId, (err, book) => {
            if(err)
            {
                resp.status(500).send(err);
                return;
            }

            if(!book)
            {
                resp.status(404).send('Book does not exist');
                return;
            }            
    
            req.book = book;
            next();
        });        
    });

    bookRouter.route('/:bookId')
    .get((req, resp) => {
        resp.json(req.book);
    })
    .put((req, resp) => {
            const book = req.book;            
            book.title = req.body.title;
            book.author = req.body.author;
            book.genre = req.body.genre;
            book.read = req.body.read;
            book.save((err) => {
                if(err)
                {
                    resp.status(500).send(err);
                    return;
                }
    
                resp.json(book);
            });
    })
    .patch((req, resp) => {
        if(req.body._id)
            delete req.body._id;
        
        for(let p in req.body)
        {
            req.book[p] = req.body[p];
        }

        req.book.save((err) => {
            if(err)
            {
                resp.status(500).send(err);
                return;
            }

            resp.json(req.book);
        });
    })
    .delete((req, resp) => {
        req.book.remove((err) => {
            if(err)
            {
                resp.status(500).send(err);
                return;
            }

            resp.status(204).send('Removed');
        });
    })    ;

    return bookRouter;
};

module.exports = routes;