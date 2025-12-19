import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters"
import useLocalStorage from "../hooks/useLocalStorage"

function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("filter", "all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <div className="flex  justify-center ">
      <div className="bg-amber-50 w-full max-w-2xl p-6 rounded-lg shadow">
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
    </div>
  );
}

export default TodoApp;
