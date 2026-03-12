const express = require('express');
const router = express.Router();

const controller = require('../controller/book.controller');
// router pr api calls set ki h 
// and is router ko index.js me use kiya h
// wha par humne app.use('/books' , routes) kiya h to iska matlab h ki jab bhi
//  koi request /books par aayegi to ye router handle karega
// is router ko hum kuch or naam bhi de skte h 
// like bookRouter ya kuch or bhi de skte h but humne router hi rakh liya h
router.get("/" , controller.getallbooks);

// router.get('/:id' ,controller.getbookbyid);


// router.delete('/:id' ,controller.deletebook);



// router.post('/' , controller.createbook);



module.exports = router;