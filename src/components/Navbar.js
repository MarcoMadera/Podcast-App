import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar__container">
      <Link to="/">Home</Link>
      <Link to="/library">Library</Link>
    </nav>
  );
};

export default Navbar;
