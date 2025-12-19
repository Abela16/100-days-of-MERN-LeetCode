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
        <div className="flex gap-2 mb-4">
           <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Enter the task ..."
            value={newTask}
            onChange={handleInput}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring w-130 "
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Add</button>
           </form>
        </div>
    )
}

export default TodoForm;