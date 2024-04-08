import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddTask } from "react-icons/md";

const Sidebar = ({ toggleAddTaskVisibility }) => {
  const handleAddTaskClick = () => {
    toggleAddTaskVisibility(true);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={handleAddTaskClick}>
            Add new task <MdAddTask />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
