import React, { useState } from "react";

const Task = ({ task, index, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    editTask(index, updatedTask);
    setIsEditing(false);
  };

  function formatDateFromISOString(isoString) {
    const date = new Date(isoString);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  }

  return (
    <div className="border p-4 mb-2">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white p-2 mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white p-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <p className="text-gray-600">
            {formatDateFromISOString(task.dueDate)}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white p-2 mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task._id)}
            className="bg-red-500 text-white p-2"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
