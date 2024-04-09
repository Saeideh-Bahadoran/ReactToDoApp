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
            
              <input className="inputTask"
            type="text"
            name="taskDescription"
            placeholder="What do you need to do? "
            value={taskDescription}
            onChange={handleTaskDescriptionInput}
             />
            

            <button className= "addButton" type="submit">Add Task</button>
          </div>
      

      </form>
     );
}
 
export default AddTask;



