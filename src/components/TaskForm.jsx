import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      title: "",
      description: "",
      dueDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
