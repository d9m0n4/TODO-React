import React from 'react';
import EditIcon from '../ui/editIcon';
import RemoveIcon from '../ui/removeIcon';
import DocumentIcon from '../ui/documentIcon';
import CheckIcon from '../ui/checkIcon';
import formatDate from '../../utils/formatDate';
import isDateDiff from '../../utils/dateDiff';
import XIcon from '../ui/xIcon';

/**
 * @callback onDelete
 * @param {string} id
 *
 */

/**
 * @callback todoCb
 * @param {import('../../types').todoObject} todo
 *
 */

/**
 * @param {Object} props
 * @param {import('../../types').todoObject} props.todo
 * @param {onDelete} props.onDelete
 * @param {todoCb} props.handleUpdateTodo
 * @param {todoCb} props.toggleComplete
 * @returns
 */

const TodoItem = ({ todo, onDelete, handleUpdateTodo, toggleComplete }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [newData, setNewData] = React.useState(todo);
  const [isOpenDescription, setIsOpenDescription] = React.useState(false);

  const updateTodo = () => {
    handleUpdateTodo(newData);
    setIsEdit(false);
  };

  return (
    <li className="todo__list-item">
      <div className="todo__list-item__body">
        {isDateDiff(todo.date + todo.time) && !newData.isComplete ? (
          <XIcon />
        ) : (
          <input
            type="checkbox"
            className="todo__list-item__check"
            checked={todo.isComplete}
            onChange={() => toggleComplete(todo)}
          />
        )}
        <div className="todo__list-item__text">
          <input
            disabled={!isEdit}
            type="text"
            value={newData.title}
            onChange={(e) => setNewData((p) => ({ ...p, title: e.target.value }))}
            className={`todo__list-item__title ${
              isDateDiff(todo.date + todo.time) ? 'expired' : ''
            } ${todo.isComplete ? 'complete' : ''} `}
          />

          {isEdit ? (
            <textarea
              disabled={!isEdit}
              value={newData.description}
              onChange={(e) => setNewData((p) => ({ ...p, description: e.target.value }))}
              className="todo__list-item__descr edit"
            />
          ) : (
            <p
              onClick={() => setIsOpenDescription(!isOpenDescription)}
              className={`todo__list-item__descr textOverflow ${isOpenDescription ? 'open' : ''}`}>
              {newData.description}
            </p>
          )}
          <div className="todo__list-item__info">
            <div className="todo__list-item__date">
              <span className={isDateDiff(todo.date + todo.time) ? 'todo--expired' : null}>
                {formatDate(todo.date, todo.time)}
              </span>
            </div>
            <span className="todo__list-item__file">
              {todo.file && (
                <a href={todo.file} target="_blank" rel="noreferrer">
                  <DocumentIcon />
                </a>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="todo__list-item__controls">
        {isEdit ? (
          <button onClick={() => updateTodo()} className="todo__button todo__list-item__checkbtn">
            <CheckIcon />
          </button>
        ) : (
          <button onClick={() => setIsEdit(true)} className="todo__button todo__list-item__editbtn">
            <EditIcon />
          </button>
        )}
        <button onClick={() => onDelete(todo.id)} className="todo__button todo__list-item__delbtn">
          <RemoveIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
