import { useState } from "react";
function TodoForm(){

    const [newTask, setNewTask] = useState("")
    function handleInput(event){
        setNewTask(event.target.value)
    }

    function handleSubmit(event) {
    event.preventDefault(); 
    const trimmedTask = newTask.trim();

    if (trimmedTask === "") return; 
    onAddTodo(trimmedTask);

    setNewTask(""); 
  }
    return(
        <div className="flex justify-center align-center">
           <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Enter the task ..."
            value={newTask}
            onChange={handleInput}
            className=" border-2 "
            />
            <button type="submit" className=" bg-blue-500" onClick={addTodo}>Add</button>
           </form>
        </div>
    )
}

export default TodoForm;