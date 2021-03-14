import React, { useState, useRef, useEffect } from 'react'; 
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import CompletedTodo from './CompletedTodo.js';
import LeftTodo from './LeftTodo.js'

const LOCAL_STORAGE_KEY= 'todoApp.todos';

function App() {
  const [todos, setTodos]= useState([]);
  const todoNameRef= useRef();

  useEffect(()=>{
    const storredTodos= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storredTodos) setTodos(storredTodos);
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function changeCompleteEtat(id){
    const newTodos= [...todos];
    const todo = newTodos.find(todo=> todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e){
   const name= todoNameRef.current.value;
   if(name ==='') return
   setTodos(prevTodos => {
     return [...prevTodos,
      {id: uuidv4(), 
      name: name, 
      complete:false}]
   })
   todoNameRef.current.value=null

}
function handleClearTodos(){
  const newTodos= todos.filter(todo=> !todo.complete);
  setTodos(newTodos);
}

function handleResetTodos(){
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  setTodos([]);
}
  return (
    <div className='container'>
      <h1 className='title'>My Todo List</h1>
      <div className="NumleftTodo">{todos.filter(todo => !todo.complete).length} left to do</div>
      <input ref={todoNameRef} type="text" placeholder='new todo...' className='nouvelleTache' />
      <div className='buttonsContainer'>
        <button onClick={handleAddTodo} className="buttons">Add Todo</button>
        <button onClick={handleClearTodos} className="buttons">Clear Completed Todos</button>
        <button onClick={handleResetTodos} className="buttons">Reset Todos</button>
      </div>
      <div className='listeTodo' >
        <div className='lefttodo'>
          <LeftTodo todos={todos} changeCompleteEtat={changeCompleteEtat}  />
        </div>
        <div className='completedtodo'>
          <CompletedTodo todos={todos} changeCompleteEtat={changeCompleteEtat}  />
        </div>
        
      </div>
      
    </div> 
      
  );
}

export default App;
