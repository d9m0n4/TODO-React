import React from 'react';
import TodoItem from '../todoListItem/index.js';

const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo, toggleComplete }) => {
  return (
    <>
      {todos.length > 0 && (
        <ul className="todo__list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleUpdateTodo={handleUpdateTodo}
              onDelete={handleDeleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
