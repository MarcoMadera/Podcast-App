import React, { useEffect } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { clip } = props;

  return (
    <nav className="Navbar__container">
      <Link to="/">Home</Link>
      {/* <Link to="/library">Library</Link> */}

      {clip != undefined && (
        <audio controls autoPlay={true}>
          <source src={clip.urls.high_mp3} type="audio/mpeg" />
        </audio>
      )}
    </nav>
  );
};

export default Navbar;
