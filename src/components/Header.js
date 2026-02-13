import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/css/header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      <div className="container nav">

        {/* LOGO */}
        <Link to="/" className="logo">
          ICA Global
        </Link>


        {/* DESKTOP MENU */}
        <nav className={menu ? "nav-links active" : "nav-links"}>
          <Link to="/" onClick={() => setMenu(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenu(false)}>About</Link>
          <Link to="/courses" onClick={() => setMenu(false)}>Courses</Link>
          <Link to="/contact" onClick={() => setMenu(false)}>Contact</Link>
          <Link to="/verify" onClick={() => setMenu(false)}>Verify</Link>
        </nav>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenu(!menu)}>
          {menu ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
};

export default Header;
