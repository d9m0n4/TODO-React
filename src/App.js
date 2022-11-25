import React, { useEffect } from 'react';
import './App.less';
import TodoAddForm from './components/todoAddForm';
import TodoItem from './components/todoListItem/index.js';
import db from './firebase/config';
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import TodoList from './components/todoList';

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

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const handleUpdateTodo = async (t) => {
    await updateDoc(doc(db, 'todos', t.id), {
      title: t.title,
      description: t.description,
    });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      isComplete: !todo.isComplete,
    });
  };

  useEffect(() => {
    const snapshotQuery = onSnapshot(collection(db, 'todos'), (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todosArray);
    });
    return () => snapshotQuery();
  }, []);

  return (
    <div className="app">
      <div className="todo">
        <h1>Список задач ✏️</h1>
        <TodoAddForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
