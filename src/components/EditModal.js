import React from 'react';
import todo_form from '../img/todo-form.png';

const EditModal = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-slate-50 fixed top-0 left-0'>
            <div className='bg-white border border-green-100 shadow-md shadow-red-200 rounded-lg max-w-sm'>
                <img className='w-32 mx-auto pt-3' src={todo_form} alt="todo.png" />
                <h3 className='font-bold text-2xl font-oswald text-center text-slate-500 mt-5'>Edit Your Todo</h3>
                <form className='p-5'>
                    <label className='ml-2 font-medium text-slate-500 font-oswald'>Title</label>
                    <input className='bg-red-50 block w-full px-4 py-2 outline-none rounded-md mb-4 focus:shadow-inner caret-red-200 text-red-300 font-medium'  type="text" name='title' />
                    <label className='ml-2 font-medium text-slate-500 font-oswald'>description</label>
                    <textarea className='bg-green-50 block w-full px-4 py-2 outline-none rounded-md mb-4 focus:shadow-inner caret-green-200 text-green-300 font-medium resize-none' rows="4" name='description' ></textarea>
                    <button type='submit' className='px-8 py-1 bg-purple-200 text-purple-500 font-medium rounded-full shadow-md shadow-green-200 my-4 hover:-translate-y-1 transition mr-5'>Edit Todo</button>
                    <button className='px-8 py-1 bg-red-300 text-red-50 font-medium rounded-full shadow-md shadow-green-200 my-4 hover:-translate-y-1 transition'>Cancel</button>
                </form>
            </div>
      </div>
  )
}

export default EditModal