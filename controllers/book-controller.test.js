import expect from 'expect';

describe('Book Controller Tests', () => {
    describe('Post', () => {
        it('Should not allow an empty title on post', () => {
            const Book = function(book){ this.save = function(){ }}; 

            const req = {
                body: {
                    author: 'Borne',
                    title: 'My book'
                }
            }

            let resp = {
                _status: 0,
                _book: {},
                status: (state) => {
                    resp._status = state;
                },
                send: (object) => {
                    resp._book = object; 
                }
            }
            
            const bookController = require('../controllers/book-controller')(Book);
            bookController.post(req, resp);
            
            expect(resp._status).toEqual(201);
        })
    })
});