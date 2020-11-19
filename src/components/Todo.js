import React from 'react';

export default function Todo({ text, todos, setTodos, todo }) {
  const deleteHandler = () => {
    setTodos(todos.filter((data) => data.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((data) => {
        if (data.id === todo.id) {
          return {
            ...data,
            completed: !data.completed,
          };
        }
        return data;
      })
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completedHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
}
