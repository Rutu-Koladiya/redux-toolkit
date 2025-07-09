import { useState } from "react";

const Task = () => {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      name: `Task ${i + 1}`,
      completed: false,
      active: false,
    }))
  );

  const toggleActive = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, active: !task.active } : task
      )
    );
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return task.active;
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        Filters:
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("active")}>Active</button>
      </div>
      {filteredTask?.length === 0 ? (
        <p>no tasks.</p>
      ) : (
        <ul>
          {filteredTask?.filter((task) => (
            <li key={task.id}>
              {task.name}
              <label htmlFor={`completed-${task.id}`}> completed </label>
              <input
                name="completed"
                id={`completed-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <label htmlFor={`active-${task.id}`}> active </label>
              <input
                name="active"
                id={`active-${task.id}`}
                type="checkbox"
                checked={task.active}
                onChange={() => toggleActive(task.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task;
