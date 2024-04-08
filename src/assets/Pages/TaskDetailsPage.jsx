import React from "react";
import tasksData from "../../tasks.json";
import { useParams, Link } from 'react-router-dom';

const TaskDetailsPage = ({tasks}) => {
  const { taskId } = useParams();
  console.log('taskId -->', taskId);
  console.log({tasks})
  const detailItem = tasks.find((item)=> item.id == taskId)
  // console.log(tasksData , detailItem)

  return (
    <>
      <label >Your task description </label>
      <div className="taskDetail">
        {detailItem.task}
        </div>
      
      <Link to= "/"><button  className= "detailBackBtn" type="button">Back to the list</button></Link>
    </>
  );
};

export default TaskDetailsPage;
