//default export(only 1 default export from each file)
import React from 'react'

const Book = (props) => {
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
}; 

export default Book
