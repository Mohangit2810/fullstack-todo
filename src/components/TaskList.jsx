import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
