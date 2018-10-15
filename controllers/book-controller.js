const bookController = (Book) =>{

    const post = (req, resp) => {
        const book = new Book(req.body);
        if(!req.body.title)
        {
            resp.status(400);    
            return;
        }

        book.save();
        resp.status(201);
        resp.send(book);
    }

    const get = (req, resp) => {
        const query = req.query;
        Book.find(query, (err, books) => {
            if(err)
            {
                resp.status(500).send(err);
                return;
            }
    
            resp.json(books);
        });
    }

    return {
        post: post,
        get: get
    }
}

module.exports = bookController;