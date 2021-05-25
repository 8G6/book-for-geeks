const mongoose = require('mongoose');
  
const book = new mongoose.Schema({
      //1)Name of the book
      name: { 
          type: String,
          required: true 
      },
      //2)Name of Author
      author: { 
          type: String, 
          required: true 
      },
      //3)Name of Author
      language: {
          type: String,
          required: true
      },
      //4)Name of Author
      cover_image: {data: 
          Buffer,
          contentType: String
      },
      //5)Name of Author
      isbn: { 
          type: String, 
          unique: true 
      },
      //6)Name of Author
      details: { 
          type: String, 
          required: true
      },
      //7)Name of Author
      link:{ 
           type: String,
           required: true
      },
      //8)Name of Author
      year:{ 
          type: Number, 
          required: true
      },
      //9)Name of Author
      genre:{ 
          type: String, 
          required: true
      }
  });

const Book=mongoose.model('Book',book)

module.exports = Book;