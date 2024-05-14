import React, { useState } from "react";

const AddTask = ({ onSubmit }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskDescriptionInput = (e) => setTaskDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e); // Call the onSubmit function passed from parent component
    setTaskDescription(""); // Reset the taskDescription state to clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="AddNewTask">
        <input
          className="inputTask"
          type="text"
          name="taskDescription"
          placeholder="What do you need to do?"
          value={taskDescription}
          onChange={handleTaskDescriptionInput}
          required
        />
        <button className="addButton" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};
 
export default AddTask;



