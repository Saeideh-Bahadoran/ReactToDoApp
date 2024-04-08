import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { MdLibraryAdd } from "react-icons/md";
import { BiSolidInfoSquare } from "react-icons/bi";

const Sidebar = ({ toggleAddTaskVisibility }) => {
  const handleAddTaskClick = () => {
    toggleAddTaskVisibility(true);
  };

  return (
    <div className="sidebar">
      <ul >
        <li className="sidebarList">
          <NavLink to="/">
          <FaHome /> Home
          </NavLink>
        </li>
        <li className="sidebarList">
          <NavLink to="/about">
          <BiSolidInfoSquare /> About
          </NavLink>
        </li>
        <li className="sidebarList">
          <NavLink to="/" onClick={handleAddTaskClick}>
            {/* <MdAddTask />  */}
            <MdLibraryAdd />Add new task 
          </NavLink>
        </li>
        <li className="sidebarList">
          <NavLink to="/contacts">
          <ImAddressBook /> Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
