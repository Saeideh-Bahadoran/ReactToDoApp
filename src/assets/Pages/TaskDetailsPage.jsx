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
    <div className="datailContainer">

       <label ><h3 >Your Task Description:</h3>  </label>
      <div className="taskDetail">
        {detailItem.task}
        </div>
      
      <Link to= "/"><button  className= "detailBackBtn" type="button">Back to the list</button></Link>
    
    </div>
     </>
  );
};

export default TaskDetailsPage;
