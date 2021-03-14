import React from 'react';
import Todo from './Todo';


function LeftTodo({ todos, changeCompleteEtat }){
    return (
        
            todos.map( todo => { 
                if (!todo.complete){
                    return <Todo key ={todo.id} todo={todo} changeCompleteEtat={changeCompleteEtat} />
                }
                return null;            
            })
        
    )
};

export default LeftTodo;