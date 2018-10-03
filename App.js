import express from 'express';
import open from 'open';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const app = express();

let bookRouter = express.Router();

bookRouter.route('/Books')
.get((req, resp) => {
    let responseJson = { hello: 'Hi API'};

    resp.json(responseJson);
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