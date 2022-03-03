import React, { useEffect, useRef, useState } from 'react';
import {collection, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore';
import {db} from '../firebase-config';
import { useDispatch } from 'react-redux';
import { deleteTodo, fetchTodo, todoIsCompleted } from '../features/todoSlice';
import { useSelector } from 'react-redux';
import EditModal from './EditModal';


const Main = () => {
  const {todos} = useSelector(data => data.todos);
  const dispatch = useDispatch();
  //? todos reference
  const todosReference = collection(db, 'todos');

  //? handle iscompleted
  const handleIsCompleted = async(id, iscomplete) => {
    const todoDoc = doc(db, 'todos', id);
    await updateDoc(todoDoc, {iscompleted: !iscomplete})
    dispatch(todoIsCompleted(id))
  }

  //? handle delete todo
  const handleDelete = async(id) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    dispatch(deleteTodo(id))
  }

  //? fetch all todos from firestore
  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosReference);
      const fetchTodos = data.docs.map(doc => ({...doc.data(), id: doc.id}))
      dispatch(fetchTodo(fetchTodos))
    }
    getTodos();
  },[]);

  return (
    <div className='max-w-5xl mx-auto px-7 md:px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 my-16'>
      {
        todos.map((todo) => (
          <div key={todo.id} className='border border-sky-100 p-5 shadow-md shadow-sky-200'>
            <div className='flex justify-between mb-5'>
                <h4 className='text-lg font-medium text-slate-500'>{todo.title}</h4>
                <button onClick={() => handleIsCompleted(todo.id, todo.iscompleted)} className={`font-medium text-xs ${todo.iscompleted ? 'bg-teal-100 text-teal-500' : 'bg-yellow-100 text-yellow-400'}  px-3`}>{todo.iscompleted ? "Copleted" : "Runing"}</button>
            </div>
            <p className='text-slate-500'>{todo.description}</p>
            <div className='mt-5'>
                <button className='px-6 py-1 bg-purple-200 text-purple-500 font-medium text-sm rounded-full mr-4'>Edit</button>
                
                <button onClick={() => handleDelete(todo.id)} className='px-6 py-1 bg-red-200 text-red-400 font-medium text-sm rounded-full'>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Main;