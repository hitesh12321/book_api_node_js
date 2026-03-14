const {db} = require('../db/index.js');
const { eq } = require("drizzle-orm");
let { BOOKS } = require('../model/book.model');
let { authortable } = require('../model/author.model');
exports.getallbooks = async(req , res) =>{

console.log(`hii this is the home page!!!`);
res.setHeader('x-his' , 'hitesh');
    const books = await db.select().from(BOOKS);
    res.json(books);


};
exports.getbookbyid = async (req , res) => {

console.log("this is get book by id api");

const id = req.params.id;

const book = await db
.select()
.from(BOOKS)
.where(eq(BOOKS.id, id));

if (book.length === 0) {
    return res.status(404).json({ message: "Book not found" });
}

res.json(book);

};

exports.createbook = async (req , res) =>{
    console.log("this is create book api");
    // console.log(req.headers);
console.log(req.body);
const {title ,description , authorId} = req.body;



if(!title || title === "")return res.status(400).json({error : "title is required"});
if(!authorId || authorId === "")return res.status(400).json({error : "authorId is required"});

const newBook = await db.insert(BOOKS).values({
    title : title,
    description : description,
    authorId : authorId

});
console.log(newBook);
// res.status(201).json(book);
return res.status(201).json({message : `Book added successfully`, newBook});
};

exports.deletebook = async function (req , res){
            console.log("this is delete book api");

       const id = req.params.id;

const newbooks = await db.delete(BOOKS).where(eq(BOOKS.id , id)).returning();


        
    if(newbooks.length === 0 ){
    return res.status(400).json({error : `no book found with id: ${id}` });
}
        return res.status(200).json({message : ` id :::${id} book is deleted`});
};