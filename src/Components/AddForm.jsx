import React, { useState } from "react";

const AddTask = ({onSubmit}) => {
    const [taskDescription, setTaskDescription] = useState("");
    const handleTaskDescriptionInput = (e) => setTaskDescription(e.target.value);



    return ( 

        <form onSubmit={(event) => onSubmit(event)}>
        <label >
          New task:
          <input
            type="text"
            name="taskDescription"
            placeholder="Task Description"
            value={taskDescription}
            onChange={handleTaskDescriptionInput}
          />
        </label>

        {/* <label >
          Completed
        <input name="completed" type="checkbox" checked={completed}  onChange={handleCompletedInput}/>
        </label> */}

       
        <button type="submit">Add Task</button>
      </form>
     );
}
 
export default AddTask;