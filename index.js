require("dotenv/config")
const express = require("express");

const app = express();
// yha humne apna router import kiya h 
// jo book.routes.js me banaya h
const routes = require("./routes/book.routes");
const { middlewareFunction } = require("./middleware/custom");
const port = 3000 ;

// midware plugins 
app.use(express.json());
app.use(express.text());
app.use(middlewareFunction);
// yha par humne apne router ko use kiya h
app.use('/books' ,routes);
app.listen(port , ()=>{
    console.log("server is running!!");
});






