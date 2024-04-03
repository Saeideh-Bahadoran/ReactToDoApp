import tasksData from '../tasks.json';
import { useState } from 'react';
import { Link } from "react-router-dom";

const ListItem = ({ currentTask, remove }) => {

    return (
        // <li>{currentTask.task}</li>

        <li className='item'>
           
            {currentTask.completed ?<div>✅ </div> : <div>❌</div>}
            <Link to={`/task-details/${currentTask.id}`}>{currentTask.task}</Link> 
            <button type='button' onClick={() => remove(currentTask)}>delete</button>
        </li>

    );
};
export default ListItem;