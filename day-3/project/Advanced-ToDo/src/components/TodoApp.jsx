import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

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

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </div>
  );
}

export default TodoApp;
