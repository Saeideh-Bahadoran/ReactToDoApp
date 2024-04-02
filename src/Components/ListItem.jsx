import tasksData from '../tasks.json';
import { useState } from 'react';

const ListItem = ({ currentTask, remove }) => {

    return (
        // <li>{currentTask.task}</li>

        <li>
            {currentTask.completed ? "✅  " + currentTask.task : "❌  " + currentTask.task}
            <button type='button' onClick={() => remove(currentTask)}>delete</button>
        </li>

    );
};
export default ListItem;