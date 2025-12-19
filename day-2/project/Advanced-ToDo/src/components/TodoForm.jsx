import { useState } from "react";
function TodoForm({onAddTodo}){

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
        <div className="flex justify-center align-center mt-10 rounded-2xl">
           <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Enter the task ..."
            value={newTask}
            onChange={handleInput}
            className=" border-2 w-100 "
            />
            <button type="submit" className=" bg-blue-500 px-2 py-0.5">Add</button>
           </form>
        </div>
    )
}

export default TodoForm;