function TodoFilters({ currentFilter, onChangeFilter }) {
  return (
    <div>
      <button onClick={() => onChangeFilter("all")}>All</button>
      <button onClick={() => onChangeFilter("active")}>Active</button>
      <button onClick={() => onChangeFilter("completed")}>Completed</button>
    </div>
  );
}

export default TodoFilters;
