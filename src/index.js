import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoTitle from './todotitle';
import ToDoList from './todolist';


function TodoApp(){
    return(
      <div id="main">
        <ToDoTitle />
        <ToDoList />
      </div>
    );
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
