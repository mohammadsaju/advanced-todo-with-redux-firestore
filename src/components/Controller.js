import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { filterTodo, searchTodo } from '../features/todoSlice';

const Controller = ({setModal}) => {
  const dispatch = useDispatch();
  //? handle filter todo
  const handleFilter = (text) => {
    dispatch(filterTodo(text))
  }
  //? handle search
  const handleSearch = (e) => {
    dispatch(searchTodo(e.target.value))
  }

  return (
    <div className='flex flex-col items-center'>
            <div className='relative'>
                <input onChange={handleSearch}  className='block border border-purple-200 outline-none px-12 py-2 caret-violet-500 font-medium text-violet-400 shadow-sm shadow-purple-200 focus:shadow-inner' type="text" placeholder='search...'/>
                <FaSearch className='top-4 left-4 text-violet-700 absolute pointer-events-none'/>
            </div>
            <button onClick={() => setModal(true)}  className='bg-violet-200 px-16 mt-5 mb-7 rounded-md text-3xl font-extrabold text-violet-500 shadow-md shadow-purple-200 hover:scale-105 transition ease-out'>+</button>
            <div className='flex gap-5 bg-indigo-200 text-indigo-600 px-5 py-2 rounded-md'>
                <button onClick={() => handleFilter('all')} className='bg-indigo-400 font-medium text-sm rounded-md px-3 text-white hover:scale-105 transition ease-out'>All</button>
                <button onClick={() => handleFilter('running')} className='bg-indigo-400 font-medium text-sm rounded-md px-3 text-white hover:scale-105 transition ease-out'>Running</button>
                <button onClick={() => handleFilter('completed')} className='bg-indigo-400 font-medium text-sm rounded-md px-3 text-white hover:scale-105 transition ease-out'>Completed</button>
            </div>
      </div>
  )
}

export default Controller;