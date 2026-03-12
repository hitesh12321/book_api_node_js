
let { BOOKS } = require('../model/book.db');
exports.getallbooks = function(req , res) {

console.log(`hii this is the home page!!!`);
res.setHeader('x-his' , 'hitesh');
    res.json(BOOKS);


};

exports.getbookbyid = function (req , res){

const id = parseInt(req.params.id);
const book = BOOKS.find(e =>e.id === id); 
if(!book)return res.status(404).json({ message: 'Book not found' });
res.json(book);

};

exports.createbook = function(req , res){
    console.log(req.headers);
console.log(req.body);
const {title , author} = req.body;



if(!title || title === "")return res.status(400).json({error : "title is required"});
if(!author || author === "")return res.status(400).json({error : "author is required"});
const book = {id : BOOKS.length + 1 , title , author};
BOOKS.push(book);
// res.status(201).json(book);
return res.status(201).json({message : `Book added successfully`, book});
};

exports.deletebook = function (req , res){

        const id = parseInt(req.params.id);

        const newBooks = BOOKS.filter((e) => e.id !== id);
    if(newBooks.length === BOOKS.length ){
    return res.status(400).json({error : `no book found with id: ${id}` });
}

BOOKS.length = 0;
BOOKS.push(...newBooks);

        return res.status(200).json({message : ` id :::${id} book is deleted`});
};
exports.getallbooks = function(req , res) {

console.log(`hii this is the home page!!!`);
res.setHeader('x-his' , 'hitesh');
    res.json(BOOKS);


};
