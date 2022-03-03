import react, { useEffect, useState } from 'react';
import todo_logo from './img/todo-logo.webp';
import Modal from './components/Modal';
import Controller from './components/Controller';
import Main from './components/Main';

function App() {
  const [isModal, setModal] = useState(false);

  return (
    <div>
      <img className='w-64 sm:w-80 mx-auto' src={todo_logo} alt="todo_logo"/>
      {/* controller section */}
      <Controller setModal={setModal}/>
      {/* main section */}
      <Main/>
      {/* modal section */}
      {isModal && <Modal setModal={setModal}/>}
    </div>
  );
}

export default App;
