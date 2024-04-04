import React from "react";
import ListItem from "./ListItem";

const TasksList = ({ tasks, removeItem }) => { // Receive tasks and removeItem function as props
  return (
    <>
      <ul className="taskList">
        {tasks.map((item) => (
          <div key={item.id}>
            <ListItem currentTask={item} remove={removeItem} />
          </div>
        ))}
      </ul>
    </>
  );
};

export default TasksList;

