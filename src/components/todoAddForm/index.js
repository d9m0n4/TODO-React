import React from 'react';
import AddIcon from '../ui/addIcon';
const TodoAddForm = ({ todo, setTodo, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="todo__form">
      <div className="todo__title">
        <input
          required
          type="text"
          value={todo.title}
          onChange={(e) => setTodo((t) => ({ ...t, title: e.target.value }))}
          className="todo__input"
        />
      </div>
      {todo && (
        <div className="todo__description">
          <textarea
            value={todo.description}
            required
            className="todo__texarea"
            rows="6"
            onChange={(e) => setTodo((t) => ({ ...t, description: e.target.value }))}></textarea>
        </div>
      )}
      <button type="submit" className="todo__button ">
        <AddIcon />
      </button>
    </form>
  );
};

export default TodoAddForm;
