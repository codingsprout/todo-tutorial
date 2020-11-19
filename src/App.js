import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [sort, setSort] = useState('all');
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, sort]);

  const filterHandler = () => {
    switch (sort) {
      case 'completed':
        setFilterTodo(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        appInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setSort={setSort}
      />
      <TodoList setTodos={setTodos} todos={todos} filterTodo={filterTodo} />
    </div>
  );
}

export default App;
