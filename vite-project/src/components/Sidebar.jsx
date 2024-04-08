import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="sidebar">
      <li className="sidebar-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "unselected")}
        >
          Home
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "selected" : "unselected")}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
