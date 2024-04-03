import tasksData from "../tasks.json";
import { useState } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import TaskDetailsPage from "../assets/Pages/TaskDetailsPage";
const TasksList = () => {
  const [tasks, setTasks] = useState(tasksData);

  function removeItem(item) {
    setTasks(() => tasks.filter((i) => i.task !== item.task));
  }

  return (
    <>
      <ul>
        {tasks.map((item) => (
          <div key={item.task}>
            <Link to="/TaskDetailsPage">
              <TaskDetailsPage {...item} />;
              <ListItem
                currentTask={item}
                remove={(item) => removeItem(item)}
              />
            </Link>
            ;
          </div>
        ))}
      </ul>
    </>
  );
};
export default TasksList;
