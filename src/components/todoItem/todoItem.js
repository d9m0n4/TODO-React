import React from 'react';
import EditIcon from '../ui/editIcon';
import RemoveIcon from '../ui/removeIcon';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <li className="todo__list-item">
      <div className={'todo__list-item__body'}>{todo.title}</div>
      <div className="todo__list-item__controls">
        <div className="todo__checkbox">
          <input type="checkbox" />
        </div>
        <button onClick={() => onEdit(todo)} className="todo__button todo__list-item-editbtn">
          <EditIcon />
        </button>
        <button onClick={() => onDelete(todo)} className="todo__button todo__list-item-delbtn">
          <RemoveIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
