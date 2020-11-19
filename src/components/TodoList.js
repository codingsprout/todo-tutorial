import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, setTodos, filterTodo }) {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodo.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
