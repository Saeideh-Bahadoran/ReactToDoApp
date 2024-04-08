import { useState } from 'react';
import { Link } from "react-router-dom";
import { MdDeleteOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { LuCheckCircle } from "react-icons/lu";
import { GrEdit } from "react-icons/gr";
import { MdOutlineFileDownloadDone, MdCancel } from "react-icons/md";

const ListItem = ({ currentTask, remove }) => {
    const [editable, setEditable] = useState(false);
    const [editedTask, setEditedTask] = useState(currentTask.task);
    const [completed, setCompleted] = useState(currentTask.completed); //Initial complete status

    const handleToggleCompletion = () => {
        setCompleted(!completed); // Toggle Completed or not completed 
    };

    const handleEdit = () => {
        setEditable(true);
    };

    const handleInputChange = (e) => {
        setEditedTask(e.target.value);
    };

    const handleSave = () => {
        if (editedTask.trim() !== '') {
            // Update the task content if not empty
            currentTask.task = editedTask;
        }
        setEditable(false);
        // You can send the edited task to a parent component to update the tasks array
    };

    return (
        <li className='item'>
            <div style={{ display: 'flex', gap: "10px" }}>
                <div onClick={handleToggleCompletion}>
                    {completed ? <LuCheckCircle size={30} /> : <MdRadioButtonUnchecked size={32} />}
                </div>
                {editable ? (
                    <>
                        <input type="text" value={editedTask} onChange={handleInputChange} autoFocus />
                        <MdOutlineFileDownloadDone style={{ cursor: "pointer", marginRight: "10px", color: "green" }} size={24} onClick={handleSave} />
                        <MdCancel style={{ cursor: "pointer", marginRight: "10px", color: "tomato" }} size={24} onClick={() => { setEditable(false); setEditedTask(currentTask.task) }} />
                    </>
                ) : (
                    <Link to={`/task-details/${currentTask.id}`} className={completed ? "crossedOut" : ""}>{currentTask.task}</Link>
                )}
            </div>
            <div className='icons'>
                <div>
                    <GrEdit style={{ cursor: "pointer" }} size={24} onClick={handleEdit} />
                </div>
                <div>
                    <MdDeleteOutline style={{ cursor: "pointer" }} size={24} onClick={() => remove(currentTask)} />
                </div>
            </div>
        </li>
    );
};

export default ListItem;
/*
const [completed, setCompleted] = useState(currentTask.completed); //Initial complete status

    const handleToggleCompletion = () => {
        setCompleted(!completed); // Toggle Completed or not completed 
    };

    <div onClick={handleToggleCompletion}>{completed ? <LuCheckCircle size={30} /> : <MdRadioButtonUnchecked size={32} />}</div>
         
    this is the relevant code for the completed or not completed status and renders on screen icons :)
*/ 