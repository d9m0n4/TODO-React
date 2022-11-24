import React from 'react';
import EditIcon from '../ui/editIcon';
import RemoveIcon from '../ui/removeIcon';
import DocumentIcon from '../ui/documentIcon';

const TodoItem = ({ todo, onDelete, onEdit, toggleComplete }) => {
  return (
    <li className="todo__list-item">
      <div className="todo__list-item__body">
        <input type="checkbox" className="todo__list-item__check" />
        <div className="todo__list-item__text">
          <h2 className="todo__list-item__title">{todo.title}</h2>
          <p className="todo__list-item__descr textOverflow">{todo.description}</p>
          <div className="todo__list-item__info">
            <div className="todo__list-item__date">
              <span>{todo.date}</span>
              <span>{todo.time}</span>
            </div>
            <span className="todo__list-item__file">
              <DocumentIcon /> 1
            </span>
          </div>
        </div>
      </div>
      <div className="todo__list-item__controls">
        <button onClick={() => onEdit(todo)} className="todo__button todo__list-item__editbtn">
          <EditIcon />
        </button>
        <button onClick={() => onDelete(todo)} className="todo__button todo__list-item__delbtn">
          <RemoveIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
