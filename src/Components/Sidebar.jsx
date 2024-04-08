// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { MdAddTask } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">
            Home     <FaHome />
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">About  <ImAddressBook />
          </NavLink>

        </li>
        <li>
          <NavLink to="/">Add new task  <MdAddTask />
          </NavLink>

        </li>


      </ul>
    </div>
  );
};

export default Sidebar;
