function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between py-2 border mb-2 px-2">
      <div className="flex items-center gap-2">
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span className="text-2xl font-bold"
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>
      </div>

      <button onClick={() => onDelete(todo.id)} className="text-red-500  hover:text-red-700 cursor-pointer">Delete</button>
    </li>
  );
}

export default TodoItem;
