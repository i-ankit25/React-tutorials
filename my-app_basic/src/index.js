import React from 'react';
import ReactDom from 'react-dom'; 

//stateless functional component
//always return JSX
//JSX rules
//1. return single element - div / section / class / fragment
//2. use camelCase for html attributes 
//3. close every element
//4. className instead of class

// Nested componenets, React tools

function Greeting() {
  return (
    <div>
        <Person />
       <Message />
      </div>
  );
}
//Another way of defining components
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world!!')
//   );
// };

//implicit return
const Person = () => <h2>John doe</h2>;
//explicit return
const Message = () => {
  return <p> this is my message!!</p>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
