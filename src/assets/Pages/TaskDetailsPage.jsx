import React from "react";
import tasksData from "../../tasks.json";

const TaskDetailsPage = (currentTask) => {
  const TaskDetail = tasksData.find(
    (newTask) => newTask.task === currentTask.task
  );

  return (
    <>
      <h1>hi</h1>
      <div>{TaskDetail.task}</div>
    </>
  );
};

export default TaskDetailsPage;
