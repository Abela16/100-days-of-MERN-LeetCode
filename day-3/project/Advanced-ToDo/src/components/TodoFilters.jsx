function TodoFilters({ currentFilter, onChangeFilter }) {
    const btn = filter =>
    `px-3 py-1 rounded cursor-pointer ${
      currentFilter === filter
        ? "bg-blue-500 text-white"
        : "bg-gray-200"
    }`;
  return (
    <div className="flex gap-2 my-4 ">
      <button className={btn("all")} onClick={() => onChangeFilter("all")}>All</button>
      <button className={btn("active")} onClick={() => onChangeFilter("active")}>Active</button>
      <button className={btn("completed")} onClick={() => onChangeFilter("completed")}>Completed</button>
    </div>
  );
}

export default TodoFilters;
