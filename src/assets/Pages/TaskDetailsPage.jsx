import React from "react";
import tasksData from "../../tasks.json";
import { useParams, Link } from 'react-router-dom';

const TaskDetailsPage = (tasks) => {
  const { taskId } = useParams();
  console.log({taskId})
  console.log('taskId -->', taskId);
  const detailItem = tasks.find((item)=> item.id == taskId)
  console.log(tasksData , detailItem)

  return (
    <>
      
      <div>{detailItem.task}</div>
      <button type="button"><Link to= "/">Back</Link></button>
    </>
  );
};

export default TaskDetailsPage;
