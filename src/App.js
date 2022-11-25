import React, { useEffect } from 'react';
import './App.less';
import TodoAddForm from './components/todoAddForm';
import db from './firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import TodoList from './components/todoList';
import { createTodo, deleteTodo, handleUpdateTodo, toggleComplete } from './services/firebaseCRUD';

function App() {
  const initialTodo = {
    title: '',
    description: '',
    date: '',
    time: '',
    file: '',
    isComplete: false,
  };
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState(initialTodo);

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (todo) {
      createTodo(db, todo);
    }
    setTodo(initialTodo);
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'todos'), (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todosArray);
    });
    //прекращаем слушать изменения в реальном времени
    return () => unsub();
  }, []);

  return (
    <div className="app">
      <div className="todo">
        <h1>Список задач ✏️</h1>
        <TodoAddForm todo={todo} setTodo={setTodo} handleSubmitTodo={handleSubmitTodo} />
        <TodoList
          todos={todos}
          handleDeleteTodo={deleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
