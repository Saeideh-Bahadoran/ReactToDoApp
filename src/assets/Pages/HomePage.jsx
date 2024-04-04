import React, { useState } from "react";
import TasksList from "../../Components/TasksList";
import tasksData from "../../tasks.json";
import AddTask from "../../Components/AddForm";

const HomePage = ({tasks,setTasks}) => {
  // const [taskName, setTaskName] = useState("");
  // const [tasks, setTasks] = useState(tasksData)

  const handleSubmit = (e) => {
    console.log()
    e.preventDefault();
    const newTask = {
      id: tasks.length.toString(),
      task: e.target.taskDescription.value,
      completed: false
    };
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks);
    console.log(newTask)

  };

  const removeItem = (item) => {
    setTasks(tasks.filter((i) => i.id !== item.id));
  };

  return (
    <div>
       <AddTask onSubmit={handleSubmit} />
      <TasksList tasks={tasks} removeItem={removeItem} />

    </div>
  );
};

export default HomePage;

