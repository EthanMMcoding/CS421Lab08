import React from 'react'
import ClickEventExample from './ClickEventExample';
import FormExample from './FormExample';
import TodoList from './ToDoList';

function App() {
    return(
        <div className='App'><TodoList></TodoList></div>
    );
};

const tolkienBooks = [
    { title: 'The Hobbit', year: 1937 },
    { title: 'The Fellowship of the Ring', year: 1954 },
    { title: 'The Two Towers', year: 1954 },
    { title: 'The Return of the King', year: 1955 },
    { title: 'The Silmarillion', year: 1977 },
    { title: 'The Unfinished Tales', year: 1980 },
    { title: 'The Children of Hurin', year: 2007 }
];

const TokienBookList = () => {
    return (
        <div>
            <h1>
                J.R.R. Tolkien Books
            </h1>
            <ul>
                {tolkienBooks.map((book, index) =>(
                <li key = {index}>
                    <strong>{book.title}</strong> ({book.year})
                </li> 
            ))}
            </ul>
        </div>
    )
}

export default App;