import React from 'react';
import  Todo  from "./Todo.js";

function todoList({ todos, changeCompleteEtat }){
    return (
        
            todos.map( todo => { 
            return <Todo key ={todo.id} todo={todo} changeCompleteEtat={changeCompleteEtat} />
            })
        
    )
};

export default todoList;