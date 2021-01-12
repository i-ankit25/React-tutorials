import React from 'react';
import ReactDom from 'react-dom'; 
import './index.css'
//named import
import { books } from './books' // the name 'books' should be same as it is a named import
// default import
import Book from './Book'// the name 'Book' can be replaced as it is a default import

function BookList() {
  return (
    <section className= "booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
  })}
     </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));