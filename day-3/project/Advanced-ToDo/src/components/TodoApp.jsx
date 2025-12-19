import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters"

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");


  function addTodo(text) {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }
  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
      <TodoFilters 
      currentFilter={filter}
      onChangeFilter={setFilter}
      />
    </div>
  );
}

export default TodoApp;
