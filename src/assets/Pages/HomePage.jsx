import React, { useState } from "react";
import TasksList from "../../Components/TasksList";

const HomePage = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([
    { id: "0", task: "Read the project brief", completed: true },
    { id: "1", task: "Create a project repository", completed: false },
    { id: "2", task: "Create React application using Vite", completed: false },
    { id: "3", task: "Finish Day 1 Development Tasks", completed: false },
    { id: "4", task: "Finish Day 1 Research Tasks", completed: false },
    { id: "5", task: "Finish Day 2 Development Tasks", completed: false },
    { id: "6", task: "Finish Day 2 Research Tasks", completed: false }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length.toString(),
      task: taskName,
      description: taskDescription,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTaskName(""); // Reset input value
    setTaskDescription(""); // Reset input value
  };

  const removeItem = (item) => {
    setTasks(tasks.filter((i) => i.id !== item.id));
  };

  return (
    <div>
      <TasksList tasks={tasks} removeItem={removeItem} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default HomePage;

