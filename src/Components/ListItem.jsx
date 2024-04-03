import tasksData from '../tasks.json';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { LuCheckCircle } from "react-icons/lu";

const ListItem = ({ currentTask, remove }) => {

    return (
        // <li>{currentTask.task}</li>

        <li className='item'>
            <div  style={{ display: 'flex', gap: "10px" }}> <div>{currentTask.completed ? <LuCheckCircle size={30} /> : <MdRadioButtonUnchecked size={32} />}</div>
                <Link to={`/task-details/${currentTask.id}`} className={currentTask.completed ? "crossedOut" : ""}>{currentTask.task}</Link>
            </div>
            <div>
                <MdDeleteOutline style={{ cursor: "pointer" }} size={24} onClick={() => remove(currentTask)} />
            </div>
        </li>

    );
};
export default ListItem;