import React, { useEffect } from 'react';
import useUploadFile from '../../hooks/useUploadFile';
import AddIcon from '../ui/addIcon';
import UploadButton from '../uploadFile';

/**
 * @param {Object} props
 * @param {import('../../types.js').todoObject} props.todo
 */

const TodoAddForm = ({ todo, setTodo, handleSubmitTodo }) => {
  const { fileName, fileUrl, uploadFile } = useUploadFile();

  useEffect(() => {
    setTodo((p) => ({ ...p, file: fileUrl }));
  }, [fileUrl, setTodo]);

  return (
    <form onSubmit={handleSubmitTodo} className="todo__form">
      <div className="todo__title">
        <input
          required
          type="text"
          value={todo.title}
          placeholder="Наименование задачи..."
          onChange={(e) => setTodo((t) => ({ ...t, title: e.target.value }))}
          className="todo__input"
        />
      </div>
      {todo.title && (
        <div className="todo__description">
          <textarea
            placeholder="Введите описание задачи..."
            value={todo.description}
            required
            className="todo__texarea"
            rows="6"
            onChange={(e) => setTodo((t) => ({ ...t, description: e.target.value }))}></textarea>
        </div>
      )}

      {todo.description && (
        <div className="todo__details">
          <div className="todo__details-date">
            <input
              required
              type="date"
              onChange={(e) => setTodo((t) => ({ ...t, date: e.target.value }))}
            />
            <input
              required
              type="time"
              onChange={(e) => setTodo((t) => ({ ...t, time: e.target.value }))}
            />
          </div>
          <div className="todo__details-upload">
            {fileName ? fileName : 'Файл'}
            <UploadButton onChange={uploadFile} />
          </div>
        </div>
      )}

      {todo.description && (
        <button
          disabled={!todo.date || !todo.time}
          type="submit"
          className="todo__button todo__createBtn">
          Создать <AddIcon />
        </button>
      )}
    </form>
  );
};

export default TodoAddForm;
