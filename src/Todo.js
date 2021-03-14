import  React  from "react";


function Todo({todo, changeCompleteEtat}){
   
   function handleTodoClick(){
       changeCompleteEtat(todo.id);
   }
   
    return(
       <div>
           <label>
                <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}  />
                {todo.name}
           </label>
           
        </div>
        
    )
};

export default Todo;