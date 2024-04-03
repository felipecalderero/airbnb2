import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="sidebar">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
