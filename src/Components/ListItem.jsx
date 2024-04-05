import { useState } from 'react';
import { Link } from "react-router-dom";
import { MdDeleteOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { LuCheckCircle } from "react-icons/lu";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDataSaverOn, MdCancel } from "react-icons/md";

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
                <div>{currentTask.completed ? <LuCheckCircle size={30} /> : <MdRadioButtonUnchecked size={32} />}</div>
                {editable ? (
                    <input type="text" value={editedTask} onChange={handleInputChange} autoFocus />
                ) : (
                    <Link to={`/task-details/${currentTask.id}`} className={currentTask.completed ? "crossedOut" : ""}>{currentTask.task}</Link>
                )}
            </div>
            <div className='icons'>
    <div>
        {editable && (
            <>
               
                <MdOutlineDataSaverOn style={{ cursor: "pointer", marginRight:"10px" }} size={24} onClick={handleSave} />
                <MdCancel style={{ cursor: "pointer", marginRight:"10px" }} size={24} onClick={() => {setEditable(false)
                     setEditedTask(currentTask.task)}} /> 
            </>
        )}
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


//<MdOutlineDataSaverOn />
//<MdCancel />