import { Link, NavLink } from "react-router-dom";
// import "./Header.css";

const Header = () => {
  const activeStyle = {
    backgroundColor: "#323334",
    color: "#ffffff",
    borderRadius: "5px",
    padding: "0.25rem 0.5rem",
  };
  return (
    <div>
      <nav>
        <span>Router</span>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
