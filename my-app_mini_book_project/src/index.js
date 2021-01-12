import React from 'react';
import ReactDom from 'react-dom'; 
import './index.css'

const books = [
  {
    id:1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51oHUvYzbsL._AC_UL200_SR200,200_.jpg",
    title: 'The Theory of Everything',
    author: 'Stephen Hawking'
  },
  { id:2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/61JrxSSluvL._AC_UL200_SR200,200_.jpg",
    title: 'Love, Hope and Magic',
    author: 'Ashish Bagrecha'
  },
  {
    id:3,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91DBkHW1%2BtL._AC_UL200_SR200,200_.jpg',
    title: 'Bhagavad Gita: Yatharoop (Hindi)',
    author: 'A.C. Bhaktivendanta Swami Prabhupada'
  }
];

function BookList() {
  return (
    <section className= "booklist">
      {books.map((book) => {
        return <Book key={book.id} /*book={book}*/ {...book}></Book>
  })}
     </section>
  );
}
/*One of the ways for defining components using  Nesting

const Book = () => {
  return <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/51oHUvYzbsL._AC_UL200_SR200,200_.jpg"
  alt="" />
 
const Title = () => <h1>The Theory of Everything</h1>

const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Stephen Hawking</h4>
 */

  
const Book = (props /* object destructing can be done this way as well {img, title, author, children}*/) => {
  return (
    <article className='book'>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
       {/* {props.children} */}
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));