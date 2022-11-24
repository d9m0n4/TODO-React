import React, { useEffect } from 'react';
import './App.less';
import TodoAddForm from './components/todoAddForm';
import TodoItem from './components/todoItem/todoItem';
import db from './firebase/config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function App() {
  const initialTodo = {
    title: '',
    description: '',
    date: null,
    time: null,
    file: null,
    isComplete: false,
  };
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState(initialTodo);

  const addData = async (db, todo) => {
    try {
      await addDoc(collection(db, 'todos'), todo);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  const addTodo = (e) => {
    e.preventDefault();
    if (todo) {
      addData(db, todo);
    }
    setTodo(initialTodo);
  };

  const deleteTodo = (t) => {
    console.log(t);
  };

  const editTodo = (t) => {
    console.log(t);
  };

  const reacdData = async (db) => {
    const querySnapshot = await getDocs(collection(db, 'todos'));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()} ${doc}`);
    });
  };

  useEffect(() => {
    reacdData(db);
  }, []);

  return (
    <div className="app">
      <div className="todo">
        <h1>Список задач ✏️</h1>
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
