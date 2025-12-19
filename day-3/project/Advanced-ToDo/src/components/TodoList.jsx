import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDeleteTodo}
          onToggle={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
