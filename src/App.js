import React, { useEffect } from 'react';
import './App.less';
import TodoAddForm from './components/todoAddForm';
import TodoItem from './components/todoItem/todoItem';

function App() {
  const [todos, setTodos] = React.useState([]);
  // const [title, setTitle] = React.useState('');
  // const [description, setDescription] = React.useState('');
  // const [deadline, SetDeadLine] = React.useState(null);
  const [todo, setTodo] = React.useState({});

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((t) => [...t, todo]);
    setTodo(null);
  };

  const deleteTodo = (t) => {
    console.log(t);
  };

  const editTodo = (t) => {
    console.log(t);
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div className="app">
      <div className="todo">
        <h1>Список задач</h1>
        <TodoAddForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
        {todos.length > 0 && (
          <ul className="todo__list">
            {todos.map((todo, i) => (
              <TodoItem key={i} todo={todo} onEdit={editTodo} onDelete={deleteTodo} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
