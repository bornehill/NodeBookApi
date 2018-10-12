import express from 'express';
import open from 'open';
import mongoose from 'mongoose';
import Book from './models/BookModel';  

const port = process.env.PORT || 3000;
const app = express();

const bookRouter = express.Router();
const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true }, function(error) {
    if(error)
        console.log(`conection mongo error: ${error}`);
  });

bookRouter.route('/Books')
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

bookRouter.route('/Books/:bookId')
.get((req, resp) => {
    Book.findById(req.params.bookId, (err, book) => {
        if(err)
        {
            resp.status(500).send(err);
        }

        resp.json(book);
    });
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API kk');
    //res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
});