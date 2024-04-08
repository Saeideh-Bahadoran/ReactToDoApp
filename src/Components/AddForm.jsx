import React, { useState } from "react";

const AddTask = ({onSubmit}) => {
    const [taskDescription, setTaskDescription] = useState("");
    const handleTaskDescriptionInput = (e) => setTaskDescription(e.target.value);
    const [isAddClick, setIsAddClick] = useState(false);
    
    const HandleAddClick = () => {
      setIsAddClick(true);
  };

    return ( 
      
        <form onSubmit={(event) => onSubmit(event)}>
        
          <div className="AddNewTask">
            <label>
              <input
            type="text"
            name="taskDescription"
            placeholder="What do you need to do? "
            value={taskDescription}
            onChange={handleTaskDescriptionInput}
             />
            </label>
          </div>
        

        {/* <label >
          Completed
        <input name="completed" type="checkbox" checked={completed}  onChange={handleCompletedInput}/>
        </label> */}

       
        <button type="submit">Add Task</button>
      </form>
     );
}
 
export default AddTask;