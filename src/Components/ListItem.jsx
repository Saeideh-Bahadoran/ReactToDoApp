import tasksData from '../tasks.json';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { LuCheckCircle } from "react-icons/lu";
import { GrEdit } from "react-icons/gr";
import Edit from '../assets/Pages/EditPage';
;
const ListItem = ({ currentTask, remove }) => {
    const [editable, setEditable] = useState(false);
    const [editedTask, setEditedTask] = useState(currentTask.task);

    const handleEdit = () => {
        setEditable(true);
    };

    const handleInputChange = (e) => {
        setEditedTask(e.target.value);
    };

    const handleSave = () => {
        // Save changes
        setEditable(false);
        // You can send the edited task to a parent component to update the tasks array
        
    };

    return (
        <li className='item'>
            <div style={{ display: 'flex', gap: "10px" }}>
                <div>{currentTask.completed ? <LuCheckCircle size={30} /> : <MdRadioButtonUnchecked size={32} />}</div>
                {editable ? (
                    <input type="text" value={editedTask} onChange={handleInputChange} autoFocus />
                ) : (
                    <Link to={`/task-details/${currentTask.id}`} className={currentTask.completed ? "crossedOut" : ""}>{currentTask.task}</Link>
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
