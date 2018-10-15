import express from 'express';
import open from 'open';
import mongoose from 'mongoose';  
import bodyParser from 'body-parser';  
import Book from './models/BookModel';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true }, function(error) {
    if(error)
        console.log(`conection mongo error: ${error}`);
  });

const bookRouter = require('./routes/book-routes')(Book);

app.use('/api/books', bookRouter);

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