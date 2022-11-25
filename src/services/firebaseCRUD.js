import { addDoc, deleteDoc, doc, updateDoc, collection } from 'firebase/firestore';
import db from '../firebase/config';

/**
 *
 * @param {*} db
 * @param {import('../types').todoObject} todo
 */

export const createTodo = async (db, todo) => {
  try {
    await addDoc(collection(db, 'todos'), todo);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

/**
 *
 * @param {string} id
 */

export const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id));
};

/**
 *
 * @param {import('../types').todoObject} todo
 */

export const handleUpdateTodo = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    title: todo.title,
    description: todo.description,
  });
};

/**
 *
 * @param {import('../types').todoObject} todo
 */

export const toggleComplete = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    isComplete: !todo.isComplete,
  });
};
