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
        return <Book key={book.id} {...book}></Book>
  })}
     </section>
  );
}

  
const Book = (props ) => {
  // attribute, eventHandler
  const clickHandler = () => {
    alert('hello world');
  };
  const complexExample = () => {
    console.log(props.author);
  };
  return (
    <article className='book' onMouseOver={() => {
      console.log(props.title);
    }}>
      <img src={props.img} alt="" />
      <h1 onClick={() => console.log(props.title)}/*inline function*/>{props.title}</h1>
      <h4>{props.author}</h4>
      <button type="button" onClick={clickHandler}/*reference*/>refernece example</button>
      <button type="button" onClick={() => complexExample(props.author)}/*reference*/>more complex example</button>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));